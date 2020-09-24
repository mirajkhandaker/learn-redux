import { combineReducers } from 'redux';
import isLoggedReducer from './IsLoggend';
import counterReducer from './Counter';

const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer
});

export default allReducers;