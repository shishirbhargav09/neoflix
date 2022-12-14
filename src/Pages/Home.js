
import { onAuthStateChanged } from 'firebase/auth';

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
      <Banner/>
      <CardWrapper/>
      
    </Container>
  )
}

export default Home

const Container = styled.div``