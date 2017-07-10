import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-12-15",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Boreal",
        "date": "2016-12-16",
        "powder": false,
        "backcountry": false
    }
]

const  action = {
    type: C.REMOVE_DAY,
    payload: "2016-12-15"
}

const  nextState = allSkiDays(state, action)

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}    
    
`)


/* ------ Lesson 2-4 ------

import { errors } from './store/reducers'


const state = [
    "user not authorized",
    "server feed not found"
]

const  action = {
    type: C.ADD_ERROR,
    payload: "cannot connect to server"
}

const  nextState = errors(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}    
    
`)

const  actionClear = {
    type: C.CLEAR_ERROR,
    payload: 0
}
const  nextStateClear = errors(state, actionClear)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(actionClear)}
    new state: ${JSON.stringify(nextStateClear)}    
    
`)
 */

/* ------ Lesson 2-3 ------
import { skiDay } from './store/reducers'

const state = null
const  action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
}

const  nextState = skiDay(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}    
    
`)
*/
/*  ------ Lesson 2-2 ------
 import { goal } from './store/reducers'

 const state = 10
 const  action = {
 type: C.SET_GOAL,
 payload: 15
 }

 const  nextState = goal(state, action)

 console.log(`

 initial goal: ${state}
 action: ${JSON.stringify(action)}
 new goal: ${nextState}

 `)

*/

/*
 ------ Lesson 2-1 ------
import { allSkiDays, goal } from './initialState.json'

console.log(`
    Ski Day Counter
    ===============
    The goal is ${goal} days
    Initially there are ${allSkiDays.length} ski day in the state

    Constants (actions)
    -------------------
    ${Object.keys(C).join('\n      ')}
`)
 */