import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Image } from 'antd';
import './styles.less';
import columns from './colums';
import Qsearch from './components/search';
import { QTable } from '@@@';
export default connect((state) => {
  return {
    replys: state.reply.replys,
    count: state.reply.count,
    loading: state.loading.effects['reply/fetchReplyList'],
  };
})(reply);
function reply(props) {
  const { dispatch, replys, count, loading } = props;

  const [page, setPage] = useState(1);

  const reply = (page) => {
    dispatch({
      type: 'reply/fetchReplyList',
      payload: {
        page,
        limit: 5,
        key: '',
        order: '',
        is_reply: '',
        data: '',
        store_name: '',
        account: '',
        product_id: 0,
      },
    });
  };

  useEffect(() => {
    reply(page);
  }, []);

  const showTotal = (replyCount) => `共 ${replyCount} 条`;

  const onPage = (page) => {
    reply(page);
    setPage(page);
  };

  return (
    <div styleName="reply-box">
      <Qsearch />
      <Button styleName="reply-add" type="primary">
        + 添加虚拟评论
      </Button>
      <QTable
        loading={loading}
        dataSource={replys}
        columns={columns}
        rowKey="id"
        pagination={{
          current: page,
          total: count,
          pageSize: 5,
          showTotal: showTotal,
          onChange: onPage,
          showQuickJumper: true,
        }}
        scroll={{
          x: 1000,
        }}
      />
    </div>
  );
}
