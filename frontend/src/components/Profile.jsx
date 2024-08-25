import React from 'react';
import { Box, Flex, Avatar, Heading, Text, Button, Center, Image, IconButton, Stack, } from '@chakra-ui/react';
import { FaUserPlus, FaEnvelope } from 'react-icons/fa';
import { useDisplayUser } from '../context/UserContextProvider';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const MotionHeading = motion(Heading);
const Profile = () => {
  const { user } = useDisplayUser();

  if (!user || !user.email) {
    return <div>Please Login</div>;
  }

  return (
    <Box 
    w="100%"
   
   backgroundImage="url('bgblue.webp')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    p="40px"
  >
        <MotionHeading
      fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
      color="white"
      textAlign="center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Welcome to Breeze
    </MotionHeading>
      <Box p="20px"  w={{base:'100%',md:'50%'}} mx="auto">
    
      
  <Box  

      
      bg="#161A2D" // Semi-transparent background
      backdropFilter="blur(10px)" // Blurred background effect
      borderRadius="15px" // Rounded corners
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Soft shadow for depth
      border="1px solid rgba(255, 255, 255, 0.3)" // Border for a frosted effect
      p="20px" >
    <Box position={"relative"} >
      <Image w='100%' h="200px" objectFit={"cover"} borderRadius={"10px"} src={user.coverImage}></Image>
      
    </Box>
    <Box display={"flex"} justifyContent={"center"} mt="-60px" position={"relative"} zIndex={"999"}  >
    <Image w="100px" h="100px" borderRadius={"50%"} src={user.avatar}></Image>
    </Box>
    <Box textAlign={"center"} mt="20px">
      <Box borderBottom={"1px solid white"}  mb='10px' pb="5px" >
        <Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="white"
              
              >
              Name
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="white"
              
              >
               {user.fullName}
              </Text>

        </Flex>

      </Box>
      <Box borderBottom={"1px solid white"}  mb='10px' pb="5px"  >
        <Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="white"
              
              >
              username
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="white"
              
              >
               {user.username}
              </Text>

        </Flex>

      </Box>
      <Box borderBottom={"1px solid white"}  mb='10px' pb="5px"  >
        <Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="white"
              
              >
              email
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="white"
              
              >
               {user.email}
              </Text>

        </Flex>

      </Box>
      <Box borderBottom={"1px solid white"}  mb='10px' pb="5px"  >
        <Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="white"
              
              >
              Address
              </Text>
              <Text
                fontSize="14px"
                lineHeight="34px"
                fontWeight="400"
                color="white"
              
              >
               {user.address}
              </Text>

        </Flex>

      </Box>
      <Box borderBottom={"1px solid white"}  mb='10px' pb="5px"  >
        <Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="white"
              
              >
              Phone
              </Text>
              <Text
                fontSize="14px"
                lineHeight="34px"
                fontWeight="400"
                color="white"
              
              >
               {user.phonenumber}
              </Text>

        </Flex>

      </Box>
      <Button
           as={Link}
           to={"/cart"}
            colorScheme='#7D31EA'
            bg={"#7D31EA"}
            color="white"
            borderRadius="md"
            shadow="md"
            py={6}
            px={8}
            fontSize="lg"
            fontWeight="bold"
          >
           Go to Cart
          </Button>
    
             
    </Box>

  </Box>
  </Box>
    </Box>
  );
};

export default Profile;
