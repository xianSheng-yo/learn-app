import React from 'react'
/* pixijs 7.x 控制台会报eslint警告 */
// import { BlurFilter } from 'pixi.js'
import { filters } from 'pixi.js'
const { BlurFilter } = filters
import { Stage, Container, Sprite, Text } from '@pixi/react'
import { useMemo } from 'react'

const Pixi: React.FC = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), [])

  return (
    <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  )
}

export default Pixi
