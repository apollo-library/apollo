import { createStore, combineReducers } from 'redux'
import { data } from './reducers/dataReducer'
import { ui } from './reducers/uiReducer'

const rootReducer = combineReducers({
    data,
    ui
})

export default createStore(rootReducer)
