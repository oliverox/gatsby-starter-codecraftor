import React from 'react'
import 'normalize.css'
import 'typeface-montserrat'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import { SideBar, EditorLayout } from 'components'

const CodecraftorPage = () => {
  return (
    <EditorLayout>
      <SideBar />
      <div
        style={{
          flex: 1,
          height: '100%',
        }}
      >
        <iframe
          style={{
            border: 0,
            borderLeft: '1px solid #d0d0d0',
          }}
          title="codecraftor-editor"
          width="100%"
          height="100%"
          src="/"
        />
      </div>
    </EditorLayout>
  )
}

export default CodecraftorPage
