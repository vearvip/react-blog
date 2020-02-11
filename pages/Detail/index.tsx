import React from 'react';

import { Row, Col, Affix } from 'antd';

import marked from 'marked'
import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/monokai-sublime.css'
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import Above from '../../components/Above'
import './style/index.less'

import { findArticleById } from '../../api'

const Detail = (props: any) => {
  console.log('🌶', props.articleDetail)
  const {
    articleDetail
  } = props

  const markedRender = new marked.Renderer()
  marked.setOptions({
    renderer: markedRender,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })
  let html = marked(articleDetail.content)
  
  return (
    <>
      <Nav navSelectedItemKey="detail" />
      <div className="detail">
        <Above imgUrl={'https://s2.ax1x.com/2019/11/24/MXQoct.jpg'} />
        <div className="detail-main">
          <div className="detail-content">

            <div
              className="detail-markdown-box"
              dangerouslySetInnerHTML={{
                __html: html
              }}>
              {/* <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              /> */}
            </div>
            {/* <Row type="flex" justify="space-between"> */}
            <Row >
              <Col xs={0} sm={0} md={24}>
                <Affix offsetTop={40}>
                  <div className="detail-catalogue-box">
                    <MarkdownNavbar
                      source={articleDetail.content}
                      headingTopOffset={48}
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
Detail.getInitialProps = async () => {
  const result = await findArticleById({
    id: 2
  })
  return {
    articleDetail: result.data
  }
} 

export default Detail