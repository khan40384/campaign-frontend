import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import * as Actions from '../store/actions';
import store from '../store';

console.log(store.getState());

    
 


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: theme.spacing(40),
    margin: theme.spacing(3)
  },
  media: {
    height: theme.spacing(40),
    maxHeight: theme.spacing(50),
  },
   paper: {
    position: 'absolute',
    width: theme.spacing(100),
    //height: theme.spacing(87),
    backgroundColor: theme.palette.secondary.light,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
  content1: {
    height: theme.spacing(1),
  },
  content2: {
    height: theme.spacing(5),
  },
  details: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColor.main,
    width: '100%',
    height: '100%',
    '&:clicked' : {
      backgroundColor: theme.palette.primary.light,
    },
    '&:hover' : {
      backgroundColor: theme.palette.primary.light,
    },

  }
  }
  ));

function MediaCard(props) {
  const classes = useStyles();
  const [tileData, setTileData] = useState(null);
  const dispatch = useDispatch();
  const id = JSON.parse(window.localStorage.getItem('user')).userId;
  
  useEffect(() => {
    fetch('https://smct-server.herokuapp.com/campaign/get', {
          method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: id
        })
      })
    .then(response => {
        if(response.status != 200){
          response.json()
          .then(response => {
            console.log(response);
            document.getElementById('grid').innerHTML = "NO COMPAIGN FOUND";
          })
          .catch(err => {
            console.log(err);
          })
        }
        else{
          response.json()
          .then(response => {
            console.log(response.callback);
            dispatch(Actions.setCampaignData(response.callback));
          })
          .catch(err => {
            console.log(err);
          })
        }
    }) 
    .catch(err => {
      console.log(err);
    })
   }, []);

    function returnCards(){
      var cards = [];
        console.log(props.tileData.length);
        props.tileData.forEach(data => {
          console.log(data);
        cards.push(
                      <Grid  item xs={3}>
                          <Card className={classes.card}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={data.cloudImage}
                              />
                              <CardContent className={classes.content1} >
                                <Typography gutterBottom variant="h5" component="h2" className={classes.content2}>
                                {data.campaignName}
                                </Typography>
                                
                              </CardContent>
                            </CardActionArea>
                            <CardActions >
                            <Box display="flex" justifyContent="center"  width="100%">
                              <Button  onClick={() => {window.location.href = `./view/${data.campaignName}`}} className={classes.details}   >
                                VIEW
                              </Button>
                              </Box>
                            </CardActions>
                          </Card>
                        </Grid>
                        );
                      })
    console.log(cards);
    return cards;
    }
    if(props.tileData == null){
    return null;
    }
  return (
    <Grid container  spacing={3}>
    <div id="grid" > </div>
        {returnCards()}
      </Grid>

  );
 
}

const mapStateToProps = function(state) {
  console.log(state.matches);
  return {
    tileData: state.matches.campaignData
  }
}

export default connect(mapStateToProps)(MediaCard);
