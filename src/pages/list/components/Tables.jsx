import { Image, Switch, Table } from 'antd';
import './Tables.less';
import React, { useEffect, useState } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { connect } from 'dva';

export default connect((state) => {
  return {
    data: state.list.data, //表格数据
    setStore_name: state.list.setStore_name, //商品搜索
    cate_id: state.list.cate_id, //分类搜索
    type: state.list.type, //type切换
  };
})(Tables);

function Tables(props) {
  const { dispatch, data, setStore_name, cate_id, type, page } = props;

  useEffect(() => {
    dispatch({
      type: 'list/productList',
      payload: {
        page: page,
        limit: 15,
        cate_id: cate_id,
        type: type,
        store_name: setStore_name,
        excel: 0,
      },
    });
  }, [setStore_name, type, cate_id, page]);

  const columns = [
    {
      title: '商品ID',
      width: 100,
      dataIndex: 'cate_id',
      key: 'cate_id',
    },
    {
      title: '商品图',
      width: 100,
      dataIndex: 'image',
      key: 'image',
      render: (_, items) => <Image src={items.image} styleName="Image" />,
    },
    {
      title: '商品名称',
      width: 250,
      dataIndex: 'store_name',
      key: 'store_name',
    },
    {
      title: '商品售价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '销量',
      dataIndex: 'sales',
      key: 'sales',
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '状态',
      dataIndex: 'stock_attr',
      key: 'stock_attr',
      render: () => (
        <Switch
          checkedChildren="上架"
          unCheckedChildren="下架"
          defaultChecked
        />
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 220,
      render: () => (
        <div styleName="ivu-table-cell">
          <a href="">查看</a>
          <div styleName="ivu-divider"></div>
          <a href="">编辑</a>
          <div styleName="ivu-divider"></div>
          <a href="">查看评论</a>
          <div styleName="ivu-divider"></div>
          {type === '5' ? <a href="">恢复商品</a> : <a href="">移到回收站</a>}
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        expandable={{
          expandedRowRender: (record) => (
            <div styleName="item_detail">
              <div>商品分类：{record.bar_code}</div>
              <div>商品市场价格：{record.ot_price}</div>
              <div>成本价：{record.cost}</div>
              <div>收藏：{record.likes}</div>
              <div>虚拟销量：{record.is_postage}</div>
            </div>
          ),
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <DownOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <RightOutlined onClick={(e) => onExpand(record, e)} />
            ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        columns={columns}
        dataSource={data}
        data-row-key={57}
        scroll={{
          x: 1300,
        }}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
