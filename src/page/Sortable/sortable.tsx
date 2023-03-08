import React, { useState } from 'react'
import {
  SortEndHandler,
  SortableContainer,
  SortableElement
  // arrayMove as arrayMoveImmutable
} from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'
import './index.css'
type Tvalue = { id: number; text: string }
const Sortable: React.FC = () => {
  const [data, setData] = useState<Tvalue[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 8' },
    { id: 9, text: 'Item 9' },
    { id: 10, text: 'Item 10' }
  ])
  const SortableItem = SortableElement<{ value: Tvalue }>(
    (props: { value: Tvalue }) => {
      const { value } = props
      return (
        <div
          style={{ width: '100px', height: '100px', border: '1px solid black' }}
          className="sortable-item"
        >
          {value.text}
        </div>
      )
    }
  )
  const SortableList = SortableContainer<{ data: Tvalue[] }>(
    (props: { data: Tvalue[] }) => {
      const { data } = props
      return (
        <div
          style={{ display: 'flex', flexWrap: 'wrap' }}
          className="sortable-container"
        >
          {data.map((item, index) => (
            <SortableItem key={item.id} index={index} value={item} />
          ))}
        </div>
      )
    }
  )

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    setData((pre) => arrayMoveImmutable(pre, oldIndex, newIndex))
  }

  return (
    <SortableList
      helperClass={'sortable-container-active'}
      data={data}
      axis="xy"
      onSortEnd={onSortEnd}
    />
  )
}

export default Sortable
