import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

function Banner() {
  const [bannerdata, setbannerdata] = useState([])
  const image_url = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const fetchbanner = async () => {
     const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=392906b1774fdfba8b7331458d140f46')
     setbannerdata([...data.results])
    //  console.log(bannerdata);
     
    }
    fetchbanner();
   }, [])
  return (
    <Container>
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={3000}
    >
      <div>
        <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"  alt="banner"/>
        <div className="title">
        <p>Black Adam</p>
        <div className="description"></div>
        </div>
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg" alt="banner"/>
        <p>Avatar</p>
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" alt="banner"/>
        <p>Black Panther</p>
      </div>
      {bannerdata.map((banner) => {
        return <div key={banner.backdrop_path}>
        <img src={image_url+banner.backdrop_path} alt="banner"/>
        <p>{banner.title}</p>
      </div>
      })}
      
      
      
    </Carousel>

    </Container>
  );
}

export default Banner;

const Container = styled.div`
  height: 100vh;
  
  img{
    height: 100vh;
    object-fit: cover;

  }
  p{
    font-weight: 900;
    position: absolute;
    color: white;
    z-index: 10;
    font-size: 55px;
    bottom: 10rem;
    left: 10rem;
  }
  
  @media screen and (max-width: 1000px){
    height: 50vh;
  
  img{
    height: 50vh;
    object-fit: cover;

  }
  p{
    font-weight: 450;
    position: absolute;
    color: white;
    z-index: 10;
    font-size: 20px;
    bottom: 4rem;
    left: 4rem;
  }
  
  }
`;
