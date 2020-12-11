import React from 'react'
import styled from 'styled-components/native'
import { s } from '../../utils'

interface Props {
  mediaName: string;
  label: boolean;
  commentCount: number;
  time: string;
}

const Container = styled.View`
  margin-top: ${s(12)}px;
`

const Content = styled.View`
  flex-direction: row;
`

const Publish = styled.Text`
  margin-right: ${s(10)}px;
  line-height: ${s(24)}px;
  font-size: ${s(20)}px;
  color: #999;
`

const Comment = styled.Text`
  margin-right: ${s(10)}px;
  line-height: ${s(24)}px;
  font-size: ${s(20)}px;
  color: #999;
`

const Time = styled.Text`
  line-height: ${s(24)}px;
  font-size: ${s(20)}px;
  color: #999;
`

const Label = styled.Text`
  border-radius: ${s(4)}px;
  width: ${s(48)}px;
  line-height: ${s(24)}px;
  font-size: ${s(18)}px;
  margin-right: ${s(10)}px;
  color: #f85959;
  border: 1px solid rgba(248, 89, 89, 0.5);
  text-align: center;
`

const NewsInfo = ({ mediaName, label, commentCount, time }: Props) => {
  return (
    <Container>
      <Content>
        {label && <Label>置顶</Label>}
        <Publish>{mediaName}</Publish>
        <Comment>评论&nbsp;{commentCount}</Comment>
        {time && <Time>{time}</Time>}
      </Content>
    </Container>
  )
}

export default NewsInfo
