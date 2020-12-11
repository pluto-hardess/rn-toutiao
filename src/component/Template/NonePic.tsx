import React from "react";
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
  };
}

export default ({ item }: Props) => {
  const { title, media_name, label, comment_count, datetime } = item;
  const time = datetime ? getFormatTime(datetime) : "";
  return (
    <>
      <Title title={title}></Title>
      <NewsInfo
        mediaName={media_name}
        label={label}
        commentCount={comment_count}
        time={time}
      />
    </>
  );
};
