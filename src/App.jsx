import { useEffect, useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import { MoviesProvider } from './contexts/moviesContext';

function App() {

  return (
    <>
      <MoviesProvider >
        <Header />
        <Main />
      </MoviesProvider>
    </>
  )
}

export default App
