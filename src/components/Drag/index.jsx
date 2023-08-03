import React, { Component, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import  './styles.less'
// export default function Login (props) {
//   const onClick = () => {
//     console.log(1111);
//   }

//   return (
//     // overflow: hidden;
//     <div onClick={onClick}>
//       <div>数据</div>
//       {/* createPortal(任何可渲染的 React 子元素,  DOM 元素) */}
//       {ReactDOM.createPortal(<div>Modal</div>, document.body)}
//     </div>
//   )
// }



// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));




const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   display: 'flex',
//   width: 30,
//   overflow: 'auto',
// });


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    }
  }

  reorder = (list, startIndex, endIndex) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  }

  // 拖拽结束
  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = this.reorder(
      this.state.items, // 所有的数据
      result.source.index, // 拖拽前的下标 (index 拖拽下标)
      result.destination.index // 拖拽之后的位置下标 (index 拖拽下标)
    );

    this.setState({
      items
    });
  }

  render() {
    return (
      // 必须写 就是context写于最外侧包裹需要拖拽的组件
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* 包裹可放置组件 */}
        <Droppable droppableId="droppable"  direction="horizontal">
          {(provided, snapshot) => {
            return (
              <div
                /*
                ** 写于<Droppable/>标签中的funtion的框架
                ** - provided参数：提供内部标签所需的props【套路记住即可】
                ** 		1、innerRef:获取ref funtion组件是ref，class组件是innerRef
                **    2、droppableProps: 提供能够放置的props，在function的根结点展开即可{...provided.droppableProps}
                **    3、placeholder: 占位符，放置在function根节点内部的最下面
                ** - snapshot参数：此为快照（让我好容易想到mobx里的快照不知道为什么，但不一样，详见下面解析）
                */
                {...provided.droppableProps} // 就这么写
                ref={provided.innerRef} // 就这么写
                styleName="box"
                // style={getListStyle(snapshot.isDraggingOver)} // 改样式
              >
                {
                  this.state.items.map((item, index) => (
                    // index拖拽下标: 拖拽理论上总归是在列表中上下移动位置 拖拽位置不同 排列下标也不同 index就是为了排序的
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps} // 就这么写
                          {...provided.dragHandleProps} // 就这么写
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))
                }
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
    );
  }
}