import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {applyMiddleware, compose, createStore} from 'redux';
import auth from './store/reducers/auth.reducer';

import * as serviceWorker from './serviceWorker';

//const store = createStore(auth);

ReactDOM.render(<Provider  store={store}>
				<App />
				</Provider>,
				 document.getElementById('root')
				 );

serviceWorker.unregister();
