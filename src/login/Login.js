import React from 'react'
import {withRouter} from 'react-router-dom'
import {Form,Icon,Input,Button,Checkbox,message} from 'antd'
import LoginStyle from './loginstyle.css'
const FormItem =Form.Item;

export default class Login extends React.Component{
    //提交form表单
    hanldSubmit=e=>{
        e.preventDefault();
        this.props.form.validateFields((err,vaules) =>{
            if(!err){
                if(vaules.userNAME==="admin" && vaules.password==="admin"){
                    this.props.history.push("/menu")
                    if(vaules.remember){

                    }
                    console.log(this.props,"登录")
                }else{
                    return message.error("用户名或密码错误")
                }   
            }
        })
    }
    

    render(){
        const {getFieldDecorator} = this.props.from;
        return(
            <LoginStyle classNmae ="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>登录</span>
                    </div>
                </div>
                <Form onSubmit={this.hanldSubmit} style={{maxWidth:"300px"}}>

                </Form>
            </LoginStyle>
        )
    }
}
