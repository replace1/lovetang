import React, { useForm, useEffect } from 'react';
import './style.css';
import { Button, Select, Input, Form } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from 'dva';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4149689_8osqrxga5hm.js',
});

//下拉框的数据
const select1 = [
  { id: 1, pid: 241, value: '|-----1' },
  { id: 2, pid: 240, value: '|-----123456' },
  { id: 3, pid: 238, value: '|-----11111' },
  { id: 4, pid: 234, value: '|-----111' },
  { id: 5, pid: 232, value: '|-----花卉' },
];
const select2 = [
  { id: 1, page: 1, value: '显示' },
  { id: 2, page: 0, value: '隐藏' },
];

export default connect((state) => {
  return {
    data: state.classify.data,
    loading: !!state.loading.effects['classify/fetchLogin'],
  };
})(Seek);
function Seek(props) {
  const { dispatch, data } = props;
  const [form] = Form.useForm();

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

  return (
    <>
      <Form form={form} name="basic" onFinish={onFinish}>
        <Form.Item styleName="sort_top" name="pid" label="商品分类">
          <Select
            placeholder="请选择商品分类"
            onChange={onGenderChange}
            allowClear
          >
            {select1.map((v, i) => (
              <Select.Option key={v.id} value={v.pid}>
                {v.value}
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
        <div styleName="buttent">
          <Form.Item>
            <Button>
              <IconFont style={{ color: '#fff' }} type="icon-zengjia4" />
              <sicon-tianjiapan>添加分类</sicon-tianjiapan>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}
