import Home from '../pages/Home';
import { HOME_TITLE, SEARCH } from '../constant/index'
import Search from '../pages/Search';
import React from 'react'
import Icon from '../component/Icon'

const routes = [
  {
    name: HOME_TITLE,
    component: Home,
    icon: (params: any) => <Icon name='md-home' focused={params.focused}/>
  },
  {
    name: SEARCH,
    component: Search,
    icon: (params: any) => <Icon name='md-search' focused={params.focused}/>
  }
];

export default routes;
