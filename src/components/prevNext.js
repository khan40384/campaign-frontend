import React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as Actions from '../store/actions';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

function ProgressMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  //const [totalStep, setTotalStep] = React.useState(6);
  console.log(props.activeStep);
  const dispatch = useDispatch();
  const handleNext = () => {
    //setActiveStep(activeStep + 1);
    dispatch(Actions.incActiveStep(props.activeStep+1));
  };

  const handleBack = () => {
    //setActiveStep(activeStep - 1);
    dispatch(Actions.decActiveStep(props.activeStep-1));
  };

  return (
    <MobileStepper
      variant="progress"
      steps={props.totalSteps}
      position="static"
      activeStep={props.activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={props.activeStep === (props.totalSteps-1)}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={props.activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}

const mapStateToProps = function(state) {
  console.log(Math.floor(state.matches.length/6));
  return {
    activeStep: state.steps.activeStep,
    totalSteps: Math.floor(state.matches.length/6)
  }
}

export default connect(mapStateToProps)(ProgressMobileStepper);
