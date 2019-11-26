import React from 'react';

import Section from '../../components/Section/Section'
import Article from '../../components/Article/Article'

import {connect} from 'react-redux'
import {setNavSelectedItemKeyAction} from '../../store/action/action'

const Home = props => {
  window.scrollTo(0, 0)
  props.navSelectedItemKey !== 'home' && props.setNavSelectedItemKeyAction('home')
  return (
    <>
      <Section/>
      <Article/>
    </>
  )
}

export default connect(state => {
  return {
    navSelectedItemKey: state.navSelectedItemKey
  }
}, {
  setNavSelectedItemKeyAction
})(Home)  