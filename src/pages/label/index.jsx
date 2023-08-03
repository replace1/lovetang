import React, { useEffect, useState } from 'react';
import QTable from '@@@/QTable';
import Qmodal from '@@@/Qmodal';
import Qfrom from './components/Qfrom';
import { connect } from 'dva';
import { Button, Tabs, message } from 'antd';

export default connect(({ label, loading }) => {
  return {
    // 列表数据
    getUserLabelList: label.getUserLabelList,
    count: label.labelCount,
    // 标签
    getlabelCate: label.getlabelCate,
    loading: !!loading.effects.getUserLabel,
  };
})(label);
function label(props) {
  const { dispatch, getUserLabelList, count, loading, getlabelCate } = props;
  const [modal, setModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [id, setId] = useState();
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  // 列表数据
  const getLabel = async (page, opt) => {
    await dispatch({
      type: 'label/getUserLabel',
      payload: {
        page,
        limit: 15,
        label_cate: opt,
      },
    });
  };

  // 标签
  const getlabelCateList = async () => {
    await dispatch({
      type: 'label/getLabelCate',
    });
  };

  useEffect(() => {
    getLabel(1);
    getlabelCateList();
  }, []);
  // 分页
  const onChange = (page) => {
    getLabel(page);
  };

  const onChange1 = (opt) => {
    getLabel(_, opt);
  };
  // 删除
  const ondel = (id) => {
    setId(id);
    setModal(true);
  };

  // 取消二次弹框
  const onCancel = () => {
    message.warning({
      content: '取消成功',
      duration: 0.3,
    });
    setModal(false);
  };
  // 二次弹框确认删除
  const onOk = async () => {
    await dispatch({
      type: 'label/getLabelDel',
      payload: id,
    });

    await getLabel(1);
    setModal(false);
  };

  const columns = [
    { title: 'ID', align: 'center', dataIndex: 'id' },
    { title: '分类名称', align: 'center', dataIndex: 'cate_name' },
    { title: '标签名称', align: 'center', dataIndex: 'label_name' },
    {
      title: '操作',
      align: 'center',
      width: 300,

      render: (dt) => {
        const { id } = dt;
        return (
          <>
            <Button type="link">编辑 </Button> |
            <Button type="link" onClick={() => ondel(id)}>
              删除{' '}
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Qmodal
        loading={loading}
        status={modal}
        setStatus={setModal}
        title="删除分组"
        title1="确定要删除分组吗？"
        title2="删除分组后将无法恢复，请谨慎操作！"
        onCancel={onCancel}
        onOk={onOk}
      />

      <Tabs
        tabPosition={tabPosition}
        onChange={onChange1}
        items={getlabelCate?.map((v) => {
          return {
            label: v.name,
            key: v.id,
            children: (
              <>
                <Qfrom
                  loading={loading}
                  groupList={() => getLabel()}
                  onrevise={() => onrevise(id)}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  isModalOpen1={isModalOpen1}
                  setIsModalOpen1={setIsModalOpen1}
                />
                <QTable
                  loading={loading}
                  columns={columns}
                  data={getUserLabelList}
                  pagination={{
                    total: count,
                    pageSize: 15,
                    onChange,
                  }}
                />
              </>
            ),
          };
        })}
      />
    </>
  );
}
