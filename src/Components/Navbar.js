import React from 'react'
import styled from 'styled-components'
function Navbar() {
  return (
    <Container>
        <div className="nav d-flex justify-content-between align-items-center mx-5">
            <div className="left">
                <h1>NEOFLIX</h1>
            </div>
            <div className="right">
                <button>Signup</button>
            </div>
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
height: 4rem;
background-color: #5497d2;

 .nav{
    .left{
        color: red;
    }
 }
`