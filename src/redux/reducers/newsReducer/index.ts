import { createReducer } from '@reduxjs/toolkit'
import { fetchNews } from '../../actions/newsAction'
import { setCache } from '../../actions/tabAction'
const initialState = {
  data: [],
  fetchLoading: false,
  hasMore: false
}

export const newsReducer = createReducer(initialState, {
  [<any>(setCache)]: (state, action) => {
    state.data = action.payload.cache
  },
  [<any>(fetchNews.pending)]: (state) => {
    state.fetchLoading = true
  },
  [<any>(fetchNews.fulfilled)]: (state, action) => {
    state.fetchLoading = false
    state.data = action.payload.data
    state.hasMore = action.payload.hasMore
  },
  [<any>(fetchNews.rejected)]: (state) => {
    state.fetchLoading = false
  }
})
