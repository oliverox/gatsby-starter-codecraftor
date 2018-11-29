import React from 'react'

import styles from './ComponentDrop.module.css'

const ComponentDrop = ({ dropText = 'Drop component here' }) => {
  return (
    <div className={styles.dropContainer}>
      <span>{dropText}</span>
    </div>
  )
}

export default ComponentDrop
