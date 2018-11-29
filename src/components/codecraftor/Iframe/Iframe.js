import React from 'react'
import styles from './Iframe.module.css'

const Iframe = () => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        className={styles.iframe}
        title="iframe"
        width="100%"
        height="100%"
        src="/"
      />
    </div>
  )
}

export default Iframe;
