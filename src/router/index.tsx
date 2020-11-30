import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import routes from './routes'

const { Screen, Navigator } = createBottomTabNavigator()

const initialPage = routes[0].name

const Router = () => {
  return (
    <Navigator initialRouteName={initialPage}>
      {routes.map(route => (
        <Screen name={route.name} options={{
          tabBarIcon: route.icon
        }} key={route.name}>
          {props => <route.component {...props}/>}
        </Screen>
      ))}
    </Navigator>
  )
}

export default Router
