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
    <span role="img" aria-label="施工中" style={{
      color: 'red'
    }}>施工中🚧</span>
      <button onClick={() => {
        props.history.push('/')
      }}>走你</button>
    </div>
  )
}
export default About