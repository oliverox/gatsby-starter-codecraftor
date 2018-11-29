import React from 'react'

const Text = ({ style = {}, text = '' }) => {
  return <span style={style}>{text}</span>
}

export default Text
