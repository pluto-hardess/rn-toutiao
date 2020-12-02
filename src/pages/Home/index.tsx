import React from 'react'
import styled from 'styled-components/native'
import TabList from '../../component/TabList/index'
import NewsList from '../../component/NewsList/index'

const HomeContainer = styled.View`
  flex: 1;
`

const Home = () => {
  return (
    <HomeContainer>
      <TabList />
      <NewsList />
    </HomeContainer>
  )
}

export default Home
