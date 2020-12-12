import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDetailPage } from '../../../api/newsDetail'
import { FETCH_DETAIL } from '../../constant/newsDetail'

export const fetchNewsDetail = createAsyncThunk(
  FETCH_DETAIL,
  async (id: string) => {
    try {
      const data: any = await getDetailPage(id)
      if (data.err_code === 0) {
        return data.data
      }
    } catch (e) {
      return e
    }
  }
)