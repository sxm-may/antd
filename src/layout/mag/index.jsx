/* eslint-disable array-callback-return */
import React from 'react';
import {Form, Input, InputNumber, Table } from 'antd';
import Env from "../../config/env"
import axios from 'axios';
import { Button,Modal } from 'antd';
import Menu from "../menu"
const env = Env;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default class Demo extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data: [],
    columns: [],
    visible: false,
    ids:[],
  };

  componentWillMount() {
   
    axios.get(env.BASE_API + '/user/selete')
      .then((res) => {
        res.data.data.map(item=>{
          item.key = item.id
        })
        this.setState({
          data: res.data.data

        })
      })

      .catch(error => {
        console.log(error);
      });



  }
  //删除
  onClickDelete = () => {
    // console.log("id",id);
    // const arrays = [];
    // this.state.data.map((i)=>{
    //   if(i.id === id){
    //     arrays.push(i)
    //   }
    // })
    const { selectedRowKeys } = this.state
    console.log(selectedRowKeys)
    if(selectedRowKeys.length >0){
      axios.delete(env.BASE_API + '/user/delete',{data:selectedRowKeys})
      .then(
        (res) => {
        //   if(res.data === 0){
          
        //     this.setState({
        //       data:this.state.data.filter((item,index) => item.id !== id)
        //     })
           
        //     window.alert("删除成功")
        //  }
        }
      )
      .catch(error => {
        console.log(error);
      });
    }else{
      window.alert("未选择删除对象")
    }
    
   

  }




  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 500);
  };

  onSelectChange = selectedRowKeys => {
   
    this.setState({ selectedRowKeys });
  };

  //添加
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    

    const hasSelected = selectedRowKeys.length > 0;
    const items = []
    this.state.data.map((i, index) => {
     
        items.push({
          key: i.id,
          id: index+1 ,
          name: i.name,
          roleId: i.role,
          userId : i.id,
          certificationNo:i.certificationNo,
        })

    })
    
    for(var i = 0 ; i <selectedRowKeys.length;i++){
        if(selectedRowKeys[i]=== items[i].key){
            // console.log("selectedRowKeys[i]",selectedRowKeys[i])
            // console.log("items[i].key",items[i].key)
            this.state.ids=items[i].userId
            // console.log(this.state.ids)
        }
    }
   
    let columns  = this.state.columns;
    columns = [
      {
        title: '序号',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      }
      ,
      {
        title:'估价师证号',
        dataIndex:"certificationNo"
      },
      {
        title: '角色',
        dataIndex: 'roleId',
      },
      {
        title: '操作',
        dataIndex: 'action',
       
        render: (text, record) => (
        
          <span>
            <a style={{ marginRight: 16 }}>修改 </a>
            <a onClick={
                  this.onClickDelete.bind(this,record.userId,selectedRowKeys)
              } >删除</a>
         </span>
         
        ),
      },
    ]
   
    
    const onFinish = values => {
        axios.post(env.BASE_API+'/user/save_batch',[{"account":values.account,"certificationNo":values.certificationNo,
        "name":values.name,"role":"估价师","password":"123456"}])
        .then(res => {
         
          if(res.data.code === 103){
              window.alert("估价师已存在")
          }else if(res.data.code === 200){
            window.alert("添加成功")
            this.handleCancel()
           
          }

        })
        .catch(error => {
          console.log(error);
    });


    };

    return (
      <Menu
      content={
        <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            取消
              </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择 ${selectedRowKeys.length} 条目` : ''}
            
          </span>
          <Button type="primary" onClick={this.onClickDelete.bind(this,this.state.ids,selectedRowKeys)}>

            删除
          </Button>
        </div>
        <div style={{ float: "right",marginTop:-49,marginRight:316 }}>
          <Button type="primary" onClick={this.showModal} >
            添加
            </Button>
                <Modal
                  title="添加用户"
                  visible={this.state.visible}
                  // onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                <div >
                  <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                      <Form.Item name={ 'account'} label="账号" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name={'certificationNo'} label="估价师证号" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name={'name'} label="姓名" rules={[{ required: true}]}>
                        <Input />
                      </Form.Item>
            
                      {/* <Form.Item name={'role'} label="角色" >
                        <Input/>
                      </Form.Item> */}
                       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          提交
                        </Button>
                      </Form.Item>
                    </Form>
                </div>
                  
              </Modal>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={items} />
          </div>
      }
        />

        );
      }
}

