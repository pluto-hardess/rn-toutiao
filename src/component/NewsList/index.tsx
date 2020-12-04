import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions/newsAction/index";
import { setSpText } from "../../utils/index";
import { FlatList, ActivityIndicator } from "react-native";
import { createController } from '../../utils/createController'

type State = {
  tab: {
    selectedTabId: number;
    tabList: {
      selected: boolean;
      tabId: number;
      tabName: string;
      reqField: string;
    }[];
  };
  news: {
    data: Object[];
    fetchLoading: boolean;
    hasMore: boolean;
  };
};

const NewsContainer = styled.View`
  flex: 1;
  background: #fff;
`;

const ListView = styled.View`
  margin: 0 ${setSpText(30)}px;
`;

const ListText = styled.Text`
  min-height: ${setSpText(84)}px;
  padding: ${setSpText(32)}px 0;
  color: #222;
  font-size: ${setSpText(34)}px;
  font-family: Helvetica;
`;

const Spin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Item = ({ item }: { item: { title: string } }) => {
  return (
    <ListView>
      <ListText>{item.title}</ListText>
    </ListView>
  )
}

const NewsList = () => {
  const dispatch = useDispatch();
  const { selectedTabId, tabList } = useSelector((state: State) => state.tab);
  const { data: news, fetchLoading, hasMore } = useSelector(
    (state: State) => state.news
  )
  const [refresh, setRefresh] = useState(false)

  const getReqField = useCallback((id: number) => {
    let reqField = ''
    tabList.forEach((tab) => {
      if (tab.tabId === id) {
        reqField = tab.reqField;
      }
    });
    return reqField
  }, []);

  const handleRefresh = useCallback(() => {
    const { controller } = createController()
    dispatch(fetchNews({
      type: getReqField(selectedTabId),
      controller
    }))
  }, [selectedTabId])

  useEffect(() => {
    const { controller } = createController()
    dispatch(fetchNews({
      type: getReqField(selectedTabId),
      controller
    }))
  }, [selectedTabId])

  return (
    <NewsContainer>
      {fetchLoading ? (
        <Spin>
          <ActivityIndicator size="large" color="#999" />
        </Spin>
      ) : (
        <FlatList
          renderItem={Item}
          data={news}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={handleRefresh}
          refreshing={refresh}
          />
      )}
    </NewsContainer>
  );
};

export default NewsList;
