import React from 'react'

const Text = ({ style = {}, text = 'Edit this text...' }) => {
  return <span style={style}>{text}</span>
}

export default Text
