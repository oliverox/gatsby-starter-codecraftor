import React from 'react'
import { Button as ButtonBP } from '@blueprintjs/core'

import styles from './styles.module.css'

const Button = ({ text = 'Click me', dev = true, ...otherProps }) => {
  const componentToRender = <ButtonBP text={text} {...otherProps} />
  if (dev) {
    return <div className={styles.editMode}>{componentToRender}</div>
  } else {
    return <div>{componentToRender}</div>
  }
}

export default Button
