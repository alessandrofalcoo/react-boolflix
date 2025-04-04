import { useState } from 'react'

function App() {
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`
  fetch(base_movies_api_url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

    })

  return (
    <>

    </>
  )
}

export default App
