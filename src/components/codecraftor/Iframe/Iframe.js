import React from 'react'
import { EditableText } from '@blueprintjs/core'

import styles from './Iframe.module.css'

const Iframe = () => {
  return (
    <div className={styles.iframeContainer}>
      <div className={styles.urlContainer}>
        <span className={styles.domainName}>https://yourdomain.com</span>
        <EditableText defaultValue="/" placeholder="/type a page name" minWidth={200}/>
      </div>
      <iframe
        className={styles.iframe}
        title="Codecraftor"
        width="100%"
        height="100%"
        src="/"
      />
    </div>
  )
}

export default Iframe
