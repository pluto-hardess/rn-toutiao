import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDetailPage } from '../../../api/newsDetail'
import { FETCH_DETAIL } from '../../constant/newsDetail'

export const fetchNewsDetail = createAsyncThunk(
  FETCH_DETAIL,
  async (id: string) => {
    try {
      const data = await getDetailPage(id)
      console.log('data:::', data)
      return data
    } catch (e) {
      console.log(e)
      return e
    }
  }
)