import React from 'react';
import './umdstyle.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Avatar } from 'antd';
import { UserOutlined} from '@ant-design/icons';
// import Uploadcesuan from "../uploadcesuan/Uploadcesuan"
// import ContentUser from '../mag/ContentUser'
// import Reports from "../report/Reports"
import Login from "../../pages/login"
import {Link,withRouter} from 'react-router-dom'


import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {connect} from "react-redux"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

console.log(<Login />,"信息");
const menu = (
  <Menu>
    <Menu.Item>
      <a >
        个人信息查看
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  href="/" >
        退出
      </a>
    </Menu.Item>
   
  </Menu>
);

 class AntdDemo extends React.Component{
   
    render(){
     
      let routList = this.props.cw_menu.toJS();
      const vaule = sessionStorage.getItem("cw_authorization");

      return(
        <Layout>
        <Header className="header">
          <div className="logo" ></div>
          
          <div className="admin-right" >
            <Dropdown overlay={menu} >
             
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               点击<DownOutlined />
              </a>
            
            </Dropdown>
          <span style={{color:"white",marginLeft:15}}>{vaule}</span>
            <Avatar style={{ backgroundColor: '#87d068',left:40  }} icon={<UserOutlined />} />
          </div>
        </Header>
        <Layout>
        
          <Sider width={200} className="site-layout-background">
          <Menu
              mode="inline"
              defaultSelectedKeys={[this.props.location.pathname]}
              defaultOpenKeys={["/"+this.props.location.pathname.split("/")[1]]}
              style={{ height: '100%', borderRight: 0}}
            >
            {routList.map((item)=>(
              <SubMenu 
              key={item.route}
              title={
                <span>
                  <UserOutlined />
                  {item.menus}
                </span>
              }
            >
              {item.litileMenus ? item.litileMenus.map((t)=>(
                  <Menu.Item key={item.route+t.route}
                  //  onClick={()=>{
                  //   this.props.history.push(item.route+t.route)}}
                    >
                  <Link to={item.route+t.route} ></Link>
                  {t.menus}
                  </Menu.Item>
              )) : ""}
               

            </SubMenu>
            ))}
            
            
              
              {/* <SubMenu 
                key="menu1"
                title={
                  <span>
                    <UserOutlined />
                    系统管理
                   
                  </span>
                }
              >
                <Menu.Item key="/menu1/contentUser">
                  <Link to="/menu1/contentUser" >用户管理</Link>
                  </Menu.Item>
                
              </SubMenu>
              <SubMenu
                key="menu2"
                title={
                  <span>
                    <LaptopOutlined />
                   作业平台
                  
                  </span>
                }
              >
                <Menu.Item key="/menu2/uploadcesuan"   >
                  <Link to="/menu2/uploadcesuan" >上传测算表</Link>
               </Menu.Item>
                <Menu.Item key="/menu2/reports">
                <Link to="/menu2/reports" >生成报告</Link></Menu.Item>
                <Menu.Item key="7">生成标准宗地调查表</Menu.Item>
                <Menu.Item key="8">生成估价师标准宗地调查表</Menu.Item>
               
              </SubMenu> */}
           
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
              {this.props.content}
             </Content>
          </Layout>
        </Layout>
      </Layout>
     
      )
    }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     handle_change_user: (value)=> {
//       dispatch(actionCreator.change_user(value));
//     },
//   };
// };
const mapDispatchToProps = state =>{
  return {
    cw_menu: state.getIn(["login", "cw_menu"]),
  };
}

// export default connect(mapDispatchToProps, null)(AntdDemo)
export default withRouter(connect(mapDispatchToProps, null)(AntdDemo))