import { Form } from 'antd';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

function Details() {
  const [value, setValue] = useState('');
  const handleChageValue = (value) => {
    console.log('富文本的值', value);
    setValue(value);
  };

  return (
    <div>
      <Form.Item label="商品详情">
        <div className="quill-editor-wrap">
          <ReactQuill
            theme="snow"
            value={value}
            style={{ height: 300 }}
            onChange={handleChageValue}
          />
        </div>
      </Form.Item>
    </div>
  );
}

export default Details;
