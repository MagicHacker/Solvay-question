import React, { Component } from 'react';
import { Form, DatePicker, Input, Radio, Button, Table, Space } from 'antd';
import './index.less';
export default class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerTime: '',
      loginTime: '',
      userName: '',
      phone: '',
      nickName: '',
      userIdentity: 0,
    };
    this.dataSource = [
      {
        key: '1',
        userName: '胡彦斌',
        phone: 32,
        registerTime: '2019-5-10',
        id: 45678,
        nickName: 'Eugenia',
        sex: '男',
        area: '上海',
        userIdentity: '已报名',
        loginTime: '2021-10-21',
      },
      {
        key: '2',
        userName: '胡彦祖',
        phone: 42,
        registerTime: '2019-5-10',
        id: 45678,
        nickName: 'Eugenia',
        sex: '男',
        area: '香港',
        userIdentity: '未报名',
        loginTime: '2021-10-21',
      },
    ];

    this.columns = [
      {
        title: 'ID',
        key: 'id',
        dataIndex: 'id',
        align: 'center',
      },
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        align: 'center',
      },
      {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
      },
      {
        title: '地区',
        dataIndex: 'area',
        key: 'area',
        align: 'center',
      },
      {
        title: '用户身份',
        dataIndex: 'userIdentity',
        key: 'userIdentity',
        align: 'center',
      },
      {
        title: '注册时间',
        dataIndex: 'registerTime',
        key: 'registerTime',
        align: 'center',
      },
      {
        title: '登录时间',
        dataIndex: 'loginTime',
        key: 'loginTime',
        align: 'center',
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: () => {
          return (
            <Space>
              <Button size={{ size: 'small' }} type="text" danger>
                查看
              </Button>
              <Button size={{ size: 'small' }} type="text" danger>
                添加
              </Button>
            </Space>
          );
        },
      },
    ];
  }
  changeRegisterTime = (date, dateString) => {
    this.setState({
      registerTime: dateString,
    });
  };
  changeLoginTime = (date, dateString) => {
    this.setState({
      loginTime: dateString,
    });
  };
  changeUserName = (e) => {
    const { target } = e;
    this.setState({
      userName: target.value,
    });
  };
  changeNickName = (e) => {
    const { target } = e;
    this.setState({
      nickName: target.value,
    });
  };
  changePhone = (e) => {
    const { target } = e;
    this.setState({
      phone: target.value,
    });
  };
  changeUserIdentity = (e) => {
    const { target } = e;
    this.setState({
      userIdentity: target.value,
    });
  };
  search = () => {
    const { userName, phone, nickName, userIdentity, registerTime, loginTime } = this.state;
    console.warn('输出的值', userName, phone, nickName, userIdentity, registerTime, loginTime);
  };
  reset = () => {
    this.setState({
      userName: '',
      phone: '',
      nickName: '',
      userIdentity: 0,
      registerTime: '',
      loginTime: '',
    });
  };
  render() {
    const { userName, phone, nickName, userIdentity } = this.state;
    return (
      <div className="user_manage_wrapper">
        <div className="user_manage_title">用户管理</div>
        <div className="user_manage_search">
          <Form layout="inline">
            <Form.Item label="注册时间:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <DatePicker showTime onChange={this.changeRegisterTime} />
            </Form.Item>
            <Form.Item label="登录时间:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <DatePicker showTime onChange={this.changeLoginTime} />
            </Form.Item>
            <Form.Item label="姓名:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input placeholder="请输入姓名" value={userName} onChange={this.changeUserName} />
            </Form.Item>
            <Form.Item label="昵称:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input placeholder="请输入昵称" value={nickName} onChange={this.changeNickName} />
            </Form.Item>
            <Form.Item label="手机号:" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 10 }}>
              <Input placeholder="请输入手机号" value={phone} onChange={this.changePhone} />
            </Form.Item>
            <Form.Item label="用户身份:" style={{ marginTop: 10 }} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
              <Radio.Group value={userIdentity} onChange={this.changeUserIdentity}>
                <Radio value={1}>已报名</Radio>
                <Radio value={0}>未报名</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item style={{ marginTop: 10 }} wrapperCol={{ span: 24 }}>
              <Space>
                <Button type="primary" htmlType="submit" onClick={this.search}>
                  查询
                </Button>
                <Button onClick={this.reset}>重置</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <Table className="user_manage_table" dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
