import { Box, Container, Flex, Image, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';
import MobileMenu from "./MobileMenu";
import MainMenuList from "./MainMenuList";
import { useSelector } from "react-redux";
import TopHeaderBar from "./TopHeaderBar";

const MainHeader = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <TopHeaderBar />
      <Box
       
        minH="auto"
        position={"sticky"}
        top="0"  
       bg="#272937"
    
     zIndex={'999'}
      
    
        width="100%"  // Ensure full width
      >
        <Container maxW="1752px" mx="auto">
          <Flex
            minWidth="max-content"
            justifyContent="space-between"
            alignItems="center"
            minH="112px"
          >
            <Link to="/">
              <Box>
                <Image src="/logobreeze.svg" alt="img" />
              </Box>
            </Link>
            <Box
              display={{ base: "none", lg: "flex" }}
              alignItems="center"
              justifyContent="flex-end"
              gap="20px"
              maxW="100%"
              width="100%"
            >
              <MainMenuList />
            </Box>
            <Box display={{ lg: "none" }}>
              <Flex gap="20px" alignItems="center" justifyContent="flex-end">
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
                <MobileMenu />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default MainHeader;
