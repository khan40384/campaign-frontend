import {combineReducers} from 'redux';
import auth from './auth.reducer';
import matches from './matches.reducer';

const reducers = combineReducers({
    auth,
    matches
});

export default reducers;
