import { Image, Modal, Switch, Table, message } from 'antd';
import './Tables.less';
import React, { useEffect, useState } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import Details from '../Details/Details';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;

export default connect((state) => {
  return {
    data: state.list.data, //表格数据
    setStore_name: state.list.setStore_name, //商品搜索
    cate_id: state.list.cate_id, //分类搜索
    type: state.list.type, //type切换
    loading: !!state.loading.effects['list/productList'], //监听接口
    count: state.list.count,
  };
})(Tables);

function Tables(props) {
  const { dispatch, data, setStore_name, cate_id, type, page, count, loading } =
    props;
  useEffect(() => {
    tableData();
  }, [setStore_name, type, cate_id, page, count]); //数据发生改变时，重新获取接口
  const tableData = () => {
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
  };
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
      render: (_, item) => (
        <Switch
          checkedChildren="上架"
          unCheckedChildren="下架"
          defaultChecked={item.stock_attr}
        />
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 220,
      render: (_, item) => (
        <div styleName="ivu-table-cell">
          <span onClick={() => showModal(item)} href="">
            查看
          </span>
          <div styleName="ivu-divider"></div>
          <span href="">编辑</span>
          <div styleName="ivu-divider"></div>
          <span href="">查看评论</span>
          <div styleName="ivu-divider"></div>
          {type === '6' ? (
            <span onClick={() => showConfirm('renew', item)}>恢复商品</span>
          ) : (
            <span onClick={() => showConfirm('del', item)}>移到回收站</span>
          )}
        </div>
      ),
    },
  ];

  const [messageApi, contextHolder] = message.useMessage(); //全局提示

  const showConfirm = (type, item) => {
    confirm({
      title: type === 'del' ? '移入回收站' : '恢复商品',
      icon: <ExclamationCircleFilled />,
      content: type === 'del' ? '确定要移入回收站吗？' : '确定要恢复商品吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        if (type === 'del') {
          dispatch({ type: 'list/Del', payload: item.id });
        } else if (type === 'renew') {
          dispatch({ type: 'list/Renew', payload: item.id });
        }
        messageApi.open({
          type: 'success',
          content: type === 'del' ? '成功移到回收站' : '成功恢复商品',
        });
        tableData();
      },
      onCancel() {
        messageApi.info('取消成功');
      },
    });
  };

  const [detailsId, setDetailsId] = useState(0); //获取详情id
  const showModal = (item) => {
    //点击查看 遮罩层打开
    setShowFlag(true);
    setDetailsId(item.id);
  };

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
  const [showFlag, setShowFlag] = useState(false);
  return (
    <div>
      {/* 全局提示 */}
      {contextHolder}
      <div
        styleName="showDetails"
        style={{ display: showFlag ? 'flex' : 'none' }}
        onClick={() => {
          setShowFlag(false);
        }}
      >
        <Details id={detailsId} />
      </div>
      <div styleName="table">
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
          loading={loading}
          data-row-key={57}
          scroll={{
            x: 1300,
          }}
          rowKey="id"
          pagination={false}
        />
      </div>
    </div>
  );
}
