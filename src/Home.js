import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
// import { useProductContext } from './context/ProductContext'
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
  //const {myName} = useProductContext(); //similarly fetched here for global use;
  const data = {
    name: "Shopper Stuff",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
