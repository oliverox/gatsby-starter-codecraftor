import React from 'react'
import 'normalize.css'
import 'typeface-montserrat'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import { EditorLayout } from 'components'

const CodecraftorPage = () => {
  const onDragStart = e => {
    e.dataTransfer.setData('text', e.target.id)
    console.log('drag started', e)
  }
  return (
    <EditorLayout>
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
            height: '100%',
          }}
        >
          <iframe
            style={{ backgroundColor: '#fff' }}
            title="codecraftor-editor"
            width="100%"
            height="100%"
            src="/"
          />
        </div>
      </div>
    </EditorLayout>
  )
}

export default CodecraftorPage
