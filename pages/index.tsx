import React from 'react'
import './index.less'
import { DatePicker } from 'antd'
import Nav from '../components/Nav'

function HomePage() {
  return (
    <div>
      <Nav />
      <DatePicker />
      <img src="/favicon.ico"/>
    </div>
  )
}

export default HomePage
