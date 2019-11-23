import React from 'react'

import './style/Section.less'

import { Row, Col, Carousel, Button, Avatar } from 'antd'

const imgUrlList = [{
  url: "http://img.zcool.cn/community/019929578109990000012e7e9f003c.jpg",
  key: 'img-1'
}, {
  url: "http://i0.hdslb.com/bfs/article/09f1a68f7d0c89af78cc75252cd29f96c1b52618.jpg",
  key: 'img-2'
}, {
  url: "http://img.zcool.cn/community/038e01c56fc7b6432f875a9443eaa25.jpg",
  key: 'img-3'
}]

const Section = (props) => {
  let carouselDOM = React.createRef()
  return (
    <section>
      <div className="me-box">
        <Row className="me-row">
          <Col xs={0} sm={0} md={24} >
            <div className="me">
              <div className="avator-box">
                <Avatar size="large" icon="user" />
              </div>
              <div className="contact-box">
                <Button onClick={() => {
                  carouselDOM.prev()
                }}>Button</Button>
                <Button onClick={() => {
                  carouselDOM.next()
                }}>Button</Button>
              </div>

            </div>
          </Col>
        </Row>
      </div>
      <div className="wave-box">
        <Row className="wave-row">
          <Col xs={0} sm={0} md={24} >
            <div className="wave-img-box">
              <div className="wave-img-box-item1"></div>
              <div className="wave-img-box-item2"></div>
            </div>
            <div className="wave-box-floor"></div>
          </Col>
        </Row>
      </div>
      <div className="carousel-box">
        <Carousel ref={carousel => {
          carouselDOM = carousel
        }} effect="fade" dots={false}>
          {
            imgUrlList.map(ele => {
              return (
                <img src={ele.url} alt="轮播图" key={ele.key} />
              )
            })
          }
        </Carousel>
      </div>
      <Button onClick={() => {
        carouselDOM.prev()
      }}>Button</Button>
    </section>
  )
}

export default Section
