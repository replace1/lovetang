import React from 'react';
import ReactDom from 'react-dom';

export default function Login(props) {
  const onClick = () => {
    console.log(1111);
  };

  return (
    <div onClick={onClick}>
      <div>数据</div>
      {/* createPortal(任何可渲染的 React，子元素 DOM元素 ) */}
      {ReactDom.createPortal(<div>Modal</div>, document.body)}
    </div>
  );
}


