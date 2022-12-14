import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <Container>
      <div className="loadingio-spinner-eclipse-21xxhrdzatf">
        <div className="ldio-2kw9j5clctv">
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default Loader;
const Container = styled.div`
display: flex;
justify-content: center;
  @keyframes ldio-2kw9j5clctv {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .ldio-2kw9j5clctv div {
    position: absolute;
    animation: ldio-2kw9j5clctv 1s linear infinite;
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 #e15b64;
    transform-origin: 80px 82px;
  }
  .loadingio-spinner-eclipse-21xxhrdzatf {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-2kw9j5clctv {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-2kw9j5clctv div {
    box-sizing: content-box;
  }
`;
