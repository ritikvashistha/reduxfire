import React, { useEffect, useState } from "react";

import styled from "styled-components";
export default function HomePage() {
  const [datas, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Gh5YhaM77Vx1vPhdlxMWOtsQu1OkMjV3X1U8ff9z"
    )
      .then((res) => res.json())
      .then((res2) => setData(res2));
  }, []);
   console.log(datas);
   
  
  return (
    <>
      <BackWrapper img={datas.url}  >
      
        <h1>{datas.title}</h1>
      
      </BackWrapper>
<ParaWrapper>
      <h1 className ="heading">{datas.title}</h1>
      
  <p>{datas.explanation}</p>
  <b>Data Fetched on {datas.date}</b>
    </ParaWrapper>
    </>
  );
}

const BackWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  color: white;
  background-image: url(${props => props.img}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position:relative;
  
    `;
    const ParaWrapper = styled.div`
    font-size:20px;
    font-family:cursive;
    .heading{
      color:green
    }
    `;