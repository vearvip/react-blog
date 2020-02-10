import React from 'react'

import './style/index.less'
import { Head, NextScript } from 'next/document'

import { Row, Col, Carousel, Button, Avatar, Icon } from 'antd'

const imgUrlList = [{
  url: "http://img.zcool.cn/community/019929578109990000012e7e9f003c.jpg",
  key: 'img-1'
}, {
  url: "http://img.zcool.cn/community/011316578db59e0000018c1bda25ee.jpg",
  key: 'img-2'
}, {
  url: "https://s2.ax1x.com/2019/11/24/MODMXF.jpg",
  key: 'img-3'
}]

const Section = (props: any) => {
  let carouselDOM = React.createRef()
  // ;(function (doc, win) {
  //   var docEl = doc.documentElement,
  //     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  //     recalc = function () {
  //       var clientWidth = docEl.clientWidth;
  //       if (!clientWidth) {
  //         return;
  //       }
  //       // if (clientWidth < 576) {
  //       //   docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  //       // }
  //       docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  //     };
  //   if (!doc.addEventListener) {
  //     return;
  //   }
  //   win.addEventListener(resizeEvt, recalc, false);
  //   doc.addEventListener('DOMContentLoaded', recalc, false);
  // }(document, window))
  return (
    <>
    {/* <Head>
      <script>
        
      </script>
    </Head> */}
    <section>
      <div className="me-box">
        <Row className="me-row">
          <Col xs={0} sm={0} md={24} >
            <div className="me">
              <div className="avator-box">
                <Avatar size={120} icon="user" src="http://5b0988e595225.cdn.sohucs.com/images/20171231/fb5bab11952b4b7d920b8798c4dc2ec2.jpeg" className="avator-circle" />
              </div>
              <div className="contact-box">

                <Row >
                  <Col span={24}>
                    <div className="section-flex-center">
                      <p>你以为我刀枪不入，我以为你百毒不侵</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="section-flex-center">
                      <Icon type="left" onClick={() => {
                        // carouselDOM.prev()
                      }} className="icon-style icon-blue"/>
                      <Icon type="wechat" className="icon-style icon-green"/>
                      <Icon type="weibo" className="icon-style icon-red"/>
                      <Icon type="qq" className="icon-style icon-blue"/>
                      <Icon type="github" className="icon-style icon-grey"/>
                      <Icon type="right" onClick={() => {
                        // carouselDOM.next()
                      }} className="icon-style icon-blue"/>
                    </div>
                  </Col>
                </Row>
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
          <Col xs={24} sm={24} md={0} >
            <div className="mobile-wave-img-box">
              <div className="mobile-wave-img-box-item1"></div>
              <div className="mobile-wave-img-box-item2"></div>
            </div>
            <div className="mobile-wave-box-floor"></div>
          </Col>
        </Row>
      </div>
      <div className="carousel-box">
        <Carousel ref={carousel => {
          // carouselDOM = carousel
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
        // carouselDOM.prev()
      }}>Button</Button>
    </section>
    </>
  )
}

export default Section
