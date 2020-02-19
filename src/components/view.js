import React, {useEffect, useState} from 'react';
import * as Actions from '../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    TwitterIcon,
    FacebookIcon
} from 'react-share';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  gridList: {
    minHeight: theme.spacing(100),
  },
  slider: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: theme.spacing(70),
    width: theme.spacing(70),
    height: theme.spacing(90),
    margin: theme.spacing(3)
  },
  media: {
    height: theme.spacing(70),
    maxHeight: theme.spacing(70),
  },
  details: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColor.main,
    width: '100%',
    height: theme.spacing(8),
    '&:clicked' : {
      backgroundColor: theme.palette.primary.light,
    },
    '&:hover' : {
      backgroundColor: theme.palette.primary.light,
    },

  }
}));


function CenteredGrid(props) {
  const classes = useStyles();
  console.log(props);
  const [data, setData] = useState(null);
  const id = JSON.parse(window.localStorage.getItem('user')).userId;
  console.log(props.match.params.id);
  const name = props.match.params.id;
  const url = document.URL;
  console.log(url);
  console.log(document.URL);
   useEffect(() => {
    fetch('https://smct-server.herokuapp.com/campaign/getOne', {
          method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: id,
          campaignName: name
        })
      })
    .then(response => {
      if(response.status != 200){
      }
      else{
        response.json()
        .then(response => {
          setData(response);
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

   if(data == null){
    return null;
   }
   console.log(data);
  return (
    <div className={classes.root}>
      <Grid style={{display: 'flex', justifyContent: 'center'}} item xs={12}>
                          <Card className={classes.card}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={data.callback[0].cloudImage}
                              />
                              <CardContent className={classes.content1} >
                                <Typography gutterBottom variant="h5" component="h2" className={classes.content2}>
                                {data.callback[0].campaignName}
                                </Typography>
                                
                              </CardContent>
                            </CardActionArea>
                            <CardActions >
                            <Box display="flex" justifyContent="center"  width="100%">
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                           <TwitterShareButton
                                url={url}
                                title={data.callback[0].campaignName}
                                imageUrl={data.callback[0].cloudImage}
                                className="Demo__some-network__share-button">
                                <Button className={classes.details}>
                                PUBLISH TO TWITTER
                                  </Button>
                              </TwitterShareButton>
                              </Grid>
                              <Grid item xs={6}>
                              <FacebookShareButton
                                url={url}
                                quote={data.callback[0].campaignName}
                                imageUrl={data.callback[0].cloudImage}
                                className="Demo__some-network__share-button">
                                <Button className={classes.details}>
                                PUBLISH TO FACEBOOK
                                  </Button>
                              </FacebookShareButton>
                              </Grid>
                              </Grid>
                              </Box>
                            
            

</CardActions>              
       </Card>
                        </Grid>
      
    </div>
  );
}

export default CenteredGrid;