import { useEffect,useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
 import Services from "./Services";
 import Contact from "./Contact";
// import {AppContext} from './context'

const Home = () => {
  // const data={
  //   name:"Trina Dasgupta",
  //   image:"./images/hero.svg",
  //   about:"This is Me"
  // };
   const { updateHomePage } = useGlobalContext();

   useEffect(() => updateHomePage(), []);

  return (
    <>
      {/* <HeroSection {...data}/> */}
      <HeroSection />
      <Services />
      <Contact /> 
    </>
  );
};

export default Home;