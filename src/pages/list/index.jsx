import React, { useState } from 'react';
import './index.less';
import { Button, Form, Input, Pagination, Select, Tabs } from 'antd';
const { Search } = Input;
import Icon, { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import Tables from './components/Tables';
import { connect } from 'dva';

export default connect((state) => {
  return {
    count: state.list.count,
  };
})(list);

function list(props) {
  const { dispatch, count } = props;

  const [page, setPage] = useState(1);

  const onChange = (key) => {
    dispatch({ type: 'list/Type', payload: key });
  };

  const items = [
    {
      key: '1',
      label: `出售中的商品(5)`,
    },
    {
      key: '2',
      label: `仓库中的商品(32)`,
    },
    {
      key: '3',
      label: `已经售磬商品(20)`,
    },
    {
      key: '4',
      label: `警戒库存商品(6)`,
    },
    {
      key: '5',
      label: `回收站的商品(41)`,
    },
  ];

  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  const [form] = Form.useForm();

  const onSearch = (value) => {
    dispatch({ type: 'list/StoreName', payload: value });
  };

  return (
    <div styleName="article-manager">
      <div styleName="i-layout-page-header">
        <div styleName="i-layout-page-header">
          <span>商品管理</span>
          <div>
            <Tabs
              defaultActiveKey="1"
              tabBarGutter={32}
              items={items}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div styleName="ivu-card-dis-hover">
        <div styleName="ivu-card-body">
          <Form
            styleName="ivu-form-label-right"
            form={form}
            name="horizontal_login"
            layout="inline"
            onFinish={onFinish}
          >
            <div styleName="div">
              <Form.Item name="classification" label="商品分类">
                <Select
                  placeholder="请选择商品分类"
                  style={{ width: 200, height: 30, borderRadius: '40px' }}
                  onChange={(e) => {
                    if (e === undefined) {
                      e = '';
                    }
                    dispatch({ type: 'list/CateId', payload: e });
                  }}
                  allowClear
                  options={[
                    { value: '241', label: '|-----1' },
                    { value: '240', label: '|-----123456' },
                    { value: '242', label: '|-----|-----666' },
                    { value: '238', label: '|-----11111' },
                    { value: '239', label: '|-----|-----22222' },
                    { value: '234', label: '|-----111' },
                    { value: '235', label: '|-----|-----222' },
                    { value: '232', label: '|-----花卉' },
                    { value: '233', label: '|-----|-----123' },
                  ]}
                />
              </Form.Item>
            </div>
            <div styleName="div">
              <Form.Item name="searchgoods " label="商品搜索">
                <Search
                  placeholder="请输入商品名称/关键字/ID"
                  onSearch={onSearch}
                  enterButton
                />
              </Form.Item>
            </div>
          </Form>
          <div styleName="Button">
            <Button type="primary">
              <PlusOutlined />
              添加商品
            </Button>
            <Button>商品采集</Button>
            <Button>批量下架</Button>
            <Button>
              <UploadOutlined />
              导出
            </Button>
          </div>
          <div styleName="ivu-table-wrapper">
            <Tables page={page} />
          </div>
          <div styleName="acea-row">
            <Pagination
              total={count}
              showQuickJumper={true}
              showTotal={(count) => `共 ${count} 条`}
              onChange={(e) => {
                setPage(e);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
