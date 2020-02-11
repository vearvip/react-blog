import React from 'react';

import Section from '../../components/Section'
import Article from '../../components/Article'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


const Index = (props: any) => {
  return (
    <>
      <Nav navSelectedItemKey="index" />
      <Section/>
      <Article/>
      <Footer />
    </>
  )
}

export default Index