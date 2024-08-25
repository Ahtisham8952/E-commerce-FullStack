import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const TopHeaderBar = () => {
  return (
    <>
    
   <Box bg="#222222" w="100%"  p="22px" >
    <Box border="1px solid white" p="14px" maxW={"1120px" } w="100%" mx="auto">
    <Flex gap="20px" justifyContent={"center"}>
            <Image src="/caution.svg" />
            <Text fontSize={{base:'12px',md:'14px',lg:'18px'}} color="#FFFFFF">Warning: This product contains nicotine. Nicotine is an addictive chemical.</Text>
          </Flex>
    </Box>

   </Box>
   <Box bg="#7D31EA80" p="16px">
   <Text fontSize={{base:'12px',md:'14px',lg:'18px'}} color="#FFFFFF">Free shipping on purchases over $49 - Shipping only to ON, BC, AB, SK, MB with courier's age verification process.</Text>
   </Box>
   </>
  )
}

export default TopHeaderBar