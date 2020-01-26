import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slider from './slider';



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
   paper: {
    position: 'absolute',
    width: theme.spacing(100),
    height: theme.spacing(87),
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
  img: {
    width: '100%',
    height: '40%',
  }
}));

function SimpleModal(props) {
  const classes = useStyles();
  const [tileData, setTileData] = useState(null);
  const [modalStyle] = React.useState(getModalStyle);
  // getModalStyle is not a pure function, we roll the style only on the first render
 console.log(props.index);
    if(props.tileData[props.index] == null){
    return null;
    }
     return (
        <div style={modalStyle} className={classes.paper}>
        <Box display="flex" justifyContent="center" m={1}>
          
          <Slider/>
          </Box>
          <Box display="flex" justifyContent="center"  style={{whiteSpace: 'pre-line'}} m={7}>
         
               Team1: {props.tileData[props.index].team1} <br/>
               Team2: {props.tileData[props.index].team2} <br/>
                Date: {props.tileData[props.index].date}<br/>
                Season: {props.tileData[props.index].season}<br/>
               Venue: {props.tileData[props.index].venue}<br/>
                City: {props.tileData[props.index].city}<br/>
                Umpires: {props.tileData[props.index].umpire1}, {props.tileData[props.index].umpire2}, {props.tileData[props.index].umpire3}<br/>
                Toss Winner: {props.tileData[props.index].toss_winner}<br/>
                Toss Decision: {props.tileData[props.index].toss_decision}<br/>
                Result: {props.tileData[props.index].result}<br/>
                DL Applied: {props.tileData[props.index].dl_applied}<br/>
                Winner: {props.tileData[props.index].Winner}<br/>
               Win By Runs: {props.tileData[props.index].win_by_runs}<br/>
                Win By Wickets: {props.tileData[props.index].win_by_wickets}<br/>
                Man Of The Match: {props.tileData[props.index].player_of_match}<br/>
          
          </Box>
        </div>
  );
}

const mapStateToProps = function(state) {
  return {
    tileData: state.matches.matchesData
  }
}

export default connect(mapStateToProps)(SimpleModal);
