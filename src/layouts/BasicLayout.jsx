<<<<<<< HEAD
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
                status={modal}
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
=======
import React, { createContext, useContext } from 'react';
export default function BasicLayout(props) {
  return props.children;
}

[
  {
    name: 'Moscow',
    count: 12,
    content:
      '<p>Moscow is the capital city and the most populous federal subject of < b > Russia < /b>.The city is a major political, economic, cultural and scientific center in Russia and in Eurasia. </p > ',
  },
  {
    name: 'Amsterdam',
    count: 25,
    content:
      '<p>Amsterdam is the capital and most populous city of the <b > Netherlands < /b>.Its status as the Dutch capital is mandated by the Constitution of the Netherlands though it is not the seat of the Dutch government, which is at the Hague. </p > ',
  },
  {
    name: 'Lisbon',
    count: 15,
    content:
      '<p>Lisbon is the largest city and capital of <b>Portugal </ b> with a population of 547,631 within its administrative limits on a land area of 84.8 square kilometers. </p>',
  },
  {
    name: 'Berlin',
    count: 19,
    content:
      "<p>Berlin is the capital city of <b>Germany </b> and one of the 16 states of Germany. With a population of 3.3 million people, Berlin is Germany's largest city and is the second most populous city proper and    		the seventh most populous urban area in the European Union. < /p> ",
  },
  {
    name: 'Madrid',
    count: 25,
    content:
      '<p>Madrid is the capital of <b>Spain </b> and its largest city. The population of the city is roughly 3.3 million and the entire population of the Madrid metropolitan area is calculated to be around 6.5    		million. < /p> ',
  },
  {
    name: 'Barcelona',
    count: 10,
    content:
      '<p>Barcelona is a Spanish city, capital of the autonomous community of Catalonia and the second largest city in the country, with a    		population of 1, 		620, 		943 within its administrative limits. < /p> ',
  },
  {
    name: 'Zagreb',
    count: 27,
    content:
      '<p>Zagreb is the capital and the largest city of the Republic of < b > Croatia < /b>.It is located in the northwest of the country, along the Sava river, at the southern slopes of the Medvednica mountain. </p > ',
  },
  {
    name: 'Singapore',
    count: 30,
    content:
      '<p>Singapore, officially the Republic of Singapore, is a Southeast Asian sovereign city - state off the southern tip of the Malay Peninsula, 		137 kilometers north of the equator. < /p > ',
  },
  {
    name: 'Beijing',
    count: 14,
    content:
      "<p>Beijing, sometimes romanized as Peking, is the capital of the People's Republic of China and one of the most populous cities in    		the world.The population as of 2012 was 20, 		693, 		000. < /p> ",
  },
  {
    name: 'Paris',
    count: 5,
    content:
      '<p>Paris is the capital and most populous city of <b > France < /b>.It is situated on the River Seine, in the north of the country, at the heart of the Île - de - France region. </p > ',
  },
];
>>>>>>> 3492635df0cfc4886d3f995b0372840d3e2d1a3f
