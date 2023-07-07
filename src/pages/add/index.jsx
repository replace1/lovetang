import React, { useState } from 'react';
import './index.less';
import { connect } from 'dva';
import { Button, Form, Tabs } from 'antd';
import Icon, { LeftOutlined } from '@ant-design/icons';
import Message from './components/message';
import Details from './components/details';
import Rest from './components/rest';

export default connect((state) => {
  return {};
})(Add);

function Add() {
  const items = [
    {
      key: '1',
      label: `商品信息`,
    },
    {
      key: '2',
      label: `商品详情`,
    },
    {
      key: '3',
      label: `其他设置`,
    },
  ];
  const onChange = (key) => {
    setTypeKey(key);
  };
  const [typeKey, setTypeKey] = useState('1');
  return (
    <div styleName="addBox">
      <div styleName="add_header">
        <Button size="small">
          <LeftOutlined /> 返回
        </Button>
        <span styleName="header_title">添加商品</span>
      </div>
      <div styleName="add_main">
        <div styleName="add_body">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 800 }}
          >
            {typeKey === '1' ? (
              <Message />
            ) : typeKey === '2' ? (
              <Details />
            ) : typeKey === '3' ? (
              <Rest />
            ) : null}
            {typeKey === '1' ? (
              <Button>下一步</Button>
            ) : typeKey === '2' ? (
              <div>
                <Button>上一步</Button>
                <Button>下一步</Button>
              </div>
            ) : typeKey === '3' ? (
              <div>
                <Button>上一步</Button>
                <Button>保存</Button>
              </div>
            ) : null}
          </Form>
        </div>
      </div>
    </div>
  );
}
