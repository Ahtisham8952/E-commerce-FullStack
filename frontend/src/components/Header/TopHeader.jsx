import { Box, Container, Flex, Image,  Badge, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import UserMenu from "./UserMenu";
import AfterLogInMenu from "./AfterLogInMenu";
import { useSelector } from "react-redux";
const TopHeader = () => {


  const items=useSelector((state)=>state.cart)
  return (
    <>
      <Box height="auto" position={"relative"} zIndex={"1111"}>
        <Container maxW="1752px" mx="auto">
          <Flex
            minWidth="max-content"
            justifyContent="flex-end"
            alignItems="center"
            minH="64px"
            gap="42px"
          >
            <Box>
              <UserMenu />
             
            </Box>
            <Link
              to="/cart"
              display="flex"
              gap="16px"
              color="white"
              bg="transparent"
              fontSize="14px"
              
            >
              <Box display={"flex"} alignItems={"center"} gap="10px">

              
              <Box position="relative">
                <Image src="/cart-icon.svg" alt="icon" />
                <Badge
                  borderRadius="50%"
                  height="21px"
                  width="21px"
                  bg="#DD490A"
                  border="1px solid #B13906"
                  color="#fff"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  top="-8px"
                  right="-8px"
                >
               {items.length}
                </Badge>
              </Box>
              <Text as="span" color="white"> Cart</Text>
              </Box>
             
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TopHeader;
