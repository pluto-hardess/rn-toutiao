import React, { useCallback } from "react";
import styled from "styled-components/native";
import { setSpText } from "../../utils/index";
import { ScrollView } from "react-native";
import Color from "../../constant/color";
import { useDispatch, useSelector } from "react-redux";
import { pressTab } from "../../redux/actions/tabAction";

const TabContainer = styled.View`
  width: 100%;
  height: ${setSpText(72)}px;
  background: #f4f5f6;
`;

const tabMargin = setSpText(10);
const tabPadding = setSpText(20);
const tabFontSize = setSpText(34);

const TabView = styled.View`
  margin: ${tabMargin}px 0 ${tabMargin}px ${tabMargin}px;
  padding: 0 ${tabPadding}px;
`;

const TabContent = styled.Text`
  font-size: ${tabFontSize}px;
  font-family: Helvetica;
`;

type State = {
  tab: {
    tabList: {
      selected: boolean;
      tabId: number;
      tabName: string;
    }[];
  },
  news: {
    fetchLoading: boolean
  }
};

const TabList = () => {
  const dispatch = useDispatch();
  const tabList = useSelector((state: State) => state.tab.tabList);
  const fetchLoading = useSelector((state: State) => state.news.fetchLoading)

  const handlePressTab = useCallback(
    ({ tabId }) => {
      if (fetchLoading) {
        
      }
      dispatch(pressTab(tabId));
    },
    [tabList, fetchLoading]
  );

  return (
    <TabContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabList.map((tab) => (
          <TabView key={tab.tabId}>
            <TabContent
              suppressHighlighting={true}
              onPress={() => handlePressTab(tab)}
              style={{
                color: tab.selected
                  ? Color.selectedTabColor
                  : Color.defaultTabColor,
              }}
            >
              {tab.tabName}
            </TabContent>
          </TabView>
        ))}
      </ScrollView>
    </TabContainer>
  );
};

export default TabList;
