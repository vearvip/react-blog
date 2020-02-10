import React from 'react';

import './style/index.less'

import { Row, Col, Affix } from 'antd';

import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar';
// import 'markdown-navbar/dist/navbar.css';

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// import {connect} from 'react-redux'
// import {setNavSelectedItemKeyAction} from '../../store/action/action'
import Above from '../../components/Above'

let markdown = '## 课程介绍和环境搭建课程介绍和环境搭建课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '## 来个Hello World 初始Vue3.0\n' +
  '### 来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '### Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '## Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```'

const Detail = (props: any) => {
  // window.scrollTo(0, 0)
  // props.navSelectedItemKey !== 'detail' && props.setNavSelectedItemKeyAction('detail')
  return (
    <>
      <Nav />
      <div className="detail">
        <Above imgUrl={'https://s2.ax1x.com/2019/11/24/MXQoct.jpg'} />
        <div className="detail-main">
          <div className="detail-content">

            <div className="detail-markdown-box">
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />
            </div>
            {/* <Row type="flex" justify="space-between"> */}
            <Row >
              <Col xs={0} sm={0} md={24}>
                <Affix offsetTop={40}>
                  <div className="detail-catalogue-box">
                    <MarkdownNavbar
                      source={markdown}
                      headingTopOffset={0}
                      ordered={false}
                    />
                  </div>
                </Affix>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

// export default connect(state => {
//   return {
//     navSelectedItemKey: state.navSelectedItemKey
//   }
// }, {
//   setNavSelectedItemKeyAction
// })(Detail)    

export default Detail