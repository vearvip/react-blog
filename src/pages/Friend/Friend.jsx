import React from 'react';
import Above from '../../components/Above/Above'

import { connect } from 'react-redux'
import { setNavSelectedItemKeyAction } from '../../store/action/action'

import './style/Friend.less'

const Friend = props => {
  window.scrollTo(0, 0)
  const {
    navSelectedItemKey,
    setNavSelectedItemKeyAction
  } = props
  navSelectedItemKey !== 'friend' && setNavSelectedItemKeyAction('friend')
  return (
    <div className="friend">
      <Above imgUrl={'https://s2.ax1x.com/2019/11/27/QC4sXV.jpg'} />
      <div className="friend-main">
        <span role="img" aria-label="施工中" style={{
          color: 'red'
        }}>施工中🚧</span>
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
})(Friend) 