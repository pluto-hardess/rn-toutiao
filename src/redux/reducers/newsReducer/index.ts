import { createReducer, AsyncThunk } from '@reduxjs/toolkit'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

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

export const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher<PendingAction>(
      action => action.type.endsWith('/pending'),
      state => {
        state.fetchLoading = true
      }
    )
    .addMatcher<FulfilledAction>(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.fetchLoading = false
        state.data = action.payload.data
        state.hasMore = action.payload.has_more
      }
    )
    .addMatcher<RejectedAction>(
      action => action.type.endsWith('/rejected'),
      (state) => {
        state.fetchLoading = false
      }
    )
    .addDefaultCase(state => state)
  })
