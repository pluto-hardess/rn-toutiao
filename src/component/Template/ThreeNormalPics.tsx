import React from "react";
import Title from "../Title";
import styled from "styled-components/native";
import { s } from "../../utils";
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
  };
}

const ImagesContainer = styled.View`
  margin-top: ${s(12)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  height: ${s(148)}px;
`;

const Image = styled.Image`
  width: 33%;
  height: ${s(148)}px;
`;

export default ({ item }: Props) => {
  const { title, image_list: imageList, media_name: mediaName, label, datetime, comment_count: commentCount } = item;
  const time = getFormatTime(datetime)
  return (
    <>
      <Title title={title}></Title>
      <ImagesContainer>
        {imageList?.map((img) => (
          <Image
            source={{
              uri: img.url,
            }}
            key={img.url}
          />
        ))}
      </ImagesContainer>
      <NewsInfo
        mediaName={mediaName}
        label={label}
        commentCount={commentCount}
        time={time}
      />
    </>
  );
};
