import React from 'react'

function About(props) {
  return (
    <div className={`text-${props.mode === 'light' ? 'light' : 'dark'}`}><h1>{props.text}</h1></div>
  )
}

export default About;