import { createReducer } from '@reduxjs/toolkit'
import { fetchNewsDetail } from '../../actions/newsDetailAction'

const initialState = {
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
  [(fetchNewsDetail.pending) as any]: (state) => {
    state.loading = true
  },
  [(fetchNewsDetail.fulfilled) as any]: (state, action) => {
    state.loading = false
    state.data = action.payload
  },
  [(fetchNewsDetail.rejected) as any]: (state) => {
    state.loading = false
  }
})