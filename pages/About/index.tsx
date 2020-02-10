import React from 'react';
import Above from '../../components/Above'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// import { connect } from 'react-redux'
// import { setNavSelectedItemKeyAction } from '../../store/action/action'
import { Avatar } from 'antd';

import './style/index.less'

const aboutMeList = [{
  title: '关于我',
  content: [{
    tag: '生活',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '出场出差',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }]
}, {
  title: '关于我2',
  content: [{
    tag: '生活2',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '生活22',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '生活32',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }]
}, {
  title: '关于我3',
  content: [{
    tag: '生活3',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '生活23',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }, {
    tag: '生活33',
    detail: '废掉一个人最快的方法，就是让他闲着。闲着闲着，一个人就废了。蔡康永曾说过：“当你没有上进心的时候，你是在杀人，你不小心，杀了你自己。”'
  }]
}]

const About = (props: any) => {
  // window.scrollTo(0, 0)
  // const {
  //   navSelectedItemKey,
  //   setNavSelectedItemKeyAction
  // } = props
  // navSelectedItemKey !== 'about' && setNavSelectedItemKeyAction('about')
  return (
    <>
      <Nav />
      <div className="about">
        <Above imgUrl={'https://s2.ax1x.com/2019/11/26/Mzb75Q.jpg'} />
        <div className="about-main">
          <div className="about-avatar">
            <Avatar src="http://5b0988e595225.cdn.sohucs.com/images/20171231/fb5bab11952b4b7d920b8798c4dc2ec2.jpeg" size={150}></Avatar>
          </div>
          {
            aboutMeList.map(ele => {
              return (
                <div className="about-introduce" key={ele.title}>
                  <div className="about-title">{ele.title}</div>
                  <div className="about-content">{
                    ele.content.map(item => {
                      return (
                        <div className="about-detail" key={item.tag}>
                          <div className="about-tag">{item.tag}</div>
                          <div className="about-sentence">{item.detail}</div>
                        </div>
                      )
                    })
                  }</div>
                </div>
              )
            })
          }
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
// })(About)

export default About