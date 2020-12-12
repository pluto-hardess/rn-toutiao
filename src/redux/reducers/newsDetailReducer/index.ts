import { createReducer } from '@reduxjs/toolkit'
import { fetchNewsDetail } from '../../actions/newsDetailAction'

type InitialState = {
  data: {
    contents: Array<string>;
    images: Array<string>;
    title: string;
    source: string;
    time: string;
    avator: string;
  },
  loading: boolean;
}

const initialState: InitialState = {
  data: {
    contents: [],
    images: [],
    title: '',
    source: '',
    time: '',
    avator: ''
  },
  loading: false
}

export const newsDetailReducer = createReducer(initialState, {
  [fetchNewsDetail.pending]: (state) => {
    state.loading = true
  },
  [fetchNewsDetail.fulfilled]: (state, action) => {
    state.loading = false
    state.data = action.payload
  },
  [fetchNewsDetail.rejected]: (state) => {
    state.loading = false
  }
})