import {combineReducers} from 'redux';
import auth from './auth.reducer';
import matches from './matches.reducer';
import steps from './steps.reducer';

const reducers = combineReducers({
    auth,
    matches,
    steps
});

export default reducers;
