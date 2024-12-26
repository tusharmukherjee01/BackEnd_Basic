import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {

  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes') // this is backend url where 
    .then((res)=>{setJokes(res.data)})
    .catch((error)=>{console.log(error)})
  },[])

  return (
    <>
      <h1>FULL STACK</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke) => (
          <div id={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

