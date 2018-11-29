import React from 'react'
import { H3, Card, Elevation, Icon } from '@blueprintjs/core'
import generalComponentList from '../../general'

import styles from './SideBar.module.css'

const SideBar = ({ title = 'Settings' }) => {
  const onDragStart = e => {
    e.dataTransfer.setData('text', e.target.id)
    console.log('drag started', e)
  }
  const gcl = Object.keys(generalComponentList)
  console.log('+++++++++++++++++++++++++++++++ gcl=', gcl)
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarTitleContainer}>
        <H3>{title}</H3>
      </div>
      {gcl.map((component, index) => {
        return (
          <Card
            key={index}
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.sidebarItem}
            draggable={true}
            onDragStart={onDragStart}
          >
            <span className={styles.sidebarItemName}>
              <Icon className={styles.sidebarItemIcon} icon={generalComponentList[component].icon} />
              {generalComponentList[component].name}
            </span>
          </Card>
        )
      })}
      {/* <div
        id="component001"
        style={{
          textAlign: 'center',
          border: '1px solid black',
        }}
        draggable={true}
        onDragStart={onDragStart}
      >
        Drag Me
      </div> */}
    </div>
  )
}

export default SideBar
