
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {FaSignOutAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Banner from '../Components/Banner'

import CardWrapper from '../Components/CardWrapper';
import { firebaseAuth } from '../Firebase/firebase-config';

function Home() {
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  

  
  return (
    <Container> 
      <FaSignOutAlt onClick={() => {
        signOut(firebaseAuth).then(() => {
          navigate('/login')
        }).catch((error) => {
          
        })
        
    }}/>
      <Banner/>
      <CardWrapper/>
      
    </Container>
  )
}

export default Home

const Container = styled.div`
  svg{
    font-size: 3rem;
    color: white;
    position: absolute;
    z-index: 15;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`