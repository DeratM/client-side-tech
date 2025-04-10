import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; // Assign new comment an id
            comment.date = new Date().toISOString(); // Add current date
            return state.concat(comment);  // Add new comment to the state
        default:
            return state;
    }
};
