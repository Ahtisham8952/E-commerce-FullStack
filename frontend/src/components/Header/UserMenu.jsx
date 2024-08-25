import {
  Button,
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Link,
  Badge,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisplayUser } from "../../context/UserContextProvider";

const UserMenu = () => {
  const { user, setUser } = useDisplayUser();
  if (!user) {
    <Box>   Hello, <Box color="white">Sign In</Box></Box>
  }
  return (
    <>
   
      <Box color="white" w={"100px"} display={"flex"} gap={"10px"} alignItems={"center"}>
       
        <Text>Hello,</Text>
       <Box>{user.username}</Box>
       
      </Box>
    </>
  );
};

export default UserMenu;
