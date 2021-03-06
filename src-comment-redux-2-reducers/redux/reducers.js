import {combineReducers} from 'redux'

import {
    ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS,
    INCREMENT, DECREMENT
} from './action-types'

 function counter(state = 0, action){

    console.log('counter():', state, action);
    switch(action.type){
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}

const initComments = []
 function comments(state = initComments, action){
    console.log(action);
    switch(action.type){
        case ADD_COMMENT:
            return [action.data, ...state]
        case DEL_COMMENT:
            return state.filter((c, index)=> index!==action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    counter,
    comments
})