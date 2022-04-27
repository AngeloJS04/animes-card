import React, { useEffect, useState } from 'react';
import AnimeCard from './components/animeAPI/AnimeCard';
import Loading from './components/animeAPI/loading/Loading';

function App() {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(true)


  const getAnime = async () => {
    await fetch('https://api.jikan.moe/v4/anime')
      .then(response => { return response.json() })
      .then(data => setAnimes(data.data));
    setLoading(false)
  }

  useEffect(() => {
    getAnime()
  }, [])
  
  console.log(animes)
  return (
    <>
      <div className='bg-dark 100vh'>

        {loading ? <Loading /> : <AnimeCard animes={animes} />}
      </div>
    </>
  );
}

export default App;
