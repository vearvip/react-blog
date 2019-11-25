import React from 'react';
import './style/Above.less'

import { Row, Col } from 'antd'

const Above = props => {
  return (
    <div className="above">
      <Row>
        <Col xs={0} sm={0} md={24} className="above-box">
          <img src={props.imgUrl} alt="网页前面的图片" />
          <div className="above-wave-row">
            <div className="above-wave">
              <div className="above-wave-item1"></div>
              <div className="above-wave-item2"></div>
            </div>
            <div className="above-wave-floor"></div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} className="mobile-above-box">
          <img src={props.imgUrl} alt="网页前面的图片" />
          <div className="mobile-above-wave-row">
            <div className="mobile-above-wave">
              <div className="mobile-above-wave-item1"></div>
              <div className="mobile-above-wave-item2"></div>
            </div>
            <div className="mobile-above-wave-floor"></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Above