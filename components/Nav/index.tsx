import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'
import './style/index.less'
// import { connect } from 'react-redux'
// import { setNavSelectedItemKeyAction } from '../../store/action/action'
// import QueueAnim from 'rc-queue-anim'
// nav的按钮配置
// import { navList } from './script/navConfig'

export const navList = [{
  itemKey: 'home',
  iconType: 'crown',
  buttonVal: '首页',
  url: '/'
}, {
  itemKey: 'list',
  iconType: 'experiment',
  buttonVal: '技术',
  url: '/list'
}, {
  itemKey: 'say',
  iconType: 'instagram',
  buttonVal: '碎碎念',
  url: '/say'
}, {
  itemKey: 'about',
  iconType: 'smile',
  buttonVal: '关于我',
  url: '/about'
}, {
  itemKey: 'friend',
  iconType: 'heart',
  buttonVal: '友人帐',
  url: '/friend'
}, {
  itemKey: 'leave-msg',
  iconType: 'message',
  buttonVal: '留言',
  url: '/leave-msg'
}]

import { Row, Col, Avatar, Menu, Icon, Button } from 'antd'
// const { SubMenu } = Menu;

const Nav = (props: any) => {
  const [sideHidden, setSideHidden] = useState(true)
  // console.log('store', store.getState())
  const routerPush = (url: any, key: any) => {
    // console.log('props.setNavSelectedItemKeyAction', props.setNavSelectedItemKeyAction)
    // props.setNavSelectedItemKeyAction(key)
    setSideHidden(true)
    props.history.push(url)
  }
  // const printSomething = () => {
  //   console.log(props.navSelectedItemKey)
  //   props.setNavSelectedItemKeyAction('你妈的')
  //   console.log(props.navSelectedItemKey)
  // }
  return (
    <nav>
      <Row className="row">
        <Col xs={0} sm={0} md={24} className="col">
          <div className="pc-box">
          {/* <Button onClick={printSomething}>走你</Button> */}
            <Menu mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[props.navSelectedItemKey]}>
              {
                navList.map(ele => {
                  return (
                      <Menu.Item key={ele.itemKey} onClick={() => { routerPush(ele.url, ele.itemKey) }}>
                        <Icon type={ele.iconType} />{ele.buttonVal}
                      </Menu.Item>
                  )
                })
              }
            </Menu>
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} className="col">
          <div className="mobile-box">
            <Button shape="round" onClick={() => { setSideHidden(false) }}>
              <Icon type={true ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Button icon="search" shape="round" />
          </div>
        </Col>
        {/* <QueueAnim
          type={['alpha', 'alpha']}
          ease={['easeOutQuart', 'easeInOutQuart']}> */}
          {
            sideHidden ?
              null :
              [<Col xs={24} sm={24} md={24} className="col" key='side-box'>
                <div className="mobile-side-box" onClick={() => { setSideHidden(true) }}>
                  <div className="mobile-menu-box" onClick={(e) => { e.stopPropagation() }}>
                    <div className="self-box">
                      <img
                        src="https://s2.ax1x.com/2019/11/24/MXMxOK.jpg"
                        alt="隐藏nav背景图"
                        className="self-bg-img" />
                      <div className="self-avator-box">
                        <Avatar size={80} icon="user" src="http://5b0988e595225.cdn.sohucs.com/images/20171231/fb5bab11952b4b7d920b8798c4dc2ec2.jpeg" className="avator-circle" />
                      </div>
                      <div className="self-contact-box">

                        <Row >
                          <Col span={24}>
                            <div className="section-flex-center">
                              <p>你以为我刀枪不入，我以为你百毒不侵</p>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div className="section-flex-center">
                              <Icon type="wechat" className="icon-style icon-green" />
                              <Icon type="weibo" className="icon-style icon-red" />
                              <Icon type="qq" className="icon-style icon-blue" />
                              <Icon type="github" className="icon-style icon-grey" />
                            </div>
                          </Col>
                        </Row>
                      </div>

                    </div>

                    <Menu mode="inline" defaultSelectedKeys={['home']} selectedKeys={[props.navSelectedItemKey]}>
                      {
                        navList.map(ele => {
                          return (
                              <Menu.Item key={ele.itemKey} onClick={() => { routerPush(ele.url, ele.itemKey) }}>
                                <Icon type={ele.iconType} />{ele.buttonVal}
                              </Menu.Item>
                          )
                        })
                      }
                    </Menu>
                    <div className="leave-button-box">
                      <Button shape="round" icon="import" onClick={() => { setSideHidden(true) }} />
                    </div>
                  </div>
                </div>
              </Col>]
          }
        {/* </QueueAnim> */}

      </Row>
    </nav>
  )
}

// export default withRouter(connect(state => {
//   return {
//     navSelectedItemKey: state.navSelectedItemKey
//   }
// }, {
//   setNavSelectedItemKeyAction
// })(Nav))
export default Nav