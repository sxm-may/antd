import React from 'react';
import './umdstyle.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import ContentUser from '../mag/ContentUser'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Reports from "../zuoye/report/Reports"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default  class AntdDemo extends React.Component{

    render(){
      return(
        <Router >
        <Layout>
        <Header className="header">
          <div className="logo" ></div>
            
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0}}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    系统管理
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/contentUser">用户管理</Link>
                  </Menu.Item>
                
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                   作业平台
                  
                  </span>
                }
              >
                <Menu.Item key="5"  >
                <Link to="/reports">上传测算表</Link></Menu.Item>
                <Menu.Item key="6">生成报告</Menu.Item>
                <Menu.Item key="7">生成标准宗地调查表</Menu.Item>
                <Menu.Item key="8">生成估价师标准宗地调查表</Menu.Item>
               
              </SubMenu>
           
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
             {/* <ContentUser /> */}
            
               <Route path="/contentUser" Component={ContentUser}></Route>
               <Route path="/reports" Component={Reports}></Route>
              
             
             </Content>
          </Layout>
        </Layout>
      </Layout>
      </Router>
      )
    }

}