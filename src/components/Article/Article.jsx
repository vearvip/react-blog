import React from 'react'

import './style/Article.less'

import { Button, Row, Col, Icon, Avatar } from 'antd'

const Article = (props) => {
  return (
    <article>
      <div className="article-list">
        <div className="blog-list-box">
          <Row>
            <Col xs={0} sm={0} md={24}>
              <div className="article-box">
                <Row>
                  <Col span={14} className="leftimg-left-box">
                    <img
                      draggable={false}
                      src="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/09/0F/ChMkJ1jskPSIG6wcAAUeJ8BjMTgAAbj8wPmhG4ABR4_636.jpg"
                      alt="博客预览图" />
                  </Col>
                  <Col span={10} className="leftimg-right-box">
                    <Col span={24} className="leftimg-right-item">
                      <Icon type="clock-circle" />
                      &nbsp;2019-11-23
                </Col>
                    <Col span={24} className="leftimg-right-item">
                      <span className="pc-title">博客标题</span>
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
                      <span className="pc-title">博客标题</span>
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
                      src="http://pic1.win4000.com/wallpaper/2/583556cec175b.jpg"
                      alt="博客预览图" />
                  </Col>

                </Row>
              </div>
            </Col>
            <Col xs={24} sm={24} md={0}>
              <div className="mobile-article-box">
                <Row>
                  <Col span={24} className="mobile-top-box">
                      <img
                        draggable={false}
                        src="http://pic.vjshi.com/2018-08-18/44bb97f490295451d3553139dea3ffdd/00004.jpg?x-oss-process=style/watermark"
                        alt="博客预览图" />
                  </Col>
                  <Col span={24} className="mobile-bottom-box">
                    <div className="mobile-bottom-left-box">
                      <Row>
                        <Col span={24} className="mobile-bottom-left-item">
                          <Icon type="clock-circle" />
                          &nbsp;2019-11-23
                        </Col>
                        <Col span={24} className="mobile-bottom-left-item">
                          <span className="mobile-title">博客标题</span>
                        </Col>
                        <Col span={24} className="mobile-bottom-left-item">
                          <Icon type="folder" />
                          &nbsp;技术
                        </Col>
                        <Col span={24}>
                          <div className="mobile-bottom-left-item-introduce">
                            Nest.js是Node.js版本的Spring，哈哈哈哈哈哈哈
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="mobile-bottom-right-box">
                      <Button type="primary" shape="round" size="default">
                        Read
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="say-box">
            <div className="say-left-box">
              <Avatar src="http://5b0988e595225.cdn.sohucs.com/images/20171231/fb5bab11952b4b7d920b8798c4dc2ec2.jpeg" size={50}></Avatar>
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
