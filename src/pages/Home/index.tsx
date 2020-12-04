import React, { useState } from 'react'
import styled from 'styled-components/native'
import TabList from '../../component/TabList/index'
import NewsList from '../../component/NewsList/index'

const HomeContainer = styled.View`
  flex: 1;
`

const Home = () => {
  const [controller, setController] = useState()

  return (
    <HomeContainer>
      <TabList controller={controller} />
      <NewsList setController={setController} />
    </HomeContainer>
  )
}

export default Home
