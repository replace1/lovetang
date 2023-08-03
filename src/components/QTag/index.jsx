import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Space, Tag } from 'antd';
import Menus from '../QMenu/menus';

export default function QTag(props) {
  const { location } = history;
  const [data, setData] = useState([]);

  console.log(location.pathname);

  useEffect(() => {
    let res = deepTag(Menus, location.pathname);
    data.push(...res);
  }, [location.pathname, data]);

  const deepTag = (arr, path) => {
    let nArr = [];
    arr.forEach((v) => {
      if (v.path === path) {
        nArr.push(v);
      }
      if (v.children) {
        let children = deepTag(v.children, path);
        if (children.length) {
          nArr.push(...children);
        }
      }
    });
    return nArr;
  };

  const toPath = (item) => {
    history.push(item.path);
  };

  return (
    <div>
      <Space>
        {data.map((v, i) => {
          return (
            <Tag onClick={() => toPath(v)} key={i}>
              {v.title}
            </Tag>
          );
        })}
      </Space>
    </div>
  );
}
