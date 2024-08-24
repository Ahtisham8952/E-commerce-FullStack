import React from 'react';
import { Box, Flex, Avatar, Heading, Text, Button, Center, Image, IconButton, Stack, } from '@chakra-ui/react';
import { FaUserPlus, FaEnvelope } from 'react-icons/fa';
import { useDisplayUser } from '../context/UserContextProvider';

const Profile = () => {
  const { user } = useDisplayUser();

  if (!user || !user.email) {
    return <div>Please Login</div>;
  }

  return (
    <Box 
    w="100%"
    h="100vh"
    backgroundImage="url('profilebg.png')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    display="flex"
    flexDirection={{ base: "column", md: "column", lg: "row" }}
    alignItems="center"
    justifyContent="center">
      <Box p="20px"  w={{base:'100%',md:'30%'}}>

      
  <Box  

      
      bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
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
      <Box bg="white" p='10px' borderRadius={"10px"} mb='10px' >
        <Flex justifyContent={"space-between"}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="#000000"
              
              >
              Name
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="#000000"
              
              >
               {user.fullName}
              </Text>

        </Flex>

      </Box>
      <Box bg="white" p='10px' borderRadius={"10px"} mb="10px"  >
        <Flex justifyContent={"space-between"}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="#000000"
              
              >
              username
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="#000000"
              
              >
               {user.username}
              </Text>

        </Flex>

      </Box>
      <Box bg="white" p='10px' borderRadius={"10px"} mb="10px"  >
        <Flex justifyContent={"space-between"}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="#000000"
              
              >
              email
              </Text>
              <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="400"
                color="#000000"
              
              >
               {user.email}
              </Text>

        </Flex>

      </Box>
      <Box bg="white" p='10px' borderRadius={"10px"} mb="10px"  >
        <Flex justifyContent={"space-between"}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="#000000"
              
              >
              Address
              </Text>
              <Text
                fontSize="14px"
                lineHeight="34px"
                fontWeight="400"
                color="#000000"
              
              >
               {user.address}
              </Text>

        </Flex>

      </Box>
      <Box bg="white" p='10px' borderRadius={"10px"} mb="10px"  >
        <Flex justifyContent={"space-between"}>
        <Text
                fontSize="24px"
                lineHeight="34px"
                fontWeight="600"
                color="#000000"
              
              >
              Phone
              </Text>
              <Text
                fontSize="14px"
                lineHeight="34px"
                fontWeight="400"
                color="#000000"
              
              >
               {user.phonenumber}
              </Text>

        </Flex>

      </Box>
    
             
    </Box>

  </Box>
  </Box>
    </Box>
  );
};

export default Profile;
