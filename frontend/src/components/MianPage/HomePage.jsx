import React from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import Products from "../Products";



function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Products />
     
   
    </Box>
  );
}

export default HomePage;
