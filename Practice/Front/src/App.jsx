import React , { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[value,setValue] = useState([])
  useEffect(() => {
   axios.get('/api/tushar').then((res) => {
      setValue(res.data)
    }).catch((err) => {
      console.log(err)
    })
  })
  return (
    <>
      <h1>User Details</h1>
      <p>{value.length}</p>
      {
        value.map((item) => 
           (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.age}</p>
            </div>
          )
        )
      }
    </>
  )
}

export default App
