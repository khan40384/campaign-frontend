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
import Modal from '@material-ui/core/Modal';
import * as Actions from '../store/actions';
import ModelView from './model';
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
    margin: theme.spacing(1),
  },
  media: {
    height: theme.spacing(30),
    maxHeight: theme.spacing(30),
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
    height: theme.spacing(16),
  },
  content2: {
    height: theme.spacing(14),
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
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = (i) => {
    console.log(i);
    setOpen(true);
  };

  const handleView = (id) => {
    window.location.href = `./view:${id}`;
  }

  const handleClose = () => {
    setOpen(false);
  };
 // var tileData;

 const openModel = () => {
    setOpen(true);
  };


    function returnCards(){
      console.log(props.searchedText);
      var i;
      var cards = [];
      var img;
      var data=[];
      //console.log(props.activeStep);

      if(props.searchedText == null && props.searchedData != null){
        dispatch(Actions.setSearchedData(null));
        dispatch(Actions.setMatchesData(props.tileData));
        dispatch(Actions.setActiveStep());
      }
      else if(props.searchedText != null && props.isNewSelected == true){
        for(i=0; i<props.tileData.length; i++){
              console.log(props.tileData[i].team1.toLowerCase());
              if(props.tileData[i].team1.toLowerCase().includes(props.searchedText.toLowerCase()) || props.tileData[i].team2.toLowerCase().includes(props.searchedText.toLowerCase())){
                  console.log(props.tileData[i]);
                  data.push(props.tileData[i]);
                }
              };
          if(data.length > 0){
          dispatch(Actions.setSearchedData(data));
          dispatch(Actions.setActiveStep());
          dispatch(Actions.setIsNewSelectedFalse());
        }
      }

      else if(props.selectedYear.length == 0 && props.filterData != null){
        dispatch(Actions.setFilterData(null));
        dispatch(Actions.setMatchesData(props.tileData));
        dispatch(Actions.setActiveStep());
      }
      else if(props.selectedYear.length > 0 && props.isNewSelected == true){
        for(i=0; i<props.tileData.length; i++){
            props.selectedYear.forEach(year => {
              console.log(year.year);
              if(props.tileData[i].season == year.year){
                  data.push(props.tileData[i]);
                }
              });
          }
          
          dispatch(Actions.setFilterData(data));
          dispatch(Actions.setActiveStep());
          dispatch(Actions.setIsNewSelectedFalse());
        }
        
        if(props.searchedData != null){
          data = props.searchedData;
          //console.log(data);
        }
        else if(props.filterData != null){
          data = props.filterData;
          console.log(data);
        }
        else{
          data = props.tileData;
          //console.log(data);
        }

      for(i=props.activeStep*6; i<props.activeStep*6+6; i++){
        //console.log("inside returnCards");
        //console.log(data);

       if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_RCB_VS_SRH
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_RCB_VS_MI
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_RCB_VS_RPS
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_RCB_VS_KKR
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_RCB_VS_GL
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_RCB_VS_KXIP
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_RCB_VS_DD
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_RCB_VS_CSK
        }
        else if(data[i].team1 == 'Royal Challengers Bangalore' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_RCB_VS_RR
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_CSK_VS_SRH
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_CSK_VS_MI
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_CSK_VS_KKR
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_CSK_VS_KXIP
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_CSK_VS_DD
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_CSK
        }
        else if(data[i].team1 == 'Chennai Super Kings' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_CSK_VS_RR
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_MI_VS_SRH
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_MI
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_MI_VS_RPS
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_MI_VS_KKR
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_MI_VS_GL
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_MI_VS_KXIP
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_MI
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_MI
        }
        else if(data[i].team1 == 'Mumbai Indians' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_MI_VS_RR
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_KKR_VS_SRH
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_KKR
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_KKR_VS_RPS
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_KKR
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_KKR_VS_GL
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_KKR_VS_KXIP
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_KKR
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_KKR
        }
        else if(data[i].team1 == 'Kolkata Knight Riders' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_KKR_VS_RR
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_SRH
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_SRH
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_SRH_VS_RPS
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_KKR_VS_SRH
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_SRH_VS_GL
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_SRH_VS_KXIP
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_SRH
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_SRH
        }
        else if(data[i].team1 == 'Sunrisers Hyderabad' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_RR_VS_SRH
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_DD_VS_SRH
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_DD_VS_MI
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_DD_VS_RPS
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_DD_VS_KKR
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_DD_VS_GL
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_DD_VS_KXIP
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_DD
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_DD
        }
        else if(data[i].team1 == 'Delhi Daredevils' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_DD_VS_RR
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_SRH_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_KXIP_VS_RPS
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_KKR_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_KXIP_VS_GL
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_KXIP
        }
        else if(data[i].team1 == 'Kings XI Punjab' && data[i].team2 == 'Rajasthan Royals'){
          img = process.env.REACT_APP_RR_VS_KXIP
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_RR_VS_SRH
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_RR
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_KKR_VS_RR
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_RR
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_RR_VS_KXIP
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Chennai Super Kings'){
          img = process.env.REACT_APP_CSK_VS_RR
        }
        else if(data[i].team1 == 'Rajasthan Royals' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_RR
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_SRH_VS_RPS
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_RPS
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_RPS
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_KKR_VS_RPS
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Gujarat Lions'){
          img = process.env.REACT_APP_RPS_VS_GL
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_RPS
        }
        else if(data[i].team1 == 'Rising Pune Supergiant' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_KXIP_VS_RPS
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Sunrisers Hyderabad'){
          img = process.env.REACT_APP_SRH_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Mumbai Indians'){
          img = process.env.REACT_APP_MI_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Rising Pune Supergiant'){
          img = process.env.REACT_APP_RPS_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Kolkata Knight Riders'){
          img = process.env.REACT_APP_KKR_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Royal Challengers Bangalore'){
          img = process.env.REACT_APP_RCB_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Delhi Daredevils'){
          img = process.env.REACT_APP_DD_VS_GL
        }
        else if(data[i].team1 == 'Gujarat Lions' && data[i].team2 == 'Kings XI Punjab'){
          img = process.env.REACT_APP_KXIP_VS_GL
        }
        else{
          img = process.env.REACT_APP_KXIP_VS_GL
        }

        
        cards.push(
                      <Grid item xs={4}>
                          <Card className={classes.card}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={img}
                                title="Contemplative Reptile"
                              />
                              <CardContent className={classes.content1} >
                                <Typography gutterBottom variant="h5" component="h2" className={classes.content2}>
                                  <div>{data[i].team1}</div>
                                       <Typography variant="body2" color="textSecondary" component="p">
                                                  vs
                                        </Typography>          
                                  <div>{data[i].team2}</div>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {data[i].date} 
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions >
                            <Box display="flex" justifyContent="center"  width="100%">
                              <Button   className={classes.details}  onClick={() => handleOpen(data[i].id)}  >
                                VIEW DETAILS
                              </Button>

                              </Box>
                            </CardActions>
                          </Card>
                          <Modal
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                          open={open}
                          onClose={handleClose}
                        >
                         <div style={modalStyle} className={classes.paper}>
                         <div id="simple-modal-description">
                          <ModelView index={i} />
                          </div>
                          </div>
                        </Modal>
                        </Grid>
                        );
    
    }
    console.log(cards);
    return cards;
    }
    if(props.tileData == null){
    return null;
    }
  return (
    <Grid container spacing={3}>
        {returnCards()}
      </Grid>

  );
 
}

const mapStateToProps = function(state) {
  console.log(state.matches);
  return {
    tileData: state.matches.matchesData,
    activeStep: state.steps.activeStep,
    selectedYear: state.matches.selectedYear,
    filterData: state.matches.filterData,
    searchedData: state.matches.searchedData,
    isNewSelected: state.matches.isNewSelected,
    searchedText: state.matches.searchedText
  }
}

export default connect(mapStateToProps)(MediaCard);
