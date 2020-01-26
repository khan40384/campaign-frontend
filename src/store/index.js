import {applyMiddleware, compose, createStore} from 'redux';
import createReducer from './reducers';
import thunk from 'redux-thunk';



const store = createStore(createReducer, applyMiddleware(thunk));


export default store;
