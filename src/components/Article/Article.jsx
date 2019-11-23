import React from 'react'

import './style/Article.less'

import { Button, Row, Col, Icon, Avatar } from 'antd'

const Article = (props) => {
  return (
    <article>
      <div className="article-list">
        <div className="blog-list-box">
          <div className="article-box">
            <Row>
              <Col span={14} className="leftimg-left-box">
                <img
                  draggable={false}
                  src="https://dwz.cn/aJl2GmdO"
                  alt="博客预览图" />
              </Col>
              <Col span={10} className="leftimg-right-box">
                <Col span={24} className="leftimg-right-item">
                  <Icon type="clock-circle" />
                  &nbsp;2019-11-23
                </Col>
                <Col span={24} className="leftimg-right-item">
                  <h1>博客标题</h1>
                </Col>
                <Col span={24} className="leftimg-right-item">
                  <Icon type="folder" />
                  &nbsp;技术
                </Col>
                <Col span={24} className="leftimg-right-item">
                  Nest.js是Node.js版本的Spring
                </Col>
                <Col span={24} className="leftimg-right-item-fat">
                  <Button type="primary" shape="round" >
                    Read
                  </Button>
                </Col>
              </Col>
            </Row>
          </div>
          <div className="article-box">
            <Row>
              <Col span={10} className="rightimg-right-box">
                <Col span={24} className="rightimg-right-item">
                  <Icon type="clock-circle" />
                  &nbsp;2019-11-23
                </Col>
                <Col span={24} className="rightimg-right-item">
                  <h1>博客标题</h1>
                </Col>
                <Col span={24} className="rightimg-right-item">
                  <Icon type="folder" />
                  &nbsp;技术
                </Col>
                <Col span={24} className="rightimg-right-item">
                  Nest.js是Node.js版本的Spring
                </Col>
                <Col span={24} className="rightimg-right-item-fat">
                  <Button type="primary" shape="round" >
                    Read
                  </Button>
                </Col>
              </Col>
              <Col span={14} className="rightimg-left-box">
                <img
                  draggable={false}
                  src="https://dwz.cn/5PBrgLgX"
                  alt="博客预览图" />
              </Col>
            </Row>
          </div>
          <div className="say-box">
            <div className="say-left-box">
              <Avatar src="http://b-ssl.duitang.com/uploads/item/201707/27/20170727215047_VAzdC.thumb.700_0.jpeg" size={50}></Avatar>
            </div>
            <div className="say-right-box">
              蚂蚁的企业级产品是一个庞大且复杂的体系。
            </div>

          </div>
        </div>
        <div className="more-blog-box">
          <Button type="primary" size={'large'} shape="round">
            More
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Article
