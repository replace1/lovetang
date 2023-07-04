import React, { useMemo } from 'react';
import Link from 'antd/es/typography/Link';
import Menus from '../QMenu/menus';
import { Breadcrumb } from 'antd';
import { useLocation } from 'umi';
import QIcon from '../QIcon';

function QBread() {
  const location = useLocation();
  console.log(Menus);
  const deepGetItem = (arr, path) => {
    let nArr = [];

    arr.forEach((v) => {
      if (v.path === path) {
        nArr.push(v);
      }
      if (v.children) {
        let childArr = deepGetItem(v.children, path);
        if (childArr.length) {
          nArr.push(v, ...childArr);
        }
      }
    });
    return nArr;
  };

  let menuList = useMemo(() => {
    return deepGetItem(Menus, location.pathname);
  }, [location.pathname]);

  console.log(menuList);
  return (
    <Breadcrumb>
      {menuList.map((v) => {
        return (
          <Breadcrumb.Item style={{ marginLeft: 20 }} key={v.path}>
            <QIcon type={v.icon} />
            <Link style={{ fontSize: 12 }} to={v.key}>
              {v.title}
            </Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default QBread;
