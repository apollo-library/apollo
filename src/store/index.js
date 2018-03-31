import { createStore, combineReducers } from 'redux'
import { data } from './reducers'

const rootReducer = combineReducers({
    data
})

export default createStore(rootReducer)
