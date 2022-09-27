import React, {useState} from 'react';
import Header from '../Components/header/header';
import About from '../Components/about/about';
import Trainer from '../Components/trainer/trainer';
import Testimonial from '../Components/testimonial/testimonial';
import Footer from '../Components/footer/footer';
import styled from "styled-components";

const Home = () => {
  return (
    <>
    <Header />
    <About />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Home;