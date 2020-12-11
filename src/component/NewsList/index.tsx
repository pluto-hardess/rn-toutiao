import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions/newsAction/index";
import { s } from "../../utils/index";
import { FlatList, ActivityIndicator, TouchableHighlight } from "react-native";
import { createController } from "../../utils/createController";
import {
  NonePic,
  OneLargePic,
  OneNormalPic,
  ThreeNormalPics,
} from "../../component/Template/index";
import { useNavigation } from '@react-navigation/native'

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
    data: any;
    fetchLoading: boolean;
    hasMore: boolean;
  };
};

const NewsContainer = styled.View`
  flex: 1;
  background: #fff;
`;

const ListView = styled.View`
  margin: 0 ${s(30)}px;
  border-bottom-width: ${s(0.5)}px;
  border-bottom-color: rgba(221, 221, 221, 0.6);
`;

const ItemWrap = styled.View`
  min-height: ${s(84)}px;
  padding: ${s(32)}px 0;
`;

const Spin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Item = ({
  item,
  index,
}: {
  item: {
    title: string;
    media_name: string;
    label: boolean;
    comment_count: number;
    datetime: string;
    has_image: boolean;
    large_mode?: boolean;
    large_image_url?: string;
    image_list?: {
      url: string;
      width: number;
      height: number;
    }[];
    image_url: string;
    has_video: boolean;
    video_detail_info?: any;
    source_url: string;
  };
  index: number;
}) => {
  const {
    has_image: hasImage,
    large_mode: largeMode,
    image_list: imageList,
    image_url: imageUrl,
    has_video: hasVideo,
    video_detail_info: videoDetailInfo,
    large_image_url: largeImageUrl,
    source_url: sourceUrl
  } = item;

  const handlePress = () => {
    
  }

  return (
    <ListView>
      <TouchableHighlight onPress={() => handlePress()} underlayColor='#eee'>
        <ItemWrap>
          {!hasImage && !hasVideo && !largeImageUrl && <NonePic item={item} />}
          {hasImage && largeMode && largeImageUrl && <OneLargePic item={item} />}
          {hasImage && imageList?.length === 0 && imageUrl && (
            <OneNormalPic item={item} />
          )}
          {hasImage && imageList?.length === 3 && (
            <ThreeNormalPics item={item} />
          )}
          {hasVideo && videoDetailInfo && <OneNormalPic item={item} />}
        </ItemWrap>
      </TouchableHighlight>
    </ListView>
  );
};

const NewsList = ({ setController }: { setController: any }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { selectedTabId, tabList } = useSelector((state: State) => state.tab);
  const { data: news, fetchLoading, hasMore } = useSelector(
    (state: State) => state.news
  );
  const [refresh, setRefresh] = useState(false);

  const getReqField = useCallback((id: number) => {
    let reqField = "";
    tabList.forEach((tab) => {
      if (tab.tabId === id) {
        reqField = tab.reqField;
      }
    });
    return reqField;
  }, []);

  const handleRefresh = useCallback(() => {
    const { controller } = createController();
    setController((_: any) => controller);
    // setRefresh(true)
    dispatch(
      fetchNews({
        type: getReqField(selectedTabId),
        controller,
      })
    );
    // setRefresh(false)
  }, [selectedTabId]);

  useEffect(() => {
    const { controller } = createController();
    setController((_: any) => controller);
    dispatch(
      fetchNews({
        type: getReqField(selectedTabId),
        controller,
      })
    );
  }, [selectedTabId]);

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
