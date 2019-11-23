import React, { useState } from 'react'
import './style/Nav.less'

import QueueAnim from 'rc-queue-anim'

import { Row, Col, Menu, Icon, Button } from 'antd'
const { SubMenu } = Menu;


const navList = [{
  itemKey: 'crown',
  iconType: 'crown',
  buttonVal: '首页',
  url: '/'
}, {
  itemKey: 'technology',
  iconType: 'experiment',
  buttonVal: '技术',
  itemArr: [{
    itemKey: 'react',
    buttonVal: 'react',
    iconType: 'code-sandbox'
  }, {
    itemKey: 'vue',
    buttonVal: 'vue',
    iconType: 'code-sandbox'
  }, {
    itemKey: 'js',
    buttonVal: 'js',
    iconType: 'code-sandbox'
  }, {
    itemKey: 'css',
    buttonVal: 'css',
    iconType: 'code-sandbox'
  }, {
    itemKey: 'node',
    buttonVal: 'node',
    iconType: 'code-sandbox'
  }]
}, {
  itemKey: 'life',
  iconType: 'instagram',
  buttonVal: '生活',
  url: '/life'
}, {
  itemKey: 'say',
  iconType: 'compass',
  buttonVal: '碎碎念',
  url: '/say'
}, {
  itemKey: 'about',
  iconType: 'message',
  buttonVal: '关于我',
  url: '/about'
}, {
  itemKey: 'friend',
  iconType: 'heart',
  buttonVal: '友人帐',
  url: '/friend'
}]

const Nav = (props) => {
  const [sideHidden, setSideHidden] = useState(true)
  return (
    <nav>
      <Row className="row">
        <Col xs={0} sm={0} md={24} className="col">
          <div className="pc-box">
            <Menu mode="horizontal" defaultSelectedKeys={props.defaultSelectedKeys}>
              {
                navList.map(ele => {
                  return (
                    'itemArr' in ele <= 0 ?
                      <Menu.Item key={ele.itemKey}>
                        <a href={ele.url}>
                          <Icon type={ele.iconType} />{ele.buttonVal}
                        </a>
                        {/* <Link href={ele.url}>
                      <a>
                        <Icon type={ele.iconType} />{ele.buttonVal}
                      </a>
                    </Link> */}
                      </Menu.Item> :
                      <SubMenu
                        title={
                          <span ><Icon type={ele.iconType} />{ele.buttonVal}</span>
                        }
                        key={ele.itemKey}
                      >
                        <Menu.ItemGroup title="技术">
                          {
                            ele.itemArr.map(item => {
                              return (
                                <Menu.Item key={item.itemKey}><Icon type={item.iconType} />{item.buttonVal}</Menu.Item>
                              )
                            })
                          }
                        </Menu.ItemGroup>
                      </SubMenu>
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
        <QueueAnim 
          type={['alpha', 'alpha']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {
            sideHidden ?
              null :
              [<Col xs={24} sm={24} md={24} className="col" key='side-box'>
                <div className="mobile-side-box" onClick={() => { setSideHidden(true) }}>
                  <div className="mobile-menu-box" onClick={(e) => { e.stopPropagation() }}>
                    <div className="self-box"></div>

                    <Menu mode="inline" defaultSelectedKeys={props.defaultSelectedKeys}>
                      {
                        navList.map(ele => {
                          return (
                            'itemArr' in ele <= 0 ?
                              <Menu.Item key={ele.itemKey}>
                                <a href={ele.url}>
                                  <Icon type={ele.iconType} />{ele.buttonVal}
                                </a>
                                {/* <Link href={ele.url}>
                      <a>
                        <Icon type={ele.iconType} />{ele.buttonVal}
                      </a>
                    </Link> */}
                              </Menu.Item> :
                              <SubMenu
                                title={
                                  <span ><Icon type={ele.iconType} />{ele.buttonVal}</span>
                                }
                                key={ele.itemKey}
                              >
                                <Menu.ItemGroup title="技术">
                                  {
                                    ele.itemArr.map(item => {
                                      return (
                                        <Menu.Item key={item.itemKey}><Icon type={item.iconType} />{item.buttonVal}</Menu.Item>
                                      )
                                    })
                                  }
                                </Menu.ItemGroup>
                              </SubMenu>
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
        </QueueAnim>

      </Row>
    </nav>
  )
}

export default Nav
