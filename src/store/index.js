import { createStore, combineReducers } from 'redux'
import { globalData } from './reducers/globalReducer'
import { catalogueData } from './reducers/catalogueReducer'

const rootReducer = combineReducers({
    globalData,
    catalogueData
})

export default createStore(rootReducer)
