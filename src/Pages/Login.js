import React, { useState } from "react";
import { firebaseAuth } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import {
    
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  import { ToastContainer, toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import Navbar from "../Components/Navbar";
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });

  return (
   <> <Navbar/>
   <Container>
     <div className="main d-flex flex-column justify-content-center align-items-center ">
       <div className="form d-flex flex-column justify-content-center align-items-center ">
       <h2>login</h2>
         <input type="email" placeholder="Enter Your Email" onChange={(event) => {
           setEmail(event.target.value);

         }}/>
         <input type="password" placeholder="Enter Your Password" onChange={(event) => {
           setPassword(event.target.value);
           
         }}/>
         <button onClick={ async() => {
           

           await signInWithEmailAndPassword(firebaseAuth, email, password).then((response) => {
               toast.success("Logged IN Successfully")
           }).catch((error) => {
            if(error.code === 'auth/wrong-password'){
              toast.error('Please check the Password');
            }
            if(error.code === 'auth/user-not-found'){
              toast.error('Please check the Email');
            }
          })
         }}>Login</button>
         <button onClick={() => {
           navigate("/signup")
         }}>Sign Up</button>
       </div>
       <img
         src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
         alt="background"
       />
     </div>
     <ToastContainer />
   </Container></>
  );
}

export default Login;

const Container = styled.div`
  .main {
    h2{
      color: white;
    }
    height: 90vh;
    width: 100vw;
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
