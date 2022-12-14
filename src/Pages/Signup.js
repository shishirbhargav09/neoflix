import React, { useState } from "react";
import { firebaseAuth } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";


import styled from "styled-components";
function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });

  return (
    <Container>
      <div className="main d-flex flex-column justify-content-center align-items-center ">
        <div className="form d-flex flex-column justify-content-center align-items-center ">
        <h2>Sign Up New User</h2>
          <input type="email" placeholder="Enter Your Email" onChange={(event) => {
            setEmail(event.target.value);

          }}/>
          <input type="password" placeholder="Enter Your Password" onChange={(event) => {
            setPassword(event.target.value);
            
          }}/>
          <button onClick={ async() => {
            

            await createUserWithEmailAndPassword(firebaseAuth, email, password).then((response) => {
                console.log(response)
            })
          }}>SignUp</button>
          <button onClick={() => {
            navigate("/login")
          }}>Login</button>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  .main {
    height: 90vh;
    width: 100vw;
    h2{
      color: white;
    }
    .form {
      position: relative;
      height: 40vh;
      width: 50vh;
      background-color: #000000a0;
      z-index: 99;
      gap: 1rem;
      @media only screen and (max-width: 442px) {
            width: 80vw;
            
          
        }
      input {
        width: 20vw;
        border-radius: 0.2rem;
        @media only screen and (max-width: 780px) {
            width: 40vw;
           
          
        }
        @media only screen and (max-width: 450px) {
            width: 60vw;
            
          
        }
      }
      button {
        @media only screen and (max-width: 900px) {
            width: 5rem;
            
          
        }
        width: 15vw;
        background-color: red;
        border-radius: 0.2rem;

        color: aliceblue;
      }
    }
    img {
      z-index: 5;
      position: absolute;
      object-fit: fill;
    filter: blur(2px);
      top: 0;
      height: 100vh;
      width: 100vw;
    }
  }
`;
