import {combineReducers} from 'redux';
import CommentsReducers from 'reducers/comments';

export default combineReducers({
    comments:CommentsReducers
});