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

export const errors = (state=null, action) => {
    switch(action.type) {
        case C.ADD_ERROR :
            return [
                ...state,
                action.payload
            ]

        case C.CLEAR_ERROR :
            return state.filter((message, i) => i !== action.payload)

        default :
            return state
    }
}

export const allSkiDays = (state=[], action) => {
    switch(action.type) {
        case C.ADD_DAY :
            const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)
            return (hasDayAlready) ?
                state :
                [
                ...state,
                skiDay(null, action)
            ]
        case C.REMOVE_DAY :
            return state.filter(skiDay => skiDay.date !== action.payload)
        default:
            return state
    }
}

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