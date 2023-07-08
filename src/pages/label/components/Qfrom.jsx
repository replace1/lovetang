import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Form, Input, Select, InputNumber, Space } from 'antd';
import { connect } from 'dva';
const { Option } = Select;
export default connect(({ label, loading }) => {
  return {
    getAddList: label.getAddList,
  };
})(Qfrom);
function Qfrom(props) {
  const [form] = Form.useForm();
  const [con, setCon] = useState();
  const {
    dispatch,
    groupList = () => {},
    uid,
    isModalOpen,
    setIsModalOpen,
    isModalOpen1,
    setIsModalOpen1,
    getAddList,
  } = props;

  const onFinish = async (values) => {
    console.log(values);
    if (con === 1) {
      await dispatch({
        type: 'user/getlabelSave',
        payload: values,
      });
      await groupList(1);
      setIsModalOpen(false);
    } else {
      console.log(1);
    }
  };

  const showModal = (opt) => {
    setCon(opt);
    setIsModalOpen(true);
    dispatch({
      type: 'user/getlabelAdd',
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 修改
  const editFn = async () => {
    return await dispatch({
      type: 'user/groupAdd',
      payload: uid,
    });
  };

  useEffect(() => {
    if (uid) {
      editFn().then((res) => {
        let xxx = res[1];

        // form.setFieldsValue({ ...xxx.value });
      });
    }
  }, [uid]);

  return (
    <>
      <Space size={10}>
        <Button
          type="primary"
          onClick={() => showModal(1)}
          icon={<PlusOutlined />}
        >
          添加标签
        </Button>
        <Button
          type="primary"
          onClick={() => showModal(2)}
          style={{ background: '#19be6b' }}
          icon={<PlusOutlined />}
        >
          添加分类
        </Button>
      </Space>

      {con === 1 ? (
        <Modal
          title="添加标签"
          open={isModalOpen}
          onCancel={handleCancel}
          cancelText={Modal.confirm}
          okText=""
        >
          <Form
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="label_cate"
              label="标签分类"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="请选择标签分类" allowClear>
                {getAddList.map((v, i) => {
                  const { value, label } = v;
                  return (
                    <Option value={value} key={i}>
                      {label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="标签名称"
              name="label_name"
              rules={[
                {
                  required: true,
                  message: '请输入标签名称',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" block>
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        <Modal
          title="添加标签分类"
          open={isModalOpen}
          onCancel={handleCancel}
          cancelText={Modal.confirm}
          okText=""
        >
          <Form
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="分类名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入标签名称',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="排序" name="sort">
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                // onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" block>
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}
