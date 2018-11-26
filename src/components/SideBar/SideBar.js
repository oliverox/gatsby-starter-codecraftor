import React from 'react'
import { H3 } from '@blueprintjs/core'
import styles from './SideBar.module.css';

const SideBar = ({title = 'Settings'}) => {
  const onDragStart = e => {
    e.dataTransfer.setData('text', e.target.id)
    console.log('drag started', e)
  }

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarTitleContainer}>
        <H3>{title}</H3>
      </div>
      <div
        id="component001"
        style={{
          textAlign: 'center',
          border: '1px solid black',
        }}
        draggable={true}
        onDragStart={onDragStart}
      >
        Drag Me
      </div>
    </div>
  )
}

export default SideBar;