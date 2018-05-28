import { createStore, combineReducers } from 'redux'
import { data } from './reducers/dataReducer'
import { ui } from './reducers/uiReducer'
import { api } from './reducers/apiReducer'

const rootReducer = combineReducers({
    data,
    ui,
    api
})

export default createStore(rootReducer)
