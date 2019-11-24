import React from 'react';
const About = props => {
  window.scrollTo(0, 0)
  return (
    <div className="about">
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
    <h1>关于我</h1>
      <button onClick={() => {
        props.history.push('/')
      }}>走你</button>
    </div>
  )
}
export default About