import { createReducer } from '@reduxjs/toolkit'
import { fetchNewsDetail } from '../../actions/newsDetailAction'

type InitialState = {
  data: {
    contents: Array<string>;
    images: Array<string>;
  },
  loading: boolean;
}

const initialState: InitialState = {
  data: {
    contents: [],
    images: []
  },
  loading: false
}

export const newsDetailReducer = createReducer(initialState, {
  [fetchNewsDetail.pending]: (state) => {
    state.loading = true
  },
  [fetchNewsDetail.fulfilled]: (state, action) => {
    state.loading = false
    console.log('action::', action)
  },
  [fetchNewsDetail.rejected]: (state) => {
    state.loading = false
  }
})