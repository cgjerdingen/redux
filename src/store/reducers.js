/**
 * Created by Jaime on 7/8/2017.
 */
import C from '../constants'

export const goal = (state=10, action) =>
    (action.type === C.SET_GOAL) ?
        parseInt(action.payload) :
        state

export const skiDay = (state=null, action) =>
    (action.type === C.ADD_DAY) ?
        action.payload :
        state

/*
export const goal = (state=10, action) => {
    if (action.type === C.SET_GOAL){
        return parseInt(action.payload)
    } else {
        return state
    }
}

export const skiDay = (state=null, action) => {
    if (action.type === C.ADD_DAY){
        return action.payload
    } else {
        return state
    }
}

*/