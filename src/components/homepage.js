import React, {useEffect, useState} from 'react';
import * as Actions from '../store/actions';
import {useDispatch} from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from './gridList';
import Navigation from './navigation';
import store from '../store';
import axios from 'axios';
import $ from 'jquery';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  gridList: {
    minHeight: theme.spacing(100),
  },
  fab: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  add: {
    marginRight: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:clicked' : {
      backgroundColor: theme.palette.primary.light,
    },
    '&:hover' : {
      backgroundColor: theme.palette.primary.light,
    },
  }
}));

const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
  );


export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const singleFileChangedHandler = (event) => {
    const name = document.getElementById('raised-button-file').files[0].name;
    console.log(name);
    document.getElementById('img-name').innerHTML = name;
  }

  const singleFileUploadHandler = ( event ) => {
    event.preventDefault();
    const data = new FormData();
    const img = document.getElementById('raised-button-file');
    var name = document.getElementById('name').value;
    console.log(JSON.parse(window.localStorage.getItem('user')).userId);
    const id = JSON.parse(window.localStorage.getItem('user')).userId;
    name = id+"#"+name;
    console.log(name);
// If file selected
    console.log(name);
    if (img.files[0] != undefined ) {
      const json = JSON.stringify({
        campaignName: name
      });
      const blob = new Blob([json], {
        type: 'application/json'
      });
      data.append( 'profileImage', img.files[0], name );

      console.log(data.getAll('profileImage'));
      axios.post( 'https://smct-server.herokuapp.com/campaign/image', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
        body: JSON.stringify({
          campaignName: name
        })
      })
        .then( ( response ) => {
          if ( 200 === response.status ) {
            // If file size is larger than expected.
            if( response.data.error ) {
              if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                ocShowAlert( 'Max size: 2MB', 'red' );
              } else {
                console.log( response.data );
// If not the given file type
                ocShowAlert( response.data.error, 'red' );
              }
            } else {
              // Success
              let fileName = response.data;
              console.log( 'filedata', fileName );
              ocShowAlert( 'File Uploaded', '#3089cf' );
               delay(2000).then(()=>{
                  handleClose();
                   }
                  );
              
            }
          }
          else{
            response.json()
            .then(response => {
              ocShowAlert( response, 'red' );
            })
            .catch(err => {
              ocShowAlert(err, 'red');
            })
          }
        }).catch( ( error ) => {
        // If another error
        ocShowAlert( error, 'red' );
      });
    } else {
      // if file not selected throw error
      ocShowAlert( 'Please upload file', 'red' );
    }
  };

  const ocShowAlert = ( message, background = '#3089cf' ) => {
    let alertContainer = document.querySelector( '#oc-alert-container' ),
      alertEl = document.createElement( 'div' ),
      textNode = document.createTextNode( message );
    alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
    $( alertEl ).css( 'background', background );
    alertEl.appendChild( textNode );
    alertContainer.appendChild( alertEl );
    setTimeout( function () {
      $( alertEl ).fadeOut( 'slow' );
      $( alertEl ).remove();
    }, 3000 );
  };


  return (
    <div className={classes.root}>

      <Grid container  spacing={5}>
      <Grid item xs={12} >
        <Navigation />
        </Grid>
        <Grid className={classes.fab} item xs={12} >
          <Fab
              variant="extended"
              size="medium"
              color="secondary"
              className={classes.add}
              onClick={handleClickOpen}
            >
              <NoteAddOutlinedIcon />
              New Campaign
            </Fab>
          </Grid>
          <Dialog fullWidth="true" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Campaign Details</DialogTitle>
        <DialogContent>
        <DialogContentText>
        <div id="oc-alert-container"></div>
        </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Campaign Name"
            type="text"
            fullWidth
          />
          <input
            accept="image/*"
            style={{ display: 'none'}}
            id="raised-button-file"
            multiple
            type="file"
            name="profileImage"
            onChange={singleFileChangedHandler}
          />
          <div style={{display: 'flex'}}>
          <label htmlFor="raised-button-file">
          <Button
            variant="raised"
            component="span"
            className={classes.button}
            
            startIcon={<CloudUploadOutlinedIcon />}
          >
            Upload File
          </Button>
          </label>
          <div style={{display: 'flex', alignItems: 'center', margin: '5px'}} id="img-name"></div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={singleFileUploadHandler} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
        <Grid item xs={12}>
        <Grid container className={classes.gridList} spacing={3}>
        <GridList  />
        </Grid>
          </Grid>
      </Grid>
    </div>
  );
}