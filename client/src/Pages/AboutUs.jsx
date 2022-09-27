import React, {useState} from 'react';
import AboutAll from '../Components/about/aboutall';
import Footer from '../Components/footer/footer';
import styled from "styled-components";


const Top = styled.div`
  margin-top: 200px;
  `;

const AboutUs = () => {
  return (
    <>
    <Top />
    <AboutAll />
    <Footer />
    </>
  )
}

export default AboutUs;