import React from "react";
import styled from "styled-components";
import {BsPlayCircle} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate()
  return (
    <Container>
      <div >
        <img src={`https://image.tmdb.org/t/p/original`+props.img} alt="card_img" />
        <h4>{props.title}</h4>
        <BsPlayCircle onClick={() => {
          navigate('/watch')
        }}/>
      </div>
    </Container>
  );
}

export default Card;

const Container = styled.div`
position: relative;
img{
    height: 15rem;
    width: 10rem;
    object-fit: fill;
    border: none;
    margin: 10px;

}
svg{
  color: white;
  font-size: 50px;
  position: absolute;
  top: 7rem ;
  left: 4rem;
  cursor: pointer;;
}
`;
