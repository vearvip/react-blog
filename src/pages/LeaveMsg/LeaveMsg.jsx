import React from 'react';
import Above from '../../components/Above/Above'

import { connect } from 'react-redux'
import { setNavSelectedItemKeyAction } from '../../store/action/action'

import './style/LeaveMsg.less'

const LeaveMsg = props => {
  window.scrollTo(0, 0)
  const {
    navSelectedItemKey,
    setNavSelectedItemKeyAction
  } = props
  navSelectedItemKey !== 'leave-msg' && setNavSelectedItemKeyAction('leave-msg')
  return (
    <div className="leave-msg">
      <Above imgUrl={'https://s2.ax1x.com/2019/11/27/QC4sXV.jpg'} />
      <div className="leave-msg-main">
        <span role="img" aria-label="施工中" style={{
          color: 'red'
        }}>施工中(留言页)🚧</span>
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
})(LeaveMsg) 