import React, { memo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './container'
import { DragProps } from './drag-types'

export const Drag: React.FC<DragProps> = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container {...props} />
    </DndProvider>
  )
}

export default memo(Drag)
