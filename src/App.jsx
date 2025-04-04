import { useEffect, useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import CountContext from './contexts/CountContexts';

function App() {
  const [searchText, setSearchText] = useState('')
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
  console.log(api_key);

  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`
  console.log(base_movies_api_url);



  const fetchedData = fetch(base_movies_api_url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      setSearchText()

    })



  return (
    <>
      <CountContext.Provider value={{ searchText, api_key, base_movies_api_url, fetchedData }}>
        <Header />
        <Main />
      </CountContext.Provider>
    </>
  )
}

export default App
