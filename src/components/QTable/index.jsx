import React, { useState } from 'react';
import { Button, Table, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './style.less';

export default function Qtable(props) {
  //table表格数据
  const {
    data = [], // 表格数据
    columns = [], // 表头
    rowKey = 'id', // id
    style = {}, // 样式
    className = '', // 样式名
    pagination = {}, // 分页
    scroll = {}, // 滚动
    ...tabs // 其他方法或数据
  } = props;

  return (
    <ConfigProvider locale={zhCN}>
      <Table
        style={style}
        className={className}
        dataSource={data}
        columns={columns}
        rowKey={rowKey}
        pagination={pagination}
        scroll={scroll}
        {...tabs}
      />
    </ConfigProvider>
  );
}
