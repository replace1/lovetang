import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Form, Radio, Row, Select, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { connect } from 'dva';

import '../../styles.less';

export default connect(({ reply }) => {
  return {};
})(Qsearch);
function Qsearch(props) {
  const { dispatch } = props;

  const [form] = Form.useForm();

  function Puductreply(key = '', order = '') {
    dispatch({
      type: 'reply/fetchReplyList',
      payload: {
        page: 1,
        limit: 5,
        key,
        order,
        ...form.getFieldsValue(),
      },
    });
  }

  const getTimes = (e) => {
    dispatch({
      type: 'reply/fetchReplyList',
      payload: {
        page: 1,
        limit: 5,
        key: '',
        order: '',
        data: e.target.value,
        is_reply: '',
        store_name: '',
        account: '',
        product_id: 0,
      },
    });
  };

  const onSearch = () => {
    Puductreply();
  };

  const onSelect = () => {
    Puductreply();
  };

  return (
    <Form form={form} name="search">
      <Form.Item name="data" label="评论时间">
        <div>
          <Radio.Group defaultValue="" onChange={(e) => getTimes(e)}>
            <Radio.Button styleName="reply-all" value="">
              全部
            </Radio.Button>
            <Radio.Button value="today">今天</Radio.Button>
            <Radio.Button value="yesterday">昨天</Radio.Button>
            <Radio.Button value="lately7">最近7天</Radio.Button>
            <Radio.Button value="lately30">最近30天</Radio.Button>
            <Radio.Button value="month">本月</Radio.Button>
            <Radio.Button styleName="reply-toyear" value="year">
              本年
            </Radio.Button>
          </Radio.Group>
          <RangePicker locale={locale} style={{ marginLeft: 20 }} />
        </div>
      </Form.Item>

      <Row>
        <Col span={7}>
          <Form.Item
            name="is_reply"
            label="评价状态"
            labelCol={{
              span: 4.5,
            }}
          >
            <Select placeholder="请选择" onSelect={onSelect}>
              <Option value={1}>已回复</Option>
              <Option value={0}>未回复</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            name="store_name"
            label="商品信息"
            labelCol={{
              span: 5,
            }}
          >
            <Input placeholder="请输入商品ID或者商品信息" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="account"
            label="用户名称"
            labelCol={{
              span: 4,
            }}
          >
            <div>
              <Input
                placeholder="请输入"
                style={{ width: 260, marginRight: 30 }}
              />
              <Button
                styleName="reply-search"
                onClick={onSearch}
                type="primary"
              >
                <SearchOutlined /> 搜索
              </Button>
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
