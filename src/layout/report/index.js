import React from 'react';
import  { useState } from 'react';
import { Table, Input } from 'antd';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Menu from "../menu"

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>修改</a>
        <a>删除</a>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },

};

const Demo = () => {
  const [selectionType] = useState('checkbox');
    
  return (
    <Menu 
    content={
    <div>
      <div>
        <span style={{marginRight:40}}>城市：<Input placeholder="Basic usage" style={{ width: 200 }} /></span>
        <span>估价师名称：<Input placeholder="Basic usage" style={{ width: 200 }} /></span>
        <span style={{marginLeft:40}}>年份：<Input placeholder="Basic usage" style={{ width: 200 }} /></span>
        <span style={{marginLeft:40}}>宗地编码：<Input placeholder="Basic usage" style={{ width: 200 }} /></span>
        
        <br />
        <br />
      </div>
      <div style={{marginLeft:40}}>
        <Button type="primary" icon={<DownloadOutlined />} >
          生成报告
        </Button>
          <br />
          <br />
      </div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
    }
    />
  );
};

export default class Reports extends React.Component{
    
    render(){
        return(
            <Demo />
        )
    }
}
