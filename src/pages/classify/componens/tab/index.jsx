import React, { useEffect, useState } from 'react';
import './style.css';
import { connect } from 'dva';
import { Image, Table, Switch } from 'antd';

export default connect((state) => {
  return {
    data: state.classify.data,
  };
})(Tab);
function Tab(props) {
  const { dispatch, data } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '分类名称',
      dataIndex: 'cate_name',
      key: 'cate_name',
    },
    {
      title: '分类图标',
      render: (_, item) => (
        <Image
          width="36px"
          src={item.pic}
          fallback="http://www.lovetang.top/admin/img/no.7de91001.png"
        />
      ),
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '住址',
      render: (_, item) => (
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          checked={item.is_show}
        />
      ),
    },
    {
      title: '操作',
      fixed: 'right',
      width: 250,
      align: 'center',
      render: (_, item) => (
        <div styleName="action">
          <span>编辑</span>
          <span></span>
          <span>删除</span>
        </div>
      ),
    },
  ];

  console.log(data);

  return (
    <>
      <Table
        scroll={{
          x: 908,
          y: 408,
        }}
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </>
  );
}
