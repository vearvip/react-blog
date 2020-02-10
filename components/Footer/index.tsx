import React from 'react'

import './style/index.less'

const Footer = (props: any) => (
  <footer>
    {/* <p>本博客技术栈：<a href="https://reactjs.org/">React.js</a>，<a href="https://nestjs.com/">Nest.js</a></p> */}
    <div className="footer-svg-box">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
        preserveAspectRatio="none" >
        <path d="M0 0 L50 50 L0 100" fill="rgba(255,255,255, .4)"></path>
        <path d="M100 0 L50 50 L100 100" fill="rgba(255,255,255, .4)"></path>
        <path d="M0 0 L50 50 L0 66.6" fill="rgba(255,255,255, .4)"></path>
        <path d="M100 0 L50 50 L100 66.6" fill="rgba(255,255,255, .4)"></path>
        <path d="M0 0 L50 50 L0 33.3" fill="rgba(255,255,255, .45)"></path>
        <path d="M100 0 L50 50 L100 33.3" fill="rgba(255,255,255, .45)"></path>
        <path d="M0 0 L50 50.9 L100 0 L0 0" fill="rgba(255,255,255, 1)"></path>
      </svg>
    </div>
    <p>CopyRight © 2019</p>
  </footer>
)

export default Footer
