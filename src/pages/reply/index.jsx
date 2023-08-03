import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Image, message } from 'antd';
import './styles.less';
import useColumn from './colums';
import Qsearch from './components/search';
import { QTable, Qmodal } from '@@@';
export default connect((state) => {
  return {
    replys: state.reply.replys,
    count: state.reply.count,
    loading:
      state.loading.effects[('reply/fetchReplyDel', 'reply/fetchReplyList')],
  };
})(reply);
function reply(props) {
  const { dispatch, replys, count, loading } = props;
  const [status, setStatus] = useState(false);
  const [del, setDel] = useState({});
  const [page, setPage] = useState(1);
  const [status2, setStatus2] = useState(false);

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

  const onCancel = () => {
    setStatus(false);
    message.error('取消删除');
  };

  const onOk = () => {
    dispatch({ type: 'reply/fetchReplyDel', payload: del.id });
    setStatus(false);
    message.info('删除成功');
  };

  const onClick = () => {
    console.log(123);
  };

  const onOk2 = () => {
    console.log(123);
  };

  const onCancel2 = () => {
    console.log(123);
  };

  return (
    <div styleName="reply-box" onClick={onClick}>
      <Qsearch />
      <Button styleName="reply-add" type="primary">
        + 添加虚拟评论
      </Button>
      <QTable
        loading={loading}
        dataSource={replys}
        columns={useColumn({ dispatch, setStatus, setDel, setStatus2 })}
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

      <Qmodal
        status={status}
        loading={loading}
        title="删除分组"
        title1="确定要删除评论吗？"
        title2="删除评论后将无法恢复，请谨慎操作！"
        onCancel={onCancel}
        onOk={onOk}
      />
      <Qmodal
        status={status2}
        loading={loading}
        title="回复内容"
        onCancel={onCancel2}
        onOk={onOk2}
      ></Qmodal>
    </div>
  );
}
