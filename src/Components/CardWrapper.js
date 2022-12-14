import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Loader from './Loader'


function CardWrapper() {
    const [moviesdata, setmoviesdata] = useState([])
    const [loading, setloading] = useState(true)
  
  
  // const api_key = '392906b1774fdfba8b7331458d140f46';
  // const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  const image_url = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
   const fetchdata = async () => {
    const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=392906b1774fdfba8b7331458d140f46&language=en-US&page=1')
    setmoviesdata([...data.results])
    // console.log(moviesdata);
    setloading(false)
    
   }
   fetchdata();
  }, [])
  return (
   <> 
   <hr /><center><h2>Popular Movies</h2></center>
   <Container>
      
      {
        loading ? <Loader/> : <div className='movies'> {moviesdata.map((movie) => {
          return <Card key={movie.backdrop_path} img={image_url+movie.poster_path} title={movie.title.substring(0,10)} />
        })}</div>
      }
   </Container></>
  )
}

export default CardWrapper

const Container = styled.div`
.movies{
  display: flex;
  padding-left: 4rem;
  padding-right: 4rem;
 position: relative;
 margin-top: 2rem;
 flex-direction: row;
 flex-wrap: wrap;
 /* justify-content: center; */
 justify-content: space-evenly;
 align-items: center;
 

}
@media screen and (max-width: 1000px) {
.movies{

 
  padding-left: 0rem;
  padding-right: 0rem;

}
}
`