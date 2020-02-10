import React from 'react';

import Section from '../../components/Section'
import Article from '../../components/Article'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// import {connect} from 'react-redux'
// import {setNavSelectedItemKeyAction} from '../../store/action/action'

const Home = (props: any) => {
  // window.scrollTo(0, 0)
  // const {
  //   navSelectedItemKey,
  //   setNavSelectedItemKeyAction
  // } = props
  // navSelectedItemKey !== 'home' && setNavSelectedItemKeyAction('home')
  return (
    <>
      <Nav />
      <Section/>
      <Article/>
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
// })(Home)  

export default Home