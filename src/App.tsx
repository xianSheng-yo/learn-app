import React, { useEffect, useState } from 'react'
import Drag from './components/drag'

const App: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write'
    },
    {
      id: 2,
      text: 'Make'
    },
    {
      id: 3,
      text: 'Write'
    },
    {
      id: 4,
      text: 'Create'
    },
    {
      id: 5,
      text: 'Spam'
    },
    {
      id: 6,
      text: '???'
    },
    {
      id: 7,
      text: 'PROFIT'
    }
  ])

  useEffect(() => {
    console.log('cards: ', cards)
    return () => { }
  }, [cards])

  return (
    <div className="App">
      <header className="App-header"></header>
      <Drag data={cards} onDrag={(value) => setCards(value)} />
    </div>
  )
}

export default App
