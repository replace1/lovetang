import { Button, Image } from 'antd';
// import { connect } from 'dva';

// export default connect((state) => {
//   return {};
// })(columns);
const columns = [
  {
    title: '评论ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '商品信息',
    width: 100,
    render: (v) => (
      <>
        <Image
          src={v.image}
          width={50}
          height={50}
          fallback="http://www.lovetang.top/admin/img/no.7de91001.png"
        />
      </>
    ),
  },
  {
    title: '用户名称',
    width: 100,
    dataIndex: 'nickname',
  },
  {
    title: '评分',
    width: 100,
    dataIndex: 'score',
  },
  {
    title: '评价内容',
    width: 150,
    render: (v) => (
      <>
        <div>{v.comment}</div>
        {v.pics.map((val, index) => (
          <Image src={val} key={index} width={40} height={40} />
        ))}
      </>
    ),
  },
  {
    title: '回复内容',
    width: 100,
    dataIndex: 'merchant_reply_content',
  },
  {
    title: '评价时间',
    width: 120,
    dataIndex: 'add_time',
  },
  {
    title: '操作',
    width: 200,
    align: 'center',
    fixed: 'right',
    render: (_, item) => (
      <>
        <Button type="link">回复</Button>
        <Button
          type="link"
          onClick={() => {
            console.log(item);
          }}
        >
          删除
        </Button>
      </>
    ),
  },
];
export default columns;
