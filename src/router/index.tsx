import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME, SEARCH, DETAIL } from "../constant/index";
import Icon from "../component/Icon";
import HomePage from "../pages/Home";
import SearchPage from "../pages/Search";
import DetailPage from "../pages/DetailPage";

const Tab = createBottomTabNavigator();

const Home = createStackNavigator();
const Search = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Home.Navigator>
      <Home.Screen name={HOME} component={HomePage} />
      <Home.Screen name={DETAIL} component={DetailPage} options={{
        headerStyle: {
          backgroundColor: '#d43d3d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20
        }
      }}/>
    </Home.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <Search.Navigator>
      <Search.Screen name={SEARCH} component={SearchPage} />
    </Search.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HOME}>
        <Tab.Screen
          name={HOME}
          component={HomeStackScreen}
          options={{
            tabBarIcon: (params: any) => (
              <Icon name="md-home" focused={params.focused} />
            ),
          }}
        />
        <Tab.Screen
          name={SEARCH}
          component={SearchStackScreen}
          options={{
            tabBarIcon: (params: any) => (
              <Icon name="md-search" focused={params.focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
