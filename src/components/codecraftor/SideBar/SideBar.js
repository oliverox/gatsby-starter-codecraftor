import React from 'react'
import { H3, Card, Elevation, Icon } from '@blueprintjs/core'
import generalComponentList from '../../general'

import styles from './SideBar.module.css'

const SideBar = ({ title = 'Settings' }) => {
  const onDragStart = e => {
    e.dataTransfer.setData('component', e.target.getAttribute('data-component'))
  }
  const gcl = Object.keys(generalComponentList)
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarTitleContainer}>
        <H3>{title}</H3>
      </div>
      {gcl.map((component, index) => {
        return (
          <Card
            key={index}
            data-component={component}
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.sidebarItem}
            draggable={true}
            onDragStart={onDragStart}
          >
            <span className={styles.sidebarItemName}>
              <Icon
                className={styles.sidebarItemIcon}
                icon={generalComponentList[component].icon}
              />
              {generalComponentList[component].name}
            </span>
          </Card>
        )
      })}
    </div>
  )
}

export default SideBar
