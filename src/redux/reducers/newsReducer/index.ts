import { createReducer } from '@reduxjs/toolkit'
import { fetchNews } from '../../actions/newsAction/index' 

type InitialState = {
  data: Object[],
  fetchLoading: boolean,
  hasMore: false
}

const initialState: InitialState = {
  data: [],
  fetchLoading: false,
  hasMore: false
}

export const newsReducer = createReducer(initialState, {
  [fetchNews.pending]: (state, action) => {
    state.fetchLoading = true
  },
  [fetchNews.fulfilled]: (state, action) => {
    // console.log('action::', action)
    state.fetchLoading = false
    state.data = action.payload.data,
    state.hasMore = action.payload.has_more
  },
  [fetchNews.rejected]: (state, action) => {
    state.fetchLoading = false,
    state.data = action.payload
  }
})
