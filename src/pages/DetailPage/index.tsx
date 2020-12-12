import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsDetail } from "../../redux/actions/newsDetailAction";
import { ActivityIndicator, ScrollView } from "react-native";
import { getFormatTime } from "../../utils/formatDate";
import { s } from "../../utils";

interface Props {
  navigation: any;
  route: any;
}

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const ArticleHeader = styled.View`
  padding: 22px 22px 30px 22px;
`;

const ArticleContent = styled.View`
  margin: 0 20px;
  text-align: justify;
`;

const ArticleTitle = styled.Text`
  font-weight: 700;
  color: #222;
  font-size: ${s(55.2)}px;
  margin-bottom: 17px;
`;

const ArticleAuthor = styled.View`
  align-items: center;
  flex-direction: row;
`;

const AuthorAvator = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50;
`;

const AuthorInfo = styled.View`
  margin-left: 9px;
`;

const AuthorName = styled.Text`
  color: #222;
  font-size: 15px;
  align-items: center;
`;

const AuthorDesc = styled.Text`
  font-size: 12px;
  color: #bcbcbc;
  margin-top: 4px;
`;

const Spin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ArticleFiled = styled.Text`
  margin-bottom: ${s(18)}px;
  font-size: 18px;
  line-height: 33;
`;

const ArticleImage = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: ${s(18)}px;
`;

export default ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: any) => state?.newsDetail);

  useEffect(() => {
    const reg = /\//g;
    const id = route.params.url.replace(reg, "");
    dispatch(fetchNewsDetail(id));
  }, []);

  return (
    <Container>
      {loading ? (
        <Spin>
          <ActivityIndicator size="large" color="#999" />
        </Spin>
      ) : (
        <ScrollView>
          <ArticleHeader>
            <ArticleTitle>{data.title}</ArticleTitle>
            <ArticleAuthor>
              <AuthorAvator
                source={{
                  uri: data?.avator,
                }}
              />
              <AuthorInfo>
                <AuthorName>{data.source}</AuthorName>
                <AuthorDesc>
                  {getFormatTime(data.time)}&nbsp;·&nbsp;{data.source}官方账号
                </AuthorDesc>
              </AuthorInfo>
            </ArticleAuthor>
          </ArticleHeader>
          <ArticleContent>
            {data?.contents.map((ct: string, idx: number) => (
              <ArticleFiled key={idx}>{ct}</ArticleFiled>
            ))}
            {data?.images.map((img: string, idx: number) => (
              <ArticleImage
                source={{
                  uri: img,
                }}
                key={idx}
              />
            ))}
          </ArticleContent>
        </ScrollView>
      )}
    </Container>
  );
};
