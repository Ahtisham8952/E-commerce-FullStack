import { Box, Container, Flex, Image,  Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';
import MobileMenu from "./MobileMenu";
import MainMenuList from "./MainMenuList";
import SearchBox from "./SearchBox";
import MenuBtns from "./MenuBtns";
import TopHeader from "./TopHeader";

const MainHeader = () => {
  return (
    <>
      <Box position="relative" zIndex="99999">
      <TopHeader />
      <Box bg={"#2C344434"} minH="auto" position={"relative"} zIndex={"999"}>
        <Container maxW="1752px" mx="auto">
          <Flex
            minWidth="max-content"
            justifyContent="space-between"
            alignItems="center"
            minH="112px"
          >
            <Link to="/" >
              <Box>
                {/* <Image src="/marketplace-logo.svg" alt="img" /> */}
                <Image  src="/logobreeze.svg" alt="img" />
                
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

              {/* <SearchBox /> */}
              {/* <Button
              bg="transparent"
              p="0"
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
              border="none"
              height="24px"
              width="24px"
            >
              <Image src="/market-search-icon.svg" alt="icon" />
            </Button> */}

              {/* <MenuBtns /> */}
            </Box>
            <Box display={{ lg: "none" }}>
              <Flex gap="20px" alignItems="center" justifyContent="flex-end">
                <SearchBox />
                <MobileMenu />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
      </Box>
    </>
  );
};

export default MainHeader;
