import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from "axios";


function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{

    axios.get("api/v1/movie").then((res)=>{
      setMovies(res.data);
    }).catch((e)=>{
      console.log(e);
    })
  })

  return (
    <>
      
      <h1>MOVIE DATA</h1>

      <h2>movie : {movies.length}</h2>

      {movies.map((movie)=>{
        return
        <>
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.plot}</p>
          </div>
        </>
      })}
    </>
  )
}

export default App
