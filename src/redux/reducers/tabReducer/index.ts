import { createReducer } from '@reduxjs/toolkit'
import { pressTab } from '../../actions/tabAction/index'
import { tabList } from '../../../constant/index'

const initailState = {
  tabList,
  selectedTabId: tabList[0].tabId
}

export const tabReducer = createReducer(initailState, (builder) => {
  builder
    .addCase(pressTab, (state, action) => {
      state.selectedTabId = action.payload.tabId
      state.tabList = state.tabList.map(tab => {
        tab.selected = false
        if (tab.tabId === action.payload.tabId) {
          tab.selected = true
        }
        return tab
      })
    })
    .addDefaultCase(state => state)
})