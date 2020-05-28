import React from 'react';

import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom"

import Login from "./pages/login"
import store from "./store"
import Menu from "./layout/menu"
import ContentUser from "./layout/mag"
import Uploadcesuan from "./layout/uploadcesuan"
import Reports from "./layout/report"

const routList = [
  {
    title: "登录",
    route: "/login",
    component: Login,
  },
  {
    title: "作业平台",
    route: "/assessment",
    subItems: [

      {
        route: "/project/upload",
        component: Uploadcesuan,
      },
      {
        route: "/repotyDownload",
        component: ContentUser,
      },
      {
        route: "/surveyDowload",
        component: ContentUser,
      },
      {
        route: "/technologyAssume",
        component: ContentUser,
      },
      {
        route: "/technologyDownload",
        component: ContentUser,
      },
      {
        route: "/wordDownload",
        component: ContentUser,
      }
    ]
  },
  {
    title: "宗地信息管理",
    route: "/place",
    component: Uploadcesuan
  },
  {
    title: "数据查询",
    route: "/router",
    component: Uploadcesuan
  }
  ,
  {
    title: "用户管理",
    route: "/userManagement",
    subItems:[
      {
        route: "/parcelUse",
        component: Uploadcesuan
      },
      {
        route: "/placeInfo",
        component: ContentUser
      }
    ]
    
  }
] 



const recurlistRouterList = (item, parentRoute = "") => {
  return item.subItems ?
    (item.subItems.map((subItem) => recurlistRouterList(subItem, item.route))) : (
      <Route key={parentRoute + item.route} path={parentRoute + item.route} component={item.component}></Route>
    );
}

export default class App extends React.Component {




  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routList.map((item) => recurlistRouterList(item))}
            <Redirect from="/" to="/login" exact />
          </Switch>
        </BrowserRouter>
      </Provider>

    )
  }



}


