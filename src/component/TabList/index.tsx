import React, { useCallback, useState } from 'react'
import { tabList } from '../../constant/index'
import styled from 'styled-components/native'
import { setSpText } from '../../utils/index'
import { ScrollView } from 'react-native'
import Color from '../../constant/color'

interface Props {
  
}

const TabContainer = styled.View`
  width: 100%;
  height: ${setSpText(72)}px;
  background: #f4f5f6;
`

const tabMargin = setSpText(10)
const tabPadding = setSpText(20)
const tabFontSize = setSpText(34)

const TabView = styled.Text`
  margin: ${tabMargin}px 0 ${tabMargin}px ${tabMargin}px;
  padding: 0 ${tabPadding}px;
`

const TabContent = styled.Text`
  font-size: ${tabFontSize}px;
  font-family: Helvetica;
`

type Tab = {
  tabId: number;
  tabName: string;
  selected: boolean;
}

const TabList = (props: Props) => {
  const [tabs, setTabs] = useState(tabList)

  const handlePressTab = useCallback(({ tabId }: Tab) => {
    const newTabs = tabs.map(tab => {
      tab.selected = false
      if (tab.tabId === tabId) {
        tab.selected = true
      }
      return tab
    })
    setTabs(newTabs)
  }, [tabList])

  return (
    <TabContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabs.map(tab => (
          <TabView key={tab.tabId} onPress={() => handlePressTab(tab)}>
            <TabContent style={{
              color: tab.selected ? Color.selectedTabColor : Color.defaultTabColor
            }}>{tab.tabName}</TabContent>
          </TabView>
        ))}
      </ScrollView>
    </TabContainer>
  )
}

export default TabList
