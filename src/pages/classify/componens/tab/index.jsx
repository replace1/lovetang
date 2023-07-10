import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import { connect } from 'dva';
import { Image, Table, Switch, Modal, message } from 'antd';
import 'antd/dist/antd.css';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4149689_dtpu6ben41d.js',
});

export default connect((state) => {
  return {
    data: state.classify.data,
    loading: !!state.loading.effects['classify/pathehone'],
  };
})(Tab);
function Tab(props) {
  const { dispatch, data, loading } = props;

  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    dispatch({
      type: 'classify/pathehone',
      payload: num,
    });
    setConfirmLoading(true);
    if (!loading) {
      setOpen(false);
      setConfirmLoading(false);
    }
  };
  const handleCancel = () => {
    setOpen(false);
    message.info('确定取消');
  };
  const showModal = (val) => {
    setNum(val.id);
    setOpen(true);
  };
  const change1 = (e, v) => {
    dispatch({
      type: 'classify/setShow',
      payload: {
        id: v.id,
        show: v.is_show == 1 ? 0 : 1,
      },
    });
  };
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
          height="36px"
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
          onChange={(e) => {
            change1(e, item);
          }}
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
          <span
            onClick={() => {
              showModal(item);
            }}
          >
            删除
          </span>
        </div>
      ),
    },
  ];
  return (
    <>
      <Table
        loading={loading}
        scroll={{
          x: 908,
          y: 408,
        }}
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={false}
        expandable={{
          expandIcon: ({ expanded, onExpand, record }) => {
            if (record.children) {
              return expanded ? (
                <IconFont
                  styleName="icont"
                  type="icon-youjiantou"
                  onClick={(e) => onExpand(record, e)}
                />
              ) : (
                <IconFont
                  styleName="icont"
                  type="icon-xiajiantou"
                  onClick={(e) => onExpand(record, e)}
                />
              );
            }
          },
        }}
      />

      <Modal
        closable={false}
        wrapClassName="modals"
        title={
          <div styleName="header">
            <IconFont type="icon-wenhao" />
            <b>删除商品分类</b>
          </div>
        }
        cancelText="取消"
        okText="确定"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div styleName="header_cen">确定要删除商品分类？</div>
        <div styleName="header_cen">删除商品分类后将无法恢复，请谨慎操作!</div>
      </Modal>
    </>
  );
}
