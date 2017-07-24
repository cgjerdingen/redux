import C from './constants'


// sampling of creation methods for action functions...

export function addDay(resort, date, powder=false, backcountry=false) {

    // Add app logic here....

    return {
        type: C.ADD_DAY,
        payload: { resort, date, powder, backcountry }
    }
}

export const removeDay = function(date) {

    // Add app logic here....

    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

//probably the most common ES6/7
export const setGoal = (goal) => {

    return {
        type: C.SET_GOAL,
        payload: goal
    }
}

export const addError = (error) => {

    return {
        type: C.ADD_ERROR,
        payload: error
    }
}

export const clearError = (index) => {

    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const changeSuggestions = (suggestions) => {

    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions = () => {

    return {
        type: C.CLEAR_SUGGESTIONS,
        payload: []
    }
}

export const randomGoals = () => (dispatch, getState) => {

    if (!getState().resortNames.fetching) {
        dispatch({
            type: C.FETCH_RESORT_NAMES
        })

        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            })
        }), 1500
    }
}