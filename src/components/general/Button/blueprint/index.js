import React from 'react'
import { Button as ButtonBP } from '@blueprintjs/core'

import styles from './styles.module.css'

const Button = ({ text = 'Click me', dev = true, ...otherProps }) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> button styles=', styles);
  console.log('dev is', dev);
  if (dev) {
    return (
      <div className={styles.editMode}>
        <ButtonBP text={text} {...otherProps} />
      </div>
    )
  } else {
    return (
      <div>
        <ButtonBP text={text} {...otherProps} />
      </div>
    )
  }
}

export default Button
