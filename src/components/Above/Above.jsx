import React from 'react';
import './style/Above.less'

import {Row,Col} from 'antd'

const Above = props => {
  return (
    <div className="above">
      <img src={props.imgUrl} alt="网页前面的图片"/>
        <Row className="above-wave-row">
          <Col xs={0} sm={0} md={24} >
            <div className="above-wave">
              <div className="above-wave-item1"></div>
              <div className="above-wave-item2"></div>
            </div>
            <div className="above-wave-floor"></div>
          </Col>
        </Row>
        <Row className="mobile-above-wave-row">
          <Col xs={24} sm={24} md={0} >
            <div className="mobile-above-wave">
              <div className="mobile-above-wave-item1"></div>
              <div className="mobile-above-wave-item2"></div>
            </div>
            <div className="mobile-above-wave-floor"></div>
          </Col>
        </Row>
    </div>
  )
}
export default Above