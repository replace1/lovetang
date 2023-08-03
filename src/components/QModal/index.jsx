import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import { Modal } from 'antd';

function Qmodal(props) {
  const {
    status = false, //提示框状态
    title = '', //标题
    title1 = '', //提示文字
    title2 = '', //提示文字
    title3 = '', //提示文字
    width = 400, //宽度
    loading = false,
    onOk = () => {},
    onCancel = () => {},
    borderRadius = 10,
    ...item
  } = props;

  return (
    <>
      <Modal
        borderRadius={10}
        loading={loading}
        title={title}
        open={status}
        onOk={onOk}
        onCancel={onCancel}
        width={width}
        okText={loading ? <LoadingOutlined /> : '确认'}
        cancelText="取消"
        {...item}
      >
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
      </Modal>
    </>
  );
}

export default Qmodal;
