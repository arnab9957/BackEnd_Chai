import { use, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState([])

  useEffect(() => {
    axios.get('/api/jokes') //this will append through proxy
    .then((res)=>{
      setJoke(res.data)
    })
    .catch((error)=>{
      console.error("Error fetching jokes:", error);
    })
  }, [])

  return (
    <>
    <h1>Connect Frontend with backend</h1>
      <p>Jokes: {joke.length}</p>

            {
        joke.map((joke)=>{
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
