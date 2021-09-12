import { forwardRef, useImperativeHandle, useRef } from 'react'
import { DropTargetMonitor, DragSourceMonitor } from 'react-dnd'
import {
  DragSource,
  DropTarget,
  DropTargetConnector,
  DragSourceConnector
} from 'react-dnd'
import { XYCoord } from 'dnd-core'
import {
  CardInstance,
  ItemDragObject,
  ItemProps,
  ItemTypes
} from './drag-types'

const iconStyle = {
  width: '1.2rem',
  height: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
}

const getContentText = (text: string, contentMaxLength: number) => {
  let str = text
  if (text.length > contentMaxLength) {
    str = str.slice(0, contentMaxLength) + '...'
  }
  return str
}

const Item = forwardRef<HTMLDivElement, ItemProps>(function Item (
  {
    id,
    text,
    isDragging,
    itemClassName,
    itemStyle,
    actionIcon,
    dragIcon,
    contentMaxLength = 4,
    onAction,
    connectDragSource,
    connectDropTarget,
    connectDragPreview
  },
  ref
) {
  const elementRef = useRef(null)
  connectDragSource(elementRef)
  connectDropTarget(elementRef)

  const opacity = isDragging ? 0 : 1
  useImperativeHandle<any, CardInstance>(ref, () => ({
    getNode: () => elementRef.current
  }))

  return <div
    ref={elementRef}
    className={itemClassName}
    style={{
      opacity,
      ...(!itemClassName ? itemStyle : undefined)
    }}
    title={text}
  >
    <div style={iconStyle}>{dragIcon ? dragIcon : '#'}</div>
    <div>{getContentText(text, contentMaxLength)}</div>
    <div
      style={iconStyle}
      onClick={() => onAction && onAction(id)}
    >
      {actionIcon ? actionIcon : 'x'}
    </div>
  </div>
})

export default DropTarget(
  ItemTypes.Item,
  {
    hover (
      props: ItemProps,
      monitor: DropTargetMonitor,
      component: CardInstance
    ) {
      if (!component) {
        return null
      }
      // node = HTML Div element from imperative API
      const node = component.getNode()
      if (!node) {
        return null
      }

      const dragIndex = monitor.getItem<ItemDragObject>().index
      const hoverIndex = props.index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = node.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem<ItemDragObject>().index = hoverIndex
    }
  },
  (connect: DropTargetConnector) => ({
    connectDropTarget: connect.dropTarget()
  })
)(
  DragSource(
    ItemTypes.Item,
    {
      beginDrag: (props: ItemProps) => ({
        id: props.id,
        index: props.index
      })
    },
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
      connectDragSource: connect.dragSource(),
      // connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    })
  )(Item)
)
