import {createStore, applyMiddleware} from 'redux';
import textReducer from './reducers/textReducer';
import thunk from 'redux-thunk';
import reducers from '../app/reducers';
import counterReducer from './reducers/counterReducer';
//import loggerMiddleware from '../app/Middleware/logger';
import loggerMiddleware from 'redux-logger';

const store = createStore(reducers, applyMiddleware(thunk, loggerMiddleware));

export default store;
