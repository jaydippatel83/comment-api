import {combineReducers} from 'redux';
import CommentsReducers from 'reducers/comments';
import authReducer from '../reducers/auth';

export default combineReducers({
    comments:CommentsReducers,
    auth:authReducer
});