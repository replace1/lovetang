import React, { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
import { Menu } from 'antd';
import Menus from './menus';
import { QIcon } from '@@@';
export default function QMenu(props) {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);

  // const deepMenus = (arr) => {
  //   let nArr = [];
  //   nArr = arr.map((v) => {
  //     if (v.children) {
  //       return (
  //         <Menu.SubMenu key={v.path} title={v.label}>
  //           {deepMenus(v.children)}
  //         </Menu.SubMenu>
  //       );
  //     }
  //     return (
  //       <Menu.Item key={v.path}>
  //         <QIcon
  //           style={{ marginRight: 10 }}
  //           fontSize={12}
  //           color="#fff"
  //           type={`icon-${v.icon}`}
  //         />
  //         {v.label}
  //       </Menu.Item>
  //     );
  //   });
  //   return nArr;
  // };

  // 规定数据格式
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  function menus(menu) {
    const val = menu.map((v) => {
      return getItem(
        v.title,
        v.path,
        <QIcon fontSize={12} color="#fff" type={`icon-${v.icon}`} />,
        v.children ? menus(v.children) : null,
      );
    });
    return val;
  }

  const items = menus(Menus);

  //存放一级数据路由
  const rootSubmenuKeys = menus(Menus).map((v) => v.key);

  //打开关闭的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys([keys[0], latestOpenKey]);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // 根据路由判断默认打开哪个
  useEffect(() => {
    const deepKeys = (arr, target) => {
      let nArr = [];

      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.path === target) {
          nArr.push(item.path);
          break;
        }
        if (item.children) {
          let childArr = deepKeys(item.children, target);
          if (childArr.length) {
            nArr.push(item.path, ...childArr);
            break;
          }
        }
      }
      return nArr;
    };
    let nOpenkeys = deepKeys(Menus, location.pathname);
    setOpenKeys(nOpenkeys);
  }, [Menus, location.pathname]);
  return (
    <Menu
      height="100%"
      theme="dark"
      mode="inline"
      items={items}
      selectedKeys={[location.pathname]}
      onSelect={({ selectedKeys }) => {
        history.push(selectedKeys[0]);
      }}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
}
