import React from 'react';
import './style/Above.less'

const Above = props => {
  return (
    <div className="above">
      <img src={props.imgUrl} alt="网页前面的图片"/>
    </div>
  )
}
export default Above