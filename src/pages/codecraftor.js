import React from 'react'

import Layout from '../components/layout'

const CodecraftorPage = () => {
  const onDragStart = e => {
    e.dataTransfer.setData('text', e.target.id)
    console.log('drag started', e)
  }
  return (
    <Layout>
      <h1>Codecraftor</h1>
      <div
        style={{
          display: 'flex',
          height: 800,
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            backgroundColor: 'hotpink',
            width: 300,
            height: '100%',
          }}
        >
          <div
            id="component001"
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              border: '1px solid black',
            }}
            draggable={true}
            onDragStart={onDragStart}
          >
            Drag Me
          </div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            height: '100%',
          }}
        >
          <iframe
            title="codecraftor-editor"
            width="100%"
            height="100%"
            src="/"
          />
        </div>
      </div>
    </Layout>
  )
}

export default CodecraftorPage
