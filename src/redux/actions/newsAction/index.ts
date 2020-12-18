import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_NEWS } from "../../constant/news";
import { getNewsByType } from "../../../api/news";

export const fetchNews = createAsyncThunk(
  FETCH_NEWS,
  async ({
    type,
    controller,
    page,
    limit,
  }: {
    type: string;
    controller: AbortController;
    page: number;
    limit: number;
  }) => {
    try {
      const res: any = await getNewsByType(type, controller, page, limit);
      return res;
    } catch (e) {
      // 中断fetch
      if (e.message === "Aborted" && e.name === "AbortError") {
        return e.message;
      }
      return e;
    }
  }
);
