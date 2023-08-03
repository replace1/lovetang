import { Button, Checkbox, Form, Input, InputNumber, Radio } from 'antd';
import React, { useState } from 'react';
import './index.less';

function Rest() {
  const onChange = (value) => {
    console.log('changed', value);
  };

  const [brokerage, setBrokerage] = useState(false);

  return (
    <div>
      <div styleName="sales">
        <div styleName="sales_item">
          <Form.Item label="虚拟销量">
            <InputNumber min={0} defaultValue={0} onChange={onChange} />
          </Form.Item>
        </div>
        <div styleName="sales_item">
          <Form.Item label="积分">
            <InputNumber min={0} defaultValue={0} onChange={onChange} />
          </Form.Item>
        </div>
        <div styleName="sales_item">
          <Form.Item label="排序">
            <InputNumber min={0} defaultValue={0} onChange={onChange} />
          </Form.Item>
        </div>
      </div>
      <Form.Item label="单独设置">
        <Checkbox
          onChange={(e) => {
            setBrokerage(e.target.checked);
          }}
        >
          佣金设置（数字即返佣金额）
        </Checkbox>
      </Form.Item>
      {brokerage ? (
        <div styleName="batch">
          <Form.Item label="批量设置">
            一级返佣：
            <InputNumber
              min={0}
              defaultValue={0}
              placeholder="请输入一级返佣"
            />
            二级返佣：
            <InputNumber
              min={0}
              defaultValue={0}
              placeholder="请输入儿级返佣"
            />
            <Button type="primary">批量设置</Button>
          </Form.Item>
        </div>
      ) : (
        ''
      )}
      <div styleName="multiple">
        <div styleName="mult_item">
          <Form.Item label="商品状态">
            <Radio.Group>
              <Radio value="上架"> 上架 </Radio>
              <Radio value="下架"> 下架 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div styleName="mult_item">
          <Form.Item label="热卖单品">
            <Radio.Group>
              <Radio value="开启"> 开启 </Radio>
              <Radio value="关闭"> 关闭 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div styleName="mult_item">
          <Form.Item label="促销单品">
            <Radio.Group>
              <Radio value="开启"> 开启 </Radio>
              <Radio value="关闭"> 关闭 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div styleName="mult_item">
          <Form.Item label="精品推荐">
            <Radio.Group>
              <Radio value="开启"> 开启 </Radio>
              <Radio value="关闭"> 关闭 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div styleName="mult_item">
          <Form.Item label="首发新品">
            <Radio.Group>
              <Radio value="开启"> 开启 </Radio>
              <Radio value="关闭"> 关闭 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div styleName="mult_item">
          <Form.Item label="优品推荐">
            <Radio.Group>
              <Radio value="开启"> 开启 </Radio>
              <Radio value="关闭"> 关闭 </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
      <Form.Item label="活动优先级"></Form.Item>
      <Form.Item label="选择优先推荐商品"></Form.Item>
      <Form.Item label="赠送优惠券">
        <Button type="primary">添加优惠券</Button>
      </Form.Item>
      <Form.Item label="商品口令">
        <Input placeholder="请输入商品口令" />
      </Form.Item>
    </div>
  );
}

export default Rest;
