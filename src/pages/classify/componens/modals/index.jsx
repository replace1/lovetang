import React, { useForm, useEffect, useState } from 'react';
import './style.css';
import {
  Button,
  Select,
  Input,
  Form,
  Modal,
  Upload,
  InputNumber,
  Radio,
} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from 'dva';
import { PlusOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4149689_8osqrxga5hm.js',
});

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
export default connect((state) => {
  return {
    pone: state.classify.pone,
  };
})(Modals);
function Modals(props) {
  const { dispatch, pone } = props;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [pag, setPag] = useState([]);

  useEffect(() => {
    props.mod.rules?.map((v, i) => {
      if (i == 0) {
        setPag(v);
      }
    });
  }, [props]);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  const onFinish1 = (values) => {
    console.log('Success:', values);
  };
  return (
    <div styleName="modalales">
      <div styleName="buttent">
        <Button onClick={showModal}>
          <IconFont style={{ color: '#fff' }} type="icon-zengjia4" />
          <sicon-tianjiapan>添加分类</sicon-tianjiapan>
        </Button>
      </div>

      <Modal
        title={<b>{props.mod.title}</b>}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <button key={1} styleName="modal_button">
            确定
          </button>,
        ]}
      >
        <div styleName="item">
          <Form
            {...layout}
            styleName="form_two"
            name="basic"
            onFinish={onFinish1}
          >
            <Form.Item label="上级分类" name="username">
              <Select placeholder="顶级菜单">
                {pag.options?.map((v, i) => (
                  <Select.Option key={i} value={v.value}>
                    {v.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="分类名称"
              name="userName"
              rules={[
                {
                  required: true,
                  message: '分类名称不能为空',
                },
              ]}
            >
              <Input placeholder="请输入分类名称" />
            </Form.Item>
            <Form.Item
              label="分类图标(180*180)"
              name="img1"
              valuePropName="fileList"
            >
              <Upload
                // styleName="impag"
                action="/upload.do"
                listType="picture-card"
              >
                <div>
                  <PlusOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              label="分类大图(468*340)"
              name="img2"
              valuePropName="fileList"
            >
              <Upload
                // styleName="impag"
                action="/upload.do"
                listType="picture-card"
              >
                <div>
                  <PlusOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item label="排序" name="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value="显示">显示</Radio>
                <Radio value="隐藏">隐藏</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
