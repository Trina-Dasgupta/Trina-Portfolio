import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from "./context";

const About = () => {
  // const data={
  //   name:"MERN Developer",
  //   image:"./images/about1.svg",
  //   about:"I am experienced"
  // };
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);
  return (
    // <HeroSection {...data}/>
    <HeroSection/>
  )
}

export default About