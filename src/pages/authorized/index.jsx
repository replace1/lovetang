import React, { useEffect } from 'react'
import { Redirect, getDvaApp } from 'umi'
import { connect } from 'dva'

window.g_app = getDvaApp()._store // 全局 store

export default connect(({ index }) => ({
  
}))(Authorized)
function Authorized (props) {
  const xxx = ['/search', '/date']

  // if (!xxx.includes(props.location.pathname)) {
  //   return <Redirect to="/user/swiper" />
  // }
  return props.children
  // if (localStorage.getItem('token')) {
  //   return props.children

  // } else {
  //   return <Redirect to="/user/home" />
  // }
}
