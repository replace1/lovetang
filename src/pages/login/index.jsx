import React, { useState, useEffect } from 'react';
import './style.css';
import ReactCanvasNest from 'react-canvas-nest';
import { createFromIconfontCN } from '@ant-design/icons';
import { Button, message, Form, Input } from 'antd';
import { history } from 'umi';
import { connect } from 'dva';

//引入的图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4149689_uo3e8qjwik.js',
});

export default connect((state) => {
  return {
    data: state.login.data,
    loading: !!state.loading.effects['login/fetchLogin'],
  };
})(login);
function login(props) {
  const { dispatch, loading } = props;
  const [show, setShow] = useState(false);
  const [min, setMin] = useState(false);

  //屏幕宽度的值
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  //监听屏幕的宽度
  useEffect(() => {
    const updateSize = () =>
      setWindowSize({
        width: window.innerWidth,
      });
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  //左侧图片的显示与隐藏
  useEffect(() => {
    if (windowSize.width < 769) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [windowSize]);
  // img 验证码的图片
  const [time, setTime] = useState(
    `http://www.lovetang.top/adminapi/captcha_pro?${new Date().getTime()}`,
  );
  //点击图片切换图片验证码
  const img = () => {
    setTime(
      `http://www.lovetang.top/adminapi/captcha_pro?${new Date().getTime()}`,
    );
  };
  //点击登录按钮
  const onFinish = (values) => {
    dispatch({
      type: 'login/fetchLogin',
      payload: values,
    });
    //message 提示框
    if (!loading) {
      setMin(true);
      message.loading({
        content: '登录中',
        onClose: () => {
          //结束后跳转页面
          setMin(false);
          history.push('/admin/product/product_classify');
        },
      });
    }
  };
  return (
    <div styleName="login">
      <ReactCanvasNest
        className="canvasNest"
        config={{
          pointColor: ' 255, 255, 255 ',
          lineColor: '255,255,255',
          pointOpacity: 0.5,
          pointR: 2,
          count: 200,
          follow: true,
        }}
        style={{ zIndex: 1 }}
      />
      <div style={{ width: show ? '400px' : '900px' }} styleName="login_cent">
        <div
          style={{ display: show ? 'none' : 'block' }}
          styleName="login_cent_left"
        >
          <div styleName="login_cent_left_one">
            <div styleName="login_cent_left_two">
              <img
                src="http://www.lovetang.top/admin/img/sw.3ef10e8b.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div styleName="login_cent_right">
          <div styleName="login_cent_right_one">
            <img style={{ width: '20px', height: '18px' }} src="" alt="" />
            <span style={{ fontSize: '12px' }}>logo</span>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="account"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
            >
              <Input
                prefix={<IconFont type="icon-yonghuming" />}
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item
              name="pwd"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input
                prefix={<IconFont type="icon-24gl-lock2" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <div styleName="pas">
              <div styleName="pass">
                <Form.Item
                  name="imgcode"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码',
                    },
                  ]}
                >
                  <Input
                    prefix={<IconFont type="icon-24gl-lock2" />}
                    type="password"
                    placeholder="请输入验证码"
                  />
                </Form.Item>
              </div>
              <img onClick={img} src={time} alt="" />
            </div>
            <Form.Item>
              <Button
                loading={min}
                type="primary"
                htmlType="submit"
                styleName="butt"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* 提交代码特意注释 */}
    </div>
  );
}
<<<<<<< HEAD

export default login

=======
>>>>>>> 3492635df0cfc4886d3f995b0372840d3e2d1a3f
