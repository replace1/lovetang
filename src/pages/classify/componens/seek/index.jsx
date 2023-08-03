import React, { useForm, useEffect, useState } from 'react';
import './style.css';
import { Button, Select, Input, Form, Modal, Upload } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from 'dva';
import { PlusOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4149689_8osqrxga5hm.js',
});

//下拉框的数据
const select2 = [
  { id: 1, page: 1, value: '显示' },
  { id: 2, page: 0, value: '隐藏' },
];
const select3 = [
  { id: 1, value: '顶级菜单' },
  { id: 2, value: '12121' },
  { id: 3, value: '111' },
];

export default connect((state) => {
  return {
    data: state.classify.data,
    page: state.classify.page,
    loading: !!state.loading.effects['classify/fetchLogin'],
  };
})(Seek);
function Seek(props) {
  const { dispatch, data, page } = props;
  const [form] = Form.useForm();

  //请求商品分类,下拉框数据
  useEffect(() => {
    dispatch({
      type: 'classify/feelPage',
      payload: {},
    });
  }, []);

  //搜索功能、点击搜索
  const onFinish = (values) => {
    dispatch({
      type: 'classify/cateGory',
      payload: {
        pid: values.pid,
        is_show: values.is_show,
        page: 1,
        cate_name: values.cate_name,
        limit: 15,
      },
    });
  };
  //下拉框事件
  const onGenderChange = (e) => {
    dispatch({
      type: 'classify/cateGory',
      payload: {
        pid: form.getFieldsValue().pid,
        is_show: form.getFieldsValue().is_show,
        page: 1,
        cate_name: form.getFieldsValue().cate_name,
        limit: 15,
      },
    });
  };

  useEffect(() => {
    // console.log(page);
  }, [page]);

  return (
    <>
      <Form form={form} name="basic" onFinish={onFinish}>
        <Form.Item styleName="sort_top" name="pid" label="商品分类">
          <Select
            placeholder="请选择商品分类"
            onChange={onGenderChange}
            allowClear
          >
            {page?.map((v, i) => (
              <Select.Option key={v.id} value={v.id}>
                {v.html}
                {v.cate_name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item styleName="sort_top" name="is_show" label="分类状态">
          <Select
            placeholder="请选择分类状态"
            onChange={onGenderChange}
            allowClear
          >
            {select2.map((v, i) => (
              <Select.Option key={v.id} value={v.page}>
                {v.value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div styleName="sort sort_top">
          <Form.Item styleName="sort_butt" name="cate_name" label="分类名称">
            <Input placeholder="请输入分类名称" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              <IconFont type="icon-sousuo" />
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}
