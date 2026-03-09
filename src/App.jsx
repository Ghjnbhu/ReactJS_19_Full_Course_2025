import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(true)

  useEffect(() => {
    console.log('${title} has been liked ${hasLiked}');
    }, [hasLiked]);

  useEffect(() => {
    console.log('CARD RENDERED');
    }, []);
      
      return (
    <div className='card'>
      <h2>{title} <br/> {count || ''} 
        <button className="button" onClick={() => {
          
          setCount ((prevState) => prevState + 1);
          /*setHasLiked (!hasLiked);*/
          setHasLiked (false);

          }}>
          {hasLiked ? '🤍' : '❤️'}
        </button>
      </h2>
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
