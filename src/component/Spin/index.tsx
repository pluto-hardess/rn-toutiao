import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

const Spin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Spin>
      <ActivityIndicator size="large" color="#999" />
    </Spin>
  )
}
