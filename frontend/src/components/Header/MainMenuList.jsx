import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';
const MainMenuList = ({onMenuLinkClick }) => {
  const handleClick = () => {
    if (onMenuLinkClick) {
      onMenuLinkClick();
    }
  };
  return (
    <>
      <Flex
        minWidth="max-content"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "25px", lg: "none" }}
        maxW={{ base: "100%", lg: "390px", xl: "531px" }}
        w="100%"
        ml="auto"
        color="#F0FCFB"
        fontSize={{ base: "18px", lg: "14px", xl: "18px" }}
        lineHeight="27px"
        fontWeight="600"
        letterSpacing="0.04em"
        textTransform="uppercase"
      >
        <Link onClick={handleClick} to="/products" _hover={{ textDecoration: "none", opacity: "80%" }}>
          Products
        </Link>
        <Link onClick={handleClick} to="/login" _hover={{ textDecoration: "none" }}>
        Login
        </Link>
        <Link onClick={handleClick} to="/signup" _hover={{ textDecoration: "none" }}>
          Signup
        </Link>
        <Link onClick={handleClick} to="/profile" _hover={{ textDecoration: "none" }}>
          Profile
        </Link>
      </Flex>
    </>
  );
};

export default MainMenuList;
