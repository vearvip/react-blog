import React from 'react';
// import { Link } from 'react-router-dom'

// import {connect} from 'react-redux'
// import {setNavSelectedItemKeyAction} from '../../store/action/action'
import './index.less'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const F0F = () => {
  // window.scrollTo(0, 0)
  // const {
  //   navSelectedItemKey,
  //   setNavSelectedItemKeyAction
  // } = props
  // navSelectedItemKey !== 'f0f' && setNavSelectedItemKeyAction('f0f')
  return (
    // <>
    //   <Nav />
      <div className="f0f">
        <div className="main-404-box">
          <div className="top-404-box">
            <div className="title-404">404</div>
            <div className="gif-404" />
          </div>
          <div className="bottom-404-box">
            走错路啦，快点
          {/* <Link to="/"> */}
            肥家
          {/* </Link> */}
          </div>
        </div>
      </div>
    //   <Footer />
    // </>
  )
}

// export default connect(state => {
//   return {
//     navSelectedItemKey: state.navSelectedItemKey
//   }
// }, {
//   setNavSelectedItemKeyAction
// })(F0F) 

export default F0F