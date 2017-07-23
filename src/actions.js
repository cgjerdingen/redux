import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {

    // Add app logic here....

    return {
        type: C.ADD_DAY,
        payload: { resort, date, powder, backcountry }
    }
}