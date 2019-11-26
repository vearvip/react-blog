import React from 'react';
import Above from '../../components/Above/Above'

import {connect} from 'react-redux'
import {setNavSelectedItemKeyAction} from '../../store/action/action'

import './style/Friend.less'
const Friend = props => {
  window.scrollTo(0, 0)
  props.navSelectedItemKey !== 'friend' && props.setNavSelectedItemKeyAction('friend')
  return (
    <div className="friend">
    <Above imgUrl={'https://s2.ax1x.com/2019/11/26/Mzb75Q.jpg'} />
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <h1>友人帐</h1>
    <span role="img" aria-label="施工中" style={{
      color: 'red'
    }}>施工中🚧</span>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
      <h1>友人帐</h1>
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