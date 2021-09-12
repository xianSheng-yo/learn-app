import { ReactNode } from 'react'
import {
  ConnectDragPreview,
  ConnectDragSource,
  ConnectDropTarget
} from 'react-dnd'

export const ItemTypes = {
  Item: 'item'
}

export interface DragItem {
  id: number
  text: string
}
export interface ContainerState {
  cards: DragItem[]
}

export interface ItemDragObject {
  id: string
  index: number
}

export interface DragProps {
  data?: DragItem[]
  fixedAfterData?: DragItem[]
  fixedBeforeData?: DragItem[]
  wrapClassName?: string
  itemClassName?: string
  contentMaxLength?: number
  actionIcon?: ReactNode
  dragIcon?: ReactNode
  onAction?: (id: number | string) => void
  onDrag?: (data: DragItem[]) => void
}

export interface ItemProps {
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void

  actionIcon?: ReactNode
  dragIcon?: ReactNode
  contentMaxLength?: number
  onAction?: (id: number | string) => void

  isDragging: boolean
  connectDragSource: ConnectDragSource
  connectDropTarget: ConnectDropTarget
  connectDragPreview: ConnectDragPreview

  itemClassName?: string

  itemStyle: React.CSSProperties
}

export interface CardInstance {
  getNode (): HTMLDivElement | null
}
