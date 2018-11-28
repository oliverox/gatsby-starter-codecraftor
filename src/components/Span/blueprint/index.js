import React from 'react'

const Span = ({ style = {}, text='', children }) => {
  return <span style={style}>{text}</span>
}

export default Span
