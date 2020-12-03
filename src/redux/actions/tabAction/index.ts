import { createAction } from '@reduxjs/toolkit'
import { PRESS_TAB } from '../../constant/tab'

export const pressTab = createAction(PRESS_TAB, (tabId: number) => ({
  payload: {
    tabId
  }
}))