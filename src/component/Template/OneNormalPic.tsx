import React from "react";
import styled from "styled-components/native";
import { s } from "../../utils";
import Title from "../Title";
import NewsInfo from "../NewsInfo";
import { getFormatTime } from "../../utils/formatDate";

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
    image_list?: {
      url: string;
      width: number;
      height: number;
    }[];
    image_url: string;
    has_video: boolean;
    video_detail_info?: any;
  };
}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

const LeftField = styled.View`
  width: 67%;
`;

const RightField = styled.View`
  width: 33%;
  justify-content: center;
`;

const RightImage = styled.Image`
  width: 100%;
  height: ${s(145)}px;
`;

export default ({ item }: Props) => {
  const {
    image_url: imageUrl,
    title,
    media_name: mediaName,
    label,
    comment_count: commentCount,
    datetime,
    video_detail_info: videoDetailInfo,
    has_image: hasImage,
  } = item;
  const time = getFormatTime(datetime);
  return (
    <Container>
      <LeftField>
        <Title title={title} marginRight={s(24)}></Title>
        <NewsInfo
          mediaName={mediaName}
          label={label}
          commentCount={commentCount}
          time={time}
        />
      </LeftField>
      <RightField>
        <RightImage
          source={{
            uri: hasImage
              ? imageUrl
              : videoDetailInfo?.detail_video_large_image?.url,
          }}
        />
      </RightField>
    </Container>
  );
};
