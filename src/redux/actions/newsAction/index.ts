import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_NEWS } from '../../constant/news'
import { getNewsByType } from '../../../api/news'

export const fetchNews = createAsyncThunk(
  FETCH_NEWS,
  async (type: string) => {
    try {
      const res: any = await getNewsByType(type)
      return res
    } catch (e) {
      return e
    }
  }
)
