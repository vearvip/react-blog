import React from 'react';
import Above from '../../components/Above'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// import { connect } from 'react-redux'
// import { setNavSelectedItemKeyAction } from '../../store/action/action'

import './style/index.less'

const Friend = (props: any) => {
  // window.scrollTo(0, 0)
  // const {
  //   navSelectedItemKey,
  //   setNavSelectedItemKeyAction
  // } = props
  // navSelectedItemKey !== 'friend' && setNavSelectedItemKeyAction('friend')
  return (
    <>
      <Nav navSelectedItemKey="friend" />
      <div className="friend">
        <Above imgUrl={'https://s2.ax1x.com/2019/11/27/QC4sXV.jpg'} />
        <div className="friend-main">
          <span role="img" aria-label="施工中" style={{
            color: 'red'
          }}>施工中(友人帐页)🚧</span>
        </div>
      </div>
      <Footer />
    </>
  )
}
// export default connect(state => {
//   return {
//     navSelectedItemKey: state.navSelectedItemKey
//   }
// }, {
//   setNavSelectedItemKeyAction
// })(Friend) 

export default Friend
