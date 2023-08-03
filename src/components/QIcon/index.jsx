import React from 'react';
import cs from 'classnames';
import { createFromIconfontCN } from '@ant-design/icons';
import './styles.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4151426_147pe649s9.js',
});

export default function QIcon(props) {
  const {
    color = '#000',
    fontSize = '14px',
    type = 'icon-company',
    style = {},
    className = '',
    onClick = () => {},
    ...item
  } = props;

  return (
    <div className={cs('componets-qicon', { [className]: className })}>
      <IconFont
        style={{ ...style, color, fontSize }}
        type={type}
        onClick={onClick}
        {...item}
      />
    </div>
  );
}
