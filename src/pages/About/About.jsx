import React from 'react';
import Above from '../../components/Above/Above'

import {connect} from 'react-redux'
import {setNavSelectedItemKeyAction} from '../../store/action/action'

import './style/About.less'

const About = props => {
  window.scrollTo(0, 0)
  props.navSelectedItemKey !== 'about' && props.setNavSelectedItemKeyAction('about')
  return (
    <div className="about">
    <Above imgUrl={'https://s2.ax1x.com/2019/11/26/Mzb75Q.jpg'} />
      <div className="about-main">
        <p>about</p>
      <span role="img" aria-label="施工中" style={{
        color: 'red'
      }}>施工中🚧</span>
      <br/>
      <p>联系方式：vear.vip@qq.com</p>
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
})(About)