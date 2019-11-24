import React from 'react';
import {Link} from 'react-router-dom'

import './style/404.less'
import { Button } from 'antd';

const F0F = props => {
  return (
    <div className="f0f">
      <div className="main-404-box">
        <div className="top-404-box">
          <div className="title-404">404</div>
          <div className="gif-404" />
        </div>
        <div className="bottom-404-box">
          走错路啦，快点
          <Link to="/">
            肥家
          </Link>
      
          
        </div>
      </div>
    </div>
  )
}

export default F0F