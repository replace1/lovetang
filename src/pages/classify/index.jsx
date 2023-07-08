import React, { useEffect, useState } from 'react';
import './style.css';
import { history } from 'umi';
import { connect } from 'dva';
import { Button, Select, Input, Form } from 'antd';

import Seek from './componens/seek'; //表单的组件
// import Tabel from './componens/tabel'; //表单的组件
import Tab from './componens/tab';

export default connect((state) => {
  return {
    data: state.classify.data,
  };
})(classify);
function classify(props) {
  const { dispatch, data } = props;

  //获取表格数据
  useEffect(() => {
    dispatch({
      type: 'classify/fetchLogin',
      payload: {
        pid: '',
        is_show: '',
        page: 1,
        cate_name: '',
        limit: 15,
      },
    });
  }, []);

  return (
    <div styleName="classify">
      <div styleName="centre">
        <div styleName="centre_cen">
          <div styleName="centre_cen_manager">
            <div styleName="centre_page_manager">
              <span>商品分类</span>
            </div>
          </div>
          <div styleName="centre_cen_header">
            <Seek />
          </div>
          <div styleName="cenheader">
            <Tab />
          </div>
        </div>
      </div>
      <div styleName="bottom">
        <div styleName="bottom_first">
          <span>官网</span>
          <span>社区</span>
          <span>文档</span>
        </div>
        <div styleName="bottom_second">
          <div>
            Copyright © 2021 | 西安众邦网络科技有限公司 | CRMEB-KY v4.3.0
          </div>
        </div>
      </div>
    </div>
  );
}
