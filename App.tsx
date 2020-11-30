import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components'
import Router from './src/router/index'
import { NavigationContainer } from '@react-navigation/native'

const SafeArea = styled(SafeAreaView)`
  flex: 1
`

export default function App() {
  return (
    <SafeArea>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeArea>
  );
}
