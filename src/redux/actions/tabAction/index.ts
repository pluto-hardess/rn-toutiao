import { createAction } from '@reduxjs/toolkit'
import { PRESS_TAB, RESET_PAGE, CACHE_LIST, SET_CACHE, SET_TIMESTAMP } from '../../constant/tab'

export const pressTab = createAction(PRESS_TAB, (tabId: number) => ({
  payload: {
    tabId
  }
}))

export const resetPage = createAction(RESET_PAGE)

export const cacheList = createAction(CACHE_LIST, (list: any) => ({
  payload: {
    list
  }
}))

export const setCache = createAction(SET_CACHE, (cache: any) => ({
  payload: {
    cache
  }
}))

export const setTimeStamp = createAction(SET_TIMESTAMP, (timeStamp: number) => ({
  payload: {
    timeStamp
  }
}))