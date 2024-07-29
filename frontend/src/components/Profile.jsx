import React from 'react';
import { Box, Flex, Avatar, Heading, Text, Button, Center, Image, IconButton } from '@chakra-ui/react';
import { FaUserPlus, FaEnvelope } from 'react-icons/fa';
import { useDisplayUser } from '../context/UserContextProvider';

const Profile = () => {
  const { user } = useDisplayUser();

  if (!user || !user.email) {
    return <div>Please Login</div>;
  }

  return (
    <Box h="100vh" display={"flex"} justifyContent={"center"} alignItems={"center"} bgGradient="linear(to-r, #7D31EA, #7D31EA)">
      <Box 
        bg="white" 
       maxW={"1440px"}
       width={"100%"}
       m="auto"
       
        p={6} 
        borderRadius="md" 
        boxShadow="lg" 
        textAlign="center" 
        position="relative"
      >
        <Image 
          src={user.coverImage} 
          alt="Cover Image" 
          borderRadius="md" 
          mb={-12} 
          objectFit="cover" 
          w="100%" 
          h="100px"
        />
        <Avatar size="xl" src={user.avatar} name={user.fullName} mb={4} mt={-16} border="4px solid white" />
        <Heading as="h2" size="lg" mb={2}>{user.fullName}</Heading>
        <Text fontSize="lg" color="gray.500" mb={2}>{user.username}</Text>
        <Text fontSize="md" color="gray.600" mb={4}>{user.email}</Text>
        <Flex justify="center" mb={4}>
          <IconButton 
            icon={<FaUserPlus />} 
            aria-label="Connect" 
            variant="ghost" 
            colorScheme="pink" 
            mr={2}
          />
          <IconButton 
            icon={<FaEnvelope />} 
            aria-label="Message" 
            variant="ghost" 
            colorScheme="pink"
          />
        </Flex>
        <Flex justify="center" mb={4}>
          <Box textAlign="center" px={4}>
            <Text fontSize="lg" fontWeight="bold">{user.friends || 65}</Text>
            <Text fontSize="sm" color="gray.600">Friends</Text>
          </Box>
          <Box textAlign="center" px={4}>
            <Text fontSize="lg" fontWeight="bold">{user.photos || 43}</Text>
            <Text fontSize="sm" color="gray.600">Photos</Text>
          </Box>
          <Box textAlign="center" px={4}>
            <Text fontSize="lg" fontWeight="bold">{user.comments || 21}</Text>
            <Text fontSize="sm" color="gray.600">Comments</Text>
          </Box>
        </Flex>
        <Button colorScheme="pink" variant="solid">Show more</Button>
      </Box>
    </Box>
  );
};

export default Profile;
