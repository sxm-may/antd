import React from 'react';
import './umdstyle.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Avatar } from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import Uploadcesuan from "../zuoye/uploadcesuan/Uploadcesuan"
import ContentUser from '../mag/ContentUser'
import Reports from "../zuoye/report/Reports"
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default  class AntdDemo extends React.Component{

    render(){
      return(
       <Router>
        <Layout>
        <Header className="header">
          <div className="logo" ></div>
          
          <div className="admin-right" >
            <Dropdown overlay={menu} >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
              </a>
            </Dropdown>
            <Avatar style={{ backgroundColor: '#87d068',left:40  }} icon={<UserOutlined />} />
          </div>
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
                  <Link to="/menu/contentUser" >用户管理</Link>
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
                <Menu.Item key="5"   >
                  <Link to="/menu/uploadcesuan" >上传测算表</Link>
               </Menu.Item>
                <Menu.Item key="6">
                <Link to="/reports" >生成报告</Link></Menu.Item>
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
              <Route exact path="/menu/uploadcesuan"  component={Uploadcesuan}></Route>
              <Route exact path="/menu/contentUser" exact={true} component={ContentUser}></Route>
              <Route exact path="/menu/" exact={true} component={ContentUser}></Route>
              <Route exact path="/menu/reports" component={Reports}></Route>
             </Content>
          </Layout>
        </Layout>
      </Layout>
      </Router>
      )
    }

}