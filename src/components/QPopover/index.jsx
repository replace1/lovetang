import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Popover, Dropdown, Space } from 'antd';

// 气泡组件
function QPopover(props) {
  const {
    popoverFn = () => {}, //函数
    items = [], //数组
    title = '更多',
    icon = <DownOutlined />,
    color = '#4E86FC', //字体颜色
    ...item
  } = props;

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement="top"
        >
          <Button type="link" style={{ color }}>
            {title}
            {icon}
          </Button>
        </Dropdown>
      </Space>
    </Space>
  );
}

export default QPopover;
