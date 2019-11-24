import React from 'react';

import './style/List.less'
import { Row, Col, Icon,Pagination } from 'antd';
const blogList = [{

}, {

}, {

}, {

}, {

}]

const List = props => {
  window.scrollTo(0, 0)
  console.log(props)
  return (
    <div className="list">
      <div className="list-img-box"></div>
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
                          <img draggable={false} src="https://s2.ax1x.com/2019/11/24/MODMXF.jpg" alt="博客背景图预览" />
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