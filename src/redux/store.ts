import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  })
})

export type State = {
  news: {
    data: never[];
    fetchLoading: boolean;
    hasMore: boolean;
  };
  tab: {
    tabList: {
        tabId: number;
        tabName: string;
        selected: boolean;
        type: string;
        timeStamp: number;
        cache: never[];
        page: number;
        limit: number;
    }[];
    selectedId: number;
  };
  data: {
    contents: never[];
    images: never[];
    title: string;
    source: string;
    time: string;
    avator: string;
  };
  loading: boolean;
}

export { store }