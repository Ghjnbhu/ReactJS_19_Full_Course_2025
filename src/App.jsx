import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false)

  return (
    <div className='card' >
      <h2>{title}</h2>
      <button className="button" onClick={() => setHasLiked (!hasLiked)}>
        {hasLiked ? '🤍' : '❤️'}
      </button>
    </div>

  )
}

const App = () => {
  return (
    <div>
      <h2>My Favorite Movies</h2>

      <div className="cards-container">
        <Card title="Star Wars" rating={5} isCool={true}/>
        <Card title="Avatar"/>
        <Card title="The Lion king"/>
      </div>

    </div>
  )
}

export default App
