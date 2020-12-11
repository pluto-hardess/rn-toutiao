import { combineReducers } from 'redux'
import { newsReducer } from './newsReducer'
import { tabReducer } from './tabReducer'
import { newsDetailReducer } from './newsDetailReducer'

export const rootReducer = combineReducers({
  news: newsReducer,
  tab: tabReducer,
  newsDetail: newsDetailReducer
})