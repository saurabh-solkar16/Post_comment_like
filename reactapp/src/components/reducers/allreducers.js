import {combineReducers} from 'redux';
import login from './login-redux'

var store=combineReducers({login:login})

export default store;