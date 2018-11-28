import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from '@blueprintjs/core'

const Heading = ({
  text = 'Edit this heading',
  type = 'h1',
  style = {},
  className = '',
}) => {
  let ComponentToRender = H1
  switch (type) {
    case 'h2':
      ComponentToRender = H2
      break
    case 'h3':
      ComponentToRender = H3
      break
    case 'h4':
      ComponentToRender = H4
      break
    case 'h5':
      ComponentToRender = H5
      break
    case 'h6':
      ComponentToRender = H6
      break
    default:
      break
  }
  return (
    <ComponentToRender style={style} className={className}>
      {text}
    </ComponentToRender>
  )
}

export default Heading
