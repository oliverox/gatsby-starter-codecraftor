import React from 'react'
import 'normalize.css'
import 'typeface-montserrat'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import { SideBar, Iframe, EditorLayout } from 'components'

const CodecraftorPage = () => {
  return (
    <EditorLayout>
      <SideBar />
      <Iframe />
    </EditorLayout>
  )
}

export default CodecraftorPage
