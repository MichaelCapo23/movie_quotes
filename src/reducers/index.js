import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import movie from './movie_reducer';
import user from './users_reducer';


export default combineReducers({ form, movie, user });

