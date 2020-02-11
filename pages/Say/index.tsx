import React from 'react';
import Above from '../../components/Above'
import './style/index.less'
import { Avatar } from 'antd';

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// import {connect} from 'react-redux'
// import {setNavSelectedItemKeyAction,getTestListAction,xhrErrorNotify} from '../../store/action/action'

const sayList = [{
  content: '蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。蚂蚁的企业级产品是一个庞大且复杂的体系。'
}, {
  content: '蚂蚁的企业级产品是一个庞大且复杂的体系。'
}, {
  content: '蚂蚁的企业级产品是一个庞大且复杂的体系。'
}, {
  content: '蚂蚁的企业级产品是一个庞大且复杂的体系。'
}]
const Say = (props: any) => {
  // window.scrollTo(0, 0)
  // const {
  //   navSelectedItemKey,
  //   setNavSelectedItemKeyAction
  // } = props
  // navSelectedItemKey !== 'say' && setNavSelectedItemKeyAction('say')
  // const retTest = async () => {
  //   const aaaa = await WgetTestListAction()
  //   console.log('aaaa', aaaa)
  // }
  return (
    <>
      <Nav navSelectedItemKey="say" />
      <div className="say">
        <Above imgUrl={'https://s2.ax1x.com/2019/11/26/Mzb75Q.jpg'} />
        {/* <Button onClick={retTest}>retTest</Button> */}
        <div className="say-main">
          {
            sayList.map((ele, index) => {
              return (
                <div className="say-item-box" key={index}>
                  <div className="say-item-left-box">
                    <Avatar src="http://5b0988e595225.cdn.sohucs.com/images/20171231/fb5bab11952b4b7d920b8798c4dc2ec2.jpeg" size={50}></Avatar>
                  </div>
                  <div className="say-item-right-box">
                    {ele.content}
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
// export default connect(state => {
//   return {
//     navSelectedItemKey: state.navSelectedItemKey
//   }
// }, {
//   setNavSelectedItemKeyAction,getTestListAction,xhrErrorNotify
// })(Say)  

export default Say