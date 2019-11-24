import React from 'react';

import Section from '../../components/Section/Section'
import Article from '../../components/Article/Article'

const Home = props => {
  window.scrollTo(0, 0)
  return (
    <>
      <Section/>
      <Article/>
    </>
  )
}

export default Home