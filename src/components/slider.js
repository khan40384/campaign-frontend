import React from 'react';
import { Zoom   } from 'react-slideshow-image';
import { makeStyles } from '@material-ui/core/styles';
 
 console.log(process.env.REACT_APP_RCB_VS_CSK);
const images   = [
  process.env.REACT_APP_RCB_VS_CSK,
  process.env.REACT_APP_RCB_VS_CSK,
  process.env.REACT_APP_RCB_VS_CSK
];

const useStyles = makeStyles(theme => ({
  slide: {
    width: theme.spacing(70),
    height: theme.spacing(40),
  }
}));
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
  export default function Slideshow () {
    const classes = useStyles();
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties} className={classes.slide}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}