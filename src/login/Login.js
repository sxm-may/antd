import { Form, Input, Button, Checkbox,message } from 'antd';
import React from 'react'
import './loginstyle.css'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component{
      

    handleSubmit = (e) => {
        //提交之前判断输入的字段是否有错误
        e.preventDefault();
        
      
        this.props.form.validateFields((errors,values)=>{
            if (!errors) {
                console.log('Received values of form: ', values);
               
              }
        })
    }


    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passWordError = isFieldTouched('password') && getFieldError('password');

        return(
            <div className="login-response">
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
           onSubmit={this.handleSubmit}
            style={{width:300}} >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]} 
                    validateStatus={userNameError ? 'error' : ''}
                >
                   {
                            getFieldDecorator('userName',{
                                rules:[{required:true,message:"Please input your username!"}]
                            })(
                                <Input 
                                        placeholder="Username"
                                />
                            )
                        }
——
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    validateStatus={passWordError ? "error" : ''}
                >
                    {
                            getFieldDecorator('passWord',{
                                rules:[{required:true,message:"Please input your Password!"}]
                            })(
                                <Input 
                                        placeholder="Password"
                                />
                            )
                        }

                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" disabled={(getFieldsError)}>
                    登录
                    </Button>
                </Form.Item>
            </Form>
    </div>
        )
    }
}

let LoginForm = Form.create()(Login);
export default LoginForm;