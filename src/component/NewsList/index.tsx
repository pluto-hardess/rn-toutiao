import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions/newsAction/index";
import { s } from "../../utils/index";
import { FlatList, TouchableHighlight } from "react-native";
import { createController } from "../../utils/createController";
import {
  NonePic,
  OneLargePic,
  OneNormalPic,
  ThreeNormalPics,
} from "../../component/Template/index";
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { DETAIL } from "../../constant";
import Spiner from '../Spin'

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

export type DataItem = {
  item: {
    title: string;
    media_name: string;
    label: boolean;
    comment_count: number;
    datetime: string;
    has_image: boolean;
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
    large_mode: boolean | undefined;
    video_style: number;
  };
}

const NewsContainer = styled.View`
  flex: 1;
  background: #fff;
`;

const ListView = styled.View`
  margin: 0 ${s(30)}px;
  border-bottom-width: ${s(1)}px;
  border-bottom-color: rgba(221, 221, 221, 0.6);
`;

const ItemWrap = styled.View`
  min-height: ${s(84)}px;
  padding: ${s(32)}px 0;
`;

const JudgeRenderItem = ({ item }: DataItem) => {
  const {
    has_image: hasImage,
    image_list: imageList,
    image_url: imageUrl,
    has_video: hasVideo,
    video_detail_info: videoDetailInfo,
    large_image_url: largeImageUrl,
    source_url: sourceUrl,
    large_mode: largeMode,
    video_style: videoStyle
  } = item;
  return (
    <>
      {(!hasImage && !hasVideo && imageList?.length === 0)
        ? <NonePic item={item} />
        : (hasImage && !hasVideo && imageList?.length === 3)
        ? <ThreeNormalPics item={item} />
        : (hasImage && !hasVideo && imageUrl && imageList?.length === 0)
        ? <OneNormalPic item={item} />
        : (hasVideo && !hasImage && largeImageUrl && imageList?.length === 0 && videoStyle === 3)
        ? <OneLargePic item={item} />
        : (hasImage && !hasVideo && largeImageUrl && imageList?.length === 0)
        ? <OneLargePic item={item} />
        : (hasVideo && !hasImage && largeImageUrl && imageList?.length === 0 && videoStyle === 2)
        ? <OneNormalPic item={item} />
        : null}
    </>
  )
}

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

  useFocusEffect(useCallback(() => {
    const { controller } = createController();
    setController((_: any) => controller);
    dispatch(
      fetchNews({
        type: getReqField(selectedTabId),
        controller,
      })
    );
  }, [selectedTabId]))

  const renderItem = ({
    item
  }: DataItem) => {
    const {
      source_url: sourceUrl
    } = item;
  
    const handlePress = () => {
      navigation.navigate(DETAIL, {
        url: sourceUrl
      })
    }
  
    return (
      <ListView>
        <TouchableHighlight onPress={() => handlePress()} underlayColor='#eee'>
          <ItemWrap>
            <JudgeRenderItem item={item} />
          </ItemWrap>
        </TouchableHighlight>
      </ListView>
    );
  };

  return (
    <NewsContainer>
      {fetchLoading ? (
        <Spiner />
      ) : (
        <FlatList
          renderItem={renderItem}
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
