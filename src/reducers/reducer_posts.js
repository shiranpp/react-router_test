/**
 * Created by shira on 2017/10/4.
 */
import {FETCH_POSTS,FETCH_POST,CREATE_POST} from '../actions';
import _ from 'lodash';


export default function (state = {},action) {
    switch (action.type){
        case FETCH_POST:
            return {...state,[post.id]:post};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');
        default:
            return state;
    }
}