import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Radio, Select, Table } from 'antd';
const { TextArea } = Input;

export default connect((state) => {
  return {};
})(Messages);

function Messages() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [
    { value: '241', label: '|-----1', disabled: true },
    { value: '240', label: '|-----123456', disabled: true },
    { value: '242', label: '|-----|-----666' },
    { value: '238', label: '|-----11111', disabled: true },
    { value: '239', label: '|-----|-----22222' },
    { value: '234', label: '|-----111', disabled: true },
    { value: '235', label: '|-----|-----222' },
    { value: '232', label: '|-----花卉', disabled: true },
    { value: '233', label: '|-----|-----123' },
  ];

  const columns = [
    {
      title: '图片',
      dataIndex: 'Image',
      width: '100',
      editable: true,
    },
    {
      title: '售价',
      dataIndex: 'age',
      width: '120',
      editable: true,
    },
    {
      title: '成本价',
      dataIndex: 'address',
      width: '120',
      editable: true,
    },
    {
      title: '原价',
      dataIndex: 'address',
      width: '120',
      editable: true,
    },
    {
      title: '库存',
      dataIndex: 'address',
      width: '120',
      editable: true,
    },
    {
      title: '商品编号',
      dataIndex: 'address',
      width: '140',
      editable: true,
    },
    {
      title: '重量（KG）',
      dataIndex: 'address',
      width: '120',
      editable: true,
    },
    {
      title: '体积(M3)',
      dataIndex: 'address',
      width: '120',
      editable: true,
    },
  ];

  const [type, setType] = useState('普通商品');
  const [specification, setSpecification] = useState('普通商品');

  return (
    <div className="massagesBox">
      <div>
        <Form.Item
          label="商品名称"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入商品名称',
            },
          ]}
        >
          <Input placeholder="请输入商品名称" />
        </Form.Item>

        <Form.Item
          label="商品分类"
          name="type"
          rules={[
            {
              required: true,
              message: '请选择商品分类',
            },
          ]}
        >
          <Select
            mode="tags"
            allowClear
            style={{
              width: '100%',
            }}
            placeholder="请选择商品分类"
            onChange={handleChange}
            options={options}
          ></Select>
        </Form.Item>

        <Form.Item label="商品关键字" name="name">
          <Input placeholder="请输入商品关键字" />
        </Form.Item>

        <Form.Item
          label="单位"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入单位',
            },
          ]}
        >
          <Input placeholder="请输入单位" />
        </Form.Item>

        <Form.Item label="商品简介">
          <TextArea rows={3} placeholder="请输入商品简介" />
        </Form.Item>

        <Form.Item
          label="商品封面图"
          extra="(345*345)"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div className="UpImg"></div>
        </Form.Item>

        <Form.Item label="商品推荐图" extra="(382*160)">
          <div className="UpImg"></div>
        </Form.Item>

        <Form.Item
          label="商品轮播图"
          extra="(最多10张750*750)"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div className="UpImg"></div>
        </Form.Item>

        <Form.Item label="主图视频">123</Form.Item>

        <Form.Item label="商品类型">
          <Radio.Group
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <Radio value="普通商品"> 普通商品 </Radio>
            <Radio value="虚拟商品"> 虚拟商品 </Radio>
          </Radio.Group>
        </Form.Item>

        {type === '虚拟商品' ? (
          <Form.Item label="虚拟类型">
            <Radio.Group
              onChange={(e) => {
                setSpecification(e.target.value);
              }}
            >
              <Radio value="卡密"> 卡密 </Radio>
              <Radio value="优惠券"> 优惠券 </Radio>
            </Radio.Group>
          </Form.Item>
        ) : null}

        <Form.Item label="商品规格">
          <Radio.Group
            onChange={(e) => {
              setSpecification(e.target.value);
            }}
          >
            <Radio value="单规格"> 单规格 </Radio>
            <Radio value="多规格"> 多规格 </Radio>
          </Radio.Group>
        </Form.Item>

        {specification === '单规格' ? (
          <Table columns={columns} dataSource={[]} rowKey="id" />
        ) : (
          <Form.Item label="选择规格">
            <Select
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: '123',
                  label: '123',
                },
                {
                  value: '321',
                  label: '123',
                },
                {
                  value: '666',
                  label: '666',
                },
              ]}
            />
            <Button type="primary">确认</Button>
            <Button>添加规格模版</Button>
          </Form.Item>
        )}

        <Form.Item label="关联用户标签">
          <Select
            placeholder="请选择关联用户标签"
            style={{
              width: 400,
            }}
            onChange={handleChange}
            options={[
              {
                value: '1231',
                label: '1231',
              },
              {
                value: '234',
                label: '234',
              },
              {
                value: '123123',
                label: '123123',
              },
              {
                value: '假面骑士极狐',
                label: '假面骑士极狐',
              },
            ]}
          />
        </Form.Item>
      </div>
    </div>
  );
}
