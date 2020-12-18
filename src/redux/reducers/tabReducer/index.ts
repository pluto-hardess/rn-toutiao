import { createReducer } from '@reduxjs/toolkit'
import { pressTab, resetPage, cacheList, setTimeStamp } from '../../actions/tabAction/index'
import { tabList } from '../../../constant/index'

const initailState = {
  tabList,
  selectedId: tabList[0].tabId
}

export const tabReducer = createReducer(initailState, (builder) => {
  builder
    .addCase(pressTab, (state, action) => {
      state.tabList = state.tabList.map(tab => ({
        ...tab,
        selected: tab.tabId === action.payload.tabId
      }))
      state.selectedId = action.payload.tabId
    })
    .addCase(resetPage, (state) => {
      state.tabList = state.tabList.map(tab => {
        if (tab.selected) {
          return {
            ...tab,
            page: 1
          }
        } else {
          return {
            ...tab
          }
        }
      })
    })
    .addCase(cacheList, (state, action) => {
      state.tabList = state.tabList.map(tab => {
        if (tab.selected) {
          return {
            ...tab,
            cache: action.payload.list
          }
        } else {
          return {
            ...tab
          }
        }
      })
    })
    .addCase(setTimeStamp, (state, action) => {
      state.tabList = state.tabList.map(tab => {
        if (tab.selected) {
          return {
            ...tab,
            timeStamp: action.payload.timeStamp
          }
        } else {
          return {
            ...tab
          }
        }
      })
    })
    .addDefaultCase(state => state)
})