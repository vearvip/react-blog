import React from 'react';
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {setNavSelectedItemKeyAction} from '../../store/action/action'
import './style/404.less'

const F0F = props => {
  window.scrollTo(0, 0)
  props.navSelectedItemKey !== 'f0f' && props.setNavSelectedItemKeyAction('f0f')
  return (
    <div className="f0f">
      <div className="main-404-box">
        <div className="top-404-box">
          <div className="title-404">404</div>
          <div className="gif-404" />
        </div>
        <div className="bottom-404-box">
          走错路啦，快点
          <Link to="/">
            肥家
          </Link>
        </div>
      </div>
    </div>
  )
}

export default connect(state => {
  return {
    navSelectedItemKey: state.navSelectedItemKey
  }
}, {
  setNavSelectedItemKeyAction
})(F0F) 