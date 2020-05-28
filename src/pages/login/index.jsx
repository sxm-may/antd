import { Form, Input, Button, Checkbox} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import './loginstyle.css'
import Env from "../../config/env"
import axios from 'axios';
import PubSub from 'pubsub-js';
import {fromJS} from "immutable";

import {connect} from "react-redux"
import {actionCreator} from "./store"
const env = Env;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

 class Login extends React.Component{
      
  

    render(){
        
        const onFinish = values => {
            console.log('Success:', values);
         
            axios.post(env.BASE_API+'/user/login',{"account":values.username,"password":values.password})
                .then(res => {
                  
                console.log("res.data.data.menu",res.data.menus);
                  if(res.data.code===0){
                    console.log(res.data.menus)
                    this.props.handle_change_menu(fromJS(res.data.menus))
                    this.props.handle_change_user(values.username,values.password)
                    this.props.history.push("/userManagement/placeInfo")
                  }else{
                    window.alert("用户/密码错误")
                  }
                 
                })
                .catch(error => {
                  console.log(error);
              });

          };
        
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
        
        return(
            <div className="login-response">
                <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="form-name"
                >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    
                >
                        <Input  placeholder="admin"/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                
                >
                            <Input.Password placeholder="admin" />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    handle_change_user: (value)=> {
      dispatch(actionCreator.change_user(value));
    },
    handle_change_menu:(value)=>{
      dispatch(actionCreator.change_menu(value))
    }
  };
};

export default connect(null, mapDispatchToProps)(Login)
