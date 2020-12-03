import { combineReducers } from 'redux'
import { newsReducer } from './newsReducer'
import { tabReducer } from './tabReducer'

export const rootReducer = combineReducers({
  news: newsReducer,
  tab: tabReducer
})