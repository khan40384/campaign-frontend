/* eslint-disable no-use-before-define */
import React from 'react';
import * as Actions from '../store/actions';
import {useDispatch} from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5),
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    display: 'flex',
    justifyContent: 'center',
  },
  labelRoot: {
    fontSize: 20,
    color: theme.palette.textColor.main,
    "&$labelFocused": {
      color: theme.palette.textColor.main,
    }
  },
  filter: {
    width: theme.spacing(25),
  }
}));

export default function Tags() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        className={classes.filter}
        options={top100Films}
        getOptionLabel={option => option.year}
        filterSelectedOptions
        onChange={(event, value) => {
          dispatch(Actions.setSelectedYear(value));
          dispatch(Actions.setIsNewSelectedTrue());
        }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Year"
            InputLabelProps={{
            classes: {
              root: classes.labelRoot
            }
            }}
            placeholder="Eg. 2019"
            fullWidth
          />
        )}
      />
      
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 2008 },
  { title: 'The Godfather', year: 2009 },
  { title: 'The Godfather: Part II', year: 2010 },
  { title: 'The Dark Knight', year: 2011 },
  { title: '12 Angry Men', year: 2012 },
  { title: "Schindler's List", year: 2013 },
  { title: 'Pulp Fiction', year: 2014 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2015 },
  { title: 'The Good, the Bad and the Ugly', year: 2016 },
  { title: 'Fight Club', year: 2017 }
];
