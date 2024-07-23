import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Badge,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AfterLogInMenu = () => {
  return (
    <>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <Box
              bg="transparent"
              color="#FFF"
              as={Button}
              p="0"
              rightIcon={<ChevronDownIcon />}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                fontSize="14px"
                gap="8px"
              >
                <Box
                  border="1px solid #FFFFFF"
                  borderRadius="50%"
                  h="32px"
                  w="32px"
                  background="#C4C4C4"
                  position="relative"
                >
                  <Box
                      borderRadius="50%"
                      h="32px"
                      w="32px"
                      overflow="hidden"
                    >
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/menu-avater.png"
                      alt="img"
                      h="100%"
                      w="100%"
                    />
                  </Box>
                  <Badge
                    height="9.6px"
                    width="9.6px"
                    bg="#86CE23"
                    border="1px solid #FFFFFF"
                    borderRadius="50%"
                    position="absolute"
                    top="4px"
                    left="24px"
                  ></Badge>
                </Box>
                Hello, <Box>@Hulk</Box>
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent border="none" borderRadius="0px" maxW="248px" top="5px">
            <PopoverBody p="0px" borderRadius="0px" bg="#14283D">
              <Flex
                p="16px"
                bg="#0B1926"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex gap="8px" alignItems="center">
                  <Box
                    border="1px solid rgba(208, 227, 255, 0.3)"
                    borderRadius="50%"
                    height={{ sm: "30px", base: "26px" }}
                    width={{ sm: "30px", base: "26px" }}
                    background="#C4C4C4"
                    position="relative"
                  >
                    <Box
                      borderRadius="50%"
                      height={{ sm: "30px", base: "26px" }}
                      width={{ sm: "30px", base: "26px" }}
                      overflow="hidden"
                    >
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/menu-avater.png"
                      alt="img"
                      h="100%"
                      w="100%"
                    />
                    </Box>
                    <Badge
                      position="absolute"
                      bg="#86CE23"
                      border="1px solid #FFFFFF"
                      borderRadius="50%"
                      top="-2px"
                      right="-2px"
                      h="9.5px"
                      w="9.5px"
                    ></Badge>
                  </Box>
                  <Link
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="170.23%"
                    color="#FFFFFF"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                  >
                    @Hulk
                  </Link>
                </Flex>

                <Link
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="170.23%"
                  color="#1DB4F4"
                  textDecoration="underline"
                  _hover={{ opacity: "0.8" }}
                >
                  Change
                </Link>
              </Flex>

              <Box
                fontWeight="500"
                fontSize="14px"
                lineHeight="260%"
                color="#99BBE2"
                px="16px"
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  pb="13px"
                  borderBottom="1px solid #688DB3"
                  pt="6px"
                >
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Become Artist
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Your Public Profile
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Your shop
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                   Your Orders
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Your lists
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                    position="relative"
                  >
                    Follower Requests
                    <Badge
                      position="absolute"
                      top="10px"
                      right="0px"
                      bg="#1DB4F4"
                      h="20px"
                      w="20px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      fontSize="14px"
                      fontWeight="700"
                      color="#FFFFFF"
                      fontFamily="DIN 2014"
                    >
                      9
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Invite a Friend
                  </Link>
                </Box>

                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  pb="13px"
                  pt="6px"
                >
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Setting
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none", opacity: "0.8" }}
                    w="100%"
                    color="#F22D13"
                  >
                    Logout
                  </Link>
                </Box>
              </Box>

              <Box
                fontWeight="700"
                fontSize="14px"
                lineHeight="170.23%"
                textTransform="uppercase"
                color="#D5F0F9"
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                gap="1px"
              >
                <Link
                  bg="#0B1926"
                  px="16px"
                  py="6px"
                  _hover={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    bg: "#5E647C",
                  }}
                  w="100%"
                >
                  GO TO MarketPlace
                </Link>
                <Link
                  bg="#0B1926"
                  px="16px"
                  py="6px"
                  _hover={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    bg: "#5E647C",
                  }}
                  w="100%"
                >
                  Switch to Enoch Website
                </Link>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default AfterLogInMenu;
