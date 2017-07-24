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