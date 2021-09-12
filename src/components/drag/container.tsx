import React, { memo } from 'react'
import DropItem from './drop-item'
import update from 'immutability-helper'
import { DragProps } from './drag-types'

const itemStyle = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  margin: '0 .5rem .5rem 0',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '120px'
}

const Container: React.FC<DragProps> = ({
  data = [],
  fixedAfterData,
  fixedBeforeData,
  wrapClassName,
  itemClassName,
  contentMaxLength,
  actionIcon,
  dragIcon,
  onAction,
  onDrag
}) => {
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = data[dragIndex]
    onDrag &&
      onDrag(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragItem]
          ]
        })
      )
  }

  return (
    <div
      className={wrapClassName}
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {fixedBeforeData &&
        fixedBeforeData.map((item) => (
          <div
            key={item.id}
            style={{ ...(!itemClassName ? itemStyle : undefined) }}
            className={itemClassName}
          >
            {item.text}
          </div>
        ))}
      {data.map((card, i) => (
        <DropItem
          key={card.id}
          index={i}
          id={card.id}
          text={card.text}
          itemClassName={itemClassName}
          contentMaxLength={contentMaxLength}
          actionIcon={actionIcon}
          dragIcon={dragIcon}
          moveCard={moveItem}
          itemStyle={itemStyle}
          onAction={onAction}
        />
      ))}
      {fixedAfterData &&
        fixedAfterData.map((item) => (
          <div
            key={item.id}
            style={{ ...(!itemClassName ? itemStyle : undefined) }}
            className={itemClassName}
          >
            {item.text}
          </div>
        ))}
    </div>
  )
}
export default memo(Container)
