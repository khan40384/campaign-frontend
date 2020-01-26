import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StarIcon from '@material-ui/icons/Star';
import Fab from '@material-ui/core/Fab';
import * as Actions from '../store/actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  select: {
    width: '100%',
  },
  margin: {
    backgroundColor: theme.palette.primary.main,
  },
  margin1: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  console.log(props.favouriteTeam);
  const handleChange = event => {
    console.log(event.target.value);
    dispatch(Actions.setFavouriteTeam(event.target.value));
    if(event.target.value == 'Royal Challengers Bangalore'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ff6600 0%, #ff0000 100%)'));
          }
          else if(event.target.value == 'Mumbai Indians'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ffcc66 0%, #0000cc 100%)'));
          }
          else if(event.target.value == 'Chennai Super Kings'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ff6600 0%, #ffff00 100%)'));
          }
          else if(event.target.value == 'Rajasthan Royals'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ff9966 0%, #cc0099 100%)'));
          }
          else if(event.target.value == 'Sunrisers Hyderabad'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ff9933 0%, #009933 100%)'));
          }
          else if(event.target.value == 'Kolkata Knight Riders'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ff9933 0%, #663300 100%)'));
          }
          else if(event.target.value == 'Delhi Daredevils'){
            dispatch(Actions.setGradient('linear-gradient(to left, #cc0000 0%, #000066 100%)'));
          }
          else if(event.target.value == 'Kings XI Punjab'){
            dispatch(Actions.setGradient('linear-gradient(to left, #ffcc66 0%, #ff0000 100%)'));
          }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCancel = () => {
    setOpen(false);
    dispatch(Actions.setFavouriteTeam(null));
    dispatch(Actions.setGradient('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,9,110,0.7234244039412641) 0%, rgba(0,212,255,1) 100%)'));
  };

  const handleCloseOk = () => {
          setOpen(false);
  };

  return (
    <div className={classes.margin1}>
          <Fab
          variant="extended"
          size="medium"
          color="secondary"
          className={classes.margin}
          onClick={handleClickOpen}
        >
          <StarIcon className={classes.extendedIcon} />
            FAVOURITE  TEAM
        </Fab>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleCloseOk}>
        <DialogTitle>Pick your favourite team</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">favourite Team</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={props.favouriteTeam}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Royal Challengers Bangalore">Royal Challengers Bangalore</MenuItem>
                <MenuItem value="Mumbai Indians">Mumbai Indians</MenuItem>
                <MenuItem value="Chennai Super Kings">Chennai Super Kings</MenuItem>
                <MenuItem value="Rajasthan Royals">Rajasthan Royals</MenuItem>
                <MenuItem value="Sunrisers Hyderabad">Sunrisers Hyderabad</MenuItem>
                <MenuItem value="Kolkata Knight Riders">Kolkata Knight Riders</MenuItem>
                <MenuItem value="Delhi Daredevils">Delhi Daredevils</MenuItem>
                <MenuItem value="Kings XI Punjab">Kings XI Punjab</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = function(state) {
  console.log(state.matches.favouriteTeam);
  return {
    favouriteTeam: state.matches.favouriteTeam
  }
}

export default connect(mapStateToProps)(DialogSelect);

