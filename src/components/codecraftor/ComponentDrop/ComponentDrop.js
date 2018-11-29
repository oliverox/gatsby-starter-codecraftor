import React from 'react'

import styles from './ComponentDrop.module.css'

class ComponentDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragOver: false,
    }
    this.handleDrop = this.handleDrop.bind(this)
    this.handleOnDragEnter = this.handleOnDragEnter.bind(this)
    this.handleOnDragLeave = this.handleOnDragLeave.bind(this)
  }

  handleDrop(e) {
    console.log('drop event data=', e.dataTransfer.getData('component'))
    this.setState({
      isDragOver: false,
    })
  }

  handleOnDragOver(e) {
    e.stopPropagation()
    e.preventDefault()
  }

  handleOnDragEnter() {
    this.setState({
      isDragOver: true,
    })
  }

  handleOnDragLeave() {
    this.setState({
      isDragOver: false,
    })
  }

  render() {
    const { dropText = 'Drop component here' } = this.props
    let cn = styles.dropContainer
    if (this.state.isDragOver) {
      cn = `${cn} ${styles.isDragOver}`
    }
    return (
      <div
        className={cn}
        onDrop={this.handleDrop}
        onDragOver={this.handleOnDragOver}
        onDragEnter={this.handleOnDragEnter}
        onDragLeave={this.handleOnDragLeave}
      >
        {dropText}
      </div>
    )
  }
}

export default ComponentDrop
