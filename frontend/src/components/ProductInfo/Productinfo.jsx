import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Productinfo = ({productname}) => {
  return (
    <Box maxW={"1120px"} w='100%' mx="auto" my="40px"> 
    <Flex w="100%" alignItems={"center"} flexDirection={{base:'column',md:'row'}}>
      <Box w={{base:'100%',md:'50%'}} mb={{base:'20px',md:'0px'}}>
      <Text color="#FEFFFD" fontSize="45px" fontWeight="600" mb="40px">{productname}</Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box p={{base:'10px',md:'25px'}}>
          <Image mx="auto" src="blow1.svg"></Image>
          <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600">2000 puffs</Text>
        </Box>
        <Box p={{base:'10px',md:'25px'}}>
          <Image mx="auto" src="Battery.svg"></Image>
          <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600">1000mAh <br/> Internal Battery</Text>
        </Box>
        <Box p={{base:'10px',md:'25px'}}>
          <Image mx="auto" src="Hammer.svg"></Image>
          <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600">Excellent 
           <br/> Craftsmenship</Text>
        </Box>
      </Flex>
      </Box>
      <Box w={{base:'100%',md:'50%'}}  borderLeft={"1px solid white"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} pl={{base:'12px',md:'24px'}} mb="20px">
        <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600" textAlign={"left"}>More Puffs</Text>
        <Text color="#FEFFFD" fontSize={{base:'10px',md:'14px'}} fontWeight="400" textAlign={"end"}>Enjoy ample vaping sessions with extended usage time.</Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} pl={{base:'12px',md:'24px'}} mb="20px">
        <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600" textAlign={"left"}>Longer Lasting</Text>
        <Text color="#FEFFFD" fontSize={{base:'10px',md:'14px'}} fontWeight="400" textAlign={"end"}>Robust battery capacity for reliable performance.</Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} pl={{base:'12px',md:'24px'}} mb="20px">
        <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600" textAlign={"left"}>Pre-filled E-juice</Text>
        <Text color="#FEFFFD" fontSize={{base:'10px',md:'14px'}} fontWeight="400" textAlign={"end"}>Generous e-liquid capacity in a range of flavors for varied preferences.</Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} pl={{base:'12px',md:'24px'}} mb="20px">
        <Text color="#FEFFFD" fontSize={{base:'12px',md:'16px'}} fontWeight="600" textAlign={"left"}>Integrated Mesh Coil</Text>
        <Text color="#FEFFFD" fontSize={{base:'10px',md:'14px'}} fontWeight="400" textAlign={"end"}>Meticulously engineered for enhanced vapor production and flavor.</Text>
        </Flex>
     
      </Box>
   
    </Flex>
   </Box>
  )
}

export default Productinfo