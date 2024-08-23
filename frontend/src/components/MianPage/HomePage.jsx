import React from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import Products from "../Products";
import MiddleSection from "./MiddleSection";



function HomePage() {
  return (
    <Box>
      
      <HeroSection />
      <Products />
      <MiddleSection/>
   

     
   
    </Box>
  );
}

export default HomePage;
