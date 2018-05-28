import { TYPES } from '../actions'

const initialStates = {

}

export const api = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.YOUR_TYPE_HERE:
            return {...state, YOUR_THING_HERE }

        default:
            return state
    }
}
