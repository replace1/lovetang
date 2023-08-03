import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExpandOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { Layout, Select, message, Breadcrumb } from 'antd';
import './style.less';
import { QBread, QMenu } from '../components';
import { connect } from 'dva';
import Menus from '../components/QMenu/menus';
import { QPopover, Qmodal, QTag } from '@@@';
import { history } from 'umi';
const { Header, Sider, Content } = Layout;
export default connect(({ index }) => {
  return {};
})(BasicLayout);
function BasicLayout(props) {
  const { pathname } = props.location;
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState([pathname]);
  const ope = `/${pathname.split('/')[1]}/${pathname.split('/')[2]}`;

  const url = `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/${
    pathname.split('/')[3]
  }`;

  //刷新当前页面
  const flushed = () => {
    window.location.reload();
  };

  //头部搜索
  let taab = [];
  let breaList = [];
  function addFun(datas, val) {
    datas.forEach((v) => {
      if (v.path == val) {
        taab.push(v);
        breaList.push(v.title);
      } else {
        if (v.children && JSON.stringify(v.children).indexOf(val) != -1) {
          addFun(v.children, val);
        }
      }
    });
  }

  //头部菜单栏数据
  const options = Menus.map((v) => {
    if (v.type) {
      return { value: v.path, label: v.title, disabled: true };
    } else {
      return { value: v.path, label: v.title };
    }
  });
  //设置初始打开的菜单的值
  const [openKeys, setOpenKeys] = useState([ope, url]);
  //菜单选中切换
  const selectChange = (opt) => {
    history.push(opt);
    setSelect([opt]);
    setOpenKeys(`/${opt.split('/')[1]}/${opt.split('/')[2]}`);
  };
  // 退出登录
  const onEsc = () => {
    setModal(true);
  };

  // 取消二次弹框
  const onCancel = () => {
    setModal(false);
  };

  // 二次弹框确认删除
  const onOk = async () => {
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      message.success({
        content: '您已成功退出',
        duration: 0.3,
      });
      window.location.reload(true);
    }
    setModal(false);
  };

  const items1 = [
    {
      key: '1',
      label: (
        <p>
          <UserOutlined /> 个人中心
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <p onClick={() => onEsc()}>
          <LogoutOutlined /> 退出登录
        </p>
      ),
    },
  ];

  return (
    <Layout
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Sider
        style={{ width: '20%', height: '100%', overflowY: 'scroll' }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <QMenu />
      </Sider>
      <Layout styleName="site-layout">
        <Header
          styleName="site-layout-background"
          style={{
            padding: 0,
            background: '#fff',
          }}
        >
          <div styleName="trigger">
            <span onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              <ReloadOutlined
                onClick={flushed}
                style={{ cursor: 'pointer', marginLeft: 20, color: '#ccc' }}
              />
            </span>
            <QBread />
          </div>
          <Select
            styleName="select"
            bordered={false}
            placeholder="菜单搜索"
            showArrow={false}
            onSelect={selectChange}
            options={options}
          ></Select>
          {/* cursor:pointer 划过显示小手*/}
          <span styleName="exid">
            <ExpandOutlined style={{ marginRight: 30, fontSize: 20 }} />
            <BellOutlined style={{ marginRight: 30, fontSize: 20 }} />
            <span style={{ cursor: 'pointer' }}>
              {/* 退出登录 */}
              <QPopover
                title={'admin'}
                icon=""
                items={items1}
                color={'black'}
              />
              {/* 提示框 */}
              <Qmodal
                title="退出登录确认"
                title1="您确认退出当前账户吗？"
                onCancel={onCancel}
                onOk={onOk}
                open={modal}
                setStatus={setModal}
              />
            </span>
          </span>
        </Header>
        {/* <QTag /> */}
        <QTag />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
