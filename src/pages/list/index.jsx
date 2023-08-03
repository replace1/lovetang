import React, { useEffect, useState } from 'react';
import './index.less';
import { Button, Form, Input, Pagination, Select, Tabs } from 'antd';
const { Search } = Input;
import Icon, { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import Tables from './components/Tables/Tables';
import { connect } from 'dva';

export default connect((state) => {
  return {
    count: state.list.count,
    type: state.list.type,
    count2: state.list.count2,
    count1: state.list.count1,
    count3: state.list.count3,
    count5: state.list.count5,
    count6: state.list.count6,
  };
})(list);

function list(props) {
  const {
    dispatch,
    history,
    count,
    type,
    count2,
    count1,
    count3,
    count5,
    count6,
  } = props;
  const [page, setPage] = useState(1); //当前页

  //每次切换数据后，page重制到第一页
  useEffect(() => {
    setPage(1);
  }, [type]);

  //点击切换tabs
  const onChange = (key) => {
    dispatch({ type: 'list/Type', payload: key });
  };

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      dispatch({
        type: `list/getCount${i}`,
        payload: {
          page: '',
          limit: '',
          cate_id: '',
          type: i,
          store_name: '',
          excel: 0,
        },
      });
    }
  }, [type]);

  //tabs切换数据
  const items = [
    {
      key: '1',
      label: `出售中的商品(${count1})`,
    },
    {
      key: '2',
      label: `仓库中的商品(${count2})`,
    },
    {
      key: '4',
      label: `已经售磬商品(${count3})`,
    },
    {
      key: '5',
      label: `警戒库存商品(${count5})`,
    },
    {
      key: '6',
      label: `回收站的商品(${count6})`,
    },
  ];

  const options = [
    //商品分类下拉框数据
    { value: '241', label: '|-----1' },
    { value: '240', label: '|-----123456' },
    { value: '242', label: '|-----|-----666' },
    { value: '238', label: '|-----11111' },
    { value: '239', label: '|-----|-----22222' },
    { value: '234', label: '|-----111' },
    { value: '235', label: '|-----|-----222' },
    { value: '232', label: '|-----花卉' },
    { value: '233', label: '|-----|-----123' },
  ];

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const [form] = Form.useForm();
  //点击搜索按钮，根据商品搜索数据
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
                  options={options}
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
            <Button
              type="primary"
              onClick={() => {
                history.push('/admin/product/add_product');
              }}
            >
              <PlusOutlined />
              添加商品
            </Button>
            <Button>商品采集</Button>
            {type === '1' ? (
              <Button>商品下架</Button>
            ) : type === '2' ? (
              <Button>商品上架</Button>
            ) : null}
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
              total={count} //总条数
              current={page} //当前页
              showQuickJumper={true} //跳转到第几页是否显示
              showTotal={(count) => `共 ${count} 条`}
              onChange={(e) => {
                //改变页码
                setPage(e);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
