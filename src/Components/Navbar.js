import React from 'react'
import styled from 'styled-components'
function Navbar() {
  return (
    <Container>
        <div className="nav d-flex justify-content-center align-items-center py-2">
            <div className="left">
                <h1>NEOFLIX</h1>
            </div>
            
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
height: 4rem;
position: relative;
z-index: 10;
background-color: #0005;
;

 .nav{
    .left{
        color: red;
    }
 }
`