import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import Router from "./src/router/index";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <Provider store={store}>
      <SafeArea>
        <Router />
      </SafeArea>
    </Provider>
  );
}
