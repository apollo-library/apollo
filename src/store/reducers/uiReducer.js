import { TYPES } from '../actions'

/*

    These states are mainly for handling UI states that are global
    across the whole appliaction or are specific to an individual
    page but need to be accesssed from multiple components

*/

const initialStates = {
}


export const ui = (state = initialStates, action) => {
    switch (action.type) {
        default:
            return state
    }
}
