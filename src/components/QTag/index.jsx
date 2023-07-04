import React from 'react';
import { Tag } from 'antd';
import { history, useLocation } from 'umi';
import Menus from '../QMenu/menus';
import { connect } from 'dva';
export default connect((state) => {})(QTag);
function QTag() {
  const { pathname } = useLocation();

  const items = Menus;
  const deepGetItem = (arr, path) => {
    let nArr = [];
    arr.forEach((v) => {
      if (v.path === path) {
        nArr.push(v);
      }
      if (v.children) {
        let childArr = deepGetItem(v.children, path);
        if (childArr.length) {
          nArr.push(...childArr);
        }
      }
    });
    return nArr;
  };
  const clickFn = (path) => {
    history.push(path);
  };
  return (
    <>
      {Menus.map((v, i) => {
        return (
          <Tag
            onClick={() => clickFn(v.key)}
            color={pathname === v.key ? 'blue' : 'green'}
            key={v.key}
            closable
            onClose={(e) => closeFn(v.key, e, i)}
          >
            {v.label}
          </Tag>
        );
      })}
    </>
  );
}
