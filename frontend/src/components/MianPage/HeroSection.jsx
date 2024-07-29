import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Products from '../Products'

const HeroSection = () => {
  return (
   <>
   <Image objectFit={"cover"} objectPosition={"right"} w='100%' src="/bannermain.png"></Image>
   <Box>
   <Products/>
   </Box>
   </>
  )
}

export default HeroSection