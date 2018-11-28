import React from 'react'

const Container = ({ style = {}, children }) => {
  return <div style={style}>{children}</div>
}

export default Container
