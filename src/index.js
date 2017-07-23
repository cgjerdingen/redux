import C from './constants'
import storeFactory from './store'

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": true,
		"backcountry": true
	}
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Squaw Valley",
        "date": "2016-3-28",
        "powder": true,
        "backcountry": false
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "The Canyons",
        "date": "2016-1-2",
        "powder": true,
        "backcountry": true
    }
})


/* import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'

const store = createStore(appReducer)

const unsubscribeGoalLogger  = store.subscribe(() => console.log(`    Goal: ${store.getState().goal}`))

setInterval(() => {
    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random() * 100)
    })
}, 250)
setTimeout(() => {
    unsubscribeGoalLogger();
}, 3000)
*/


/* --- Lesson 3----
const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}

const store = createStore(appReducer, initialState)

window.store = store

store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {

    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
})
//console.log('initial state', store.getState())

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

store.dispatch({
        type: C.SET_GOAL,
        payload: 2
    }
)
 --- Lesson 3----
*/

//console.log('next state', store.getState())

/*
let state = initialState

console.log(`

	Initial state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)

state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`

	Next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)
*/

