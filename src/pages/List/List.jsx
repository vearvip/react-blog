import React from 'react';
import './style/List.less'
import { Row, Col, Icon, Pagination } from 'antd';

import Above from '../../components/Above/Above'
const blogList = [{
  imgUrl: 'https://s2.ax1x.com/2019/11/24/MODMXF.jpg'
},{
  imgUrl: 'https://s2.ax1x.com/2019/11/24/MXQ8lq.png'
},{
  imgUrl: 'https://s2.ax1x.com/2019/11/24/MXMxOK.jpg'
},{
  imgUrl: 'https://s2.ax1x.com/2019/11/24/MXQoct.jpg'
},{
  imgUrl: 'https://s2.ax1x.com/2019/11/24/MXQXNQ.jpg'
}]

const List = props => {
  window.scrollTo(0, 0)
  return (
    <div className="list">
      <Row>
        <Col xs={0} sm={0} md={24}>
          <div className="list-img-box">
            <Above imgUrl={'https://s2.ax1x.com/2019/11/24/MXlH2R.png'} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={0}>
          <div className="list-img-mobile-box">
            <Above imgUrl={'https://s2.ax1x.com/2019/11/24/MXlH2R.png'} />
          </div>
        </Col>
      </Row>

      <div className="list-main">
        <div className="list-main-content">
          <Row>
            <Col xs={0} sm={0} md={24}>
              {
                blogList.map((ele, index) => {
                  return (
                    <div className="list-item" key={index}>
                      <div className="list-item-border">

                        <div className="list-item-left">
                          <img draggable={false} src={ele.imgUrl} alt="博客背景图预览" />
                        </div>
                        <div className="list-item-right">
                          <div className="list-item-right-top">
                            <div className="list-item-title">
                              博客标题
                            </div>
                            <div className="list-item-time">
                              <Icon type="clock-circle" />
                              &nbsp;2019-03-27
                            </div>
                          </div>
                          <div className="list-item-introduce list-width-100f">
                            PHP是世界上最好的语言</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Col>
            <Col xs={24} sm={24} md={0}>
              {
                blogList.map((ele, index) => {
                  return (
                    <div key={index} className="list-item-mobile">
                      <img src={ele.imgUrl} alt="博客预览背景图"/>
                      <div className="list-item-content-mobile">
                        
                      </div>
                    </div>
                  )
                })
              }
            </Col>
          </Row>
        </div>
      </div>
      <div className="list-pagination">

        <Pagination simple defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default List