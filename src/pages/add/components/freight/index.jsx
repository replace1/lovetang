import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';

function Freight(props) {

  useEffect(() => {
    setIsShow(props.checkShow);
  }, [props.checkShow]);

  const [isShow, setIsShow] = useState(false);

  const handleOk = () => {
    setIsShow(false);
  };
  const handleCancel = () => {
    setIsShow(false);
  };
  console.log();

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Freight;
