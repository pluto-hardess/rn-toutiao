import React from 'react'
import Title from '../Title'
import styled from 'styled-components/native'
import { s } from '../../utils'
import NewsInfo from '../NewsInfo'
import { getFormatTime } from '../../utils/formatDate'

interface Props {
  item: {
    title: string;
    media_name: string;
    label: boolean;
    comment_count: number;
    datetime: string;
    has_image: boolean;
    large_mode?: boolean;
    large_image_url?: string;
  };
}

const LargeImage = styled.Image`
  width: 100%;
  height: ${s(352)}px;
  margin-top: ${s(12)}px;
`

export default ({ item }: Props) => {
  const { title, large_image_url: largeImageUrl, media_name: mediaName, label, comment_count: commentCount, datetime } = item

  console.log('largeImageUrl::', largeImageUrl)
  const time = getFormatTime(datetime)
  return (
    <>
      <Title title={title}></Title>
      <LargeImage source={{
        uri: largeImageUrl,
      }} />
      <NewsInfo
        mediaName={mediaName}
        label={label}
        commentCount={commentCount}
        time={time}
      />
    </>
  )
}
