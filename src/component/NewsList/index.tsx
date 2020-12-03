import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/actions/newsAction/index'

type State = {
  tab: {
    selectedTabId: number;
    tabList: {
      selected: boolean;
      tabId: number;
      tabName: string;
      reqField: string;
    }[]
  },
  news: {
    data: Object[];
    fetchLoading: boolean;
    hasMore: boolean;
  }
}

const NewsContainer = styled.View`
  flex: 1;
`

const NewsList = () => {
  const dispatch = useDispatch()
  const { selectedTabId, tabList } = useSelector((state: State) => state.tab)
  const { data, fetchLoading, hasMore } = useSelector((state: State) => state.news)

  const getReqField = useCallback((id: number) => {
    let reqField = ''
    tabList.forEach(tab => {
      if (tab.tabId === id) {
        reqField = tab.reqField
      }
    })
    return reqField
  }, [])
  
  useEffect(() => {
    dispatch(fetchNews(getReqField(selectedTabId)))
    console.log('data::', data.length)
  }, [selectedTabId])

  return (
    <NewsContainer>
      <ScrollView>
        
      </ScrollView>
    </NewsContainer>
  )
}

export default NewsList
