import { useEffect, useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [searchText, setSearchText] = useState('')
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`


  fetch(base_movies_api_url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSearchText(searchText)

    })



  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
