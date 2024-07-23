import {
    Button,
    Box,
    Image,
    Link,
    Text,
    PopoverTrigger,
    Popover,
    PopoverContent,
    PopoverBody,
    Input,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const SearchBox = () => {
  return (
    <>
      <Box
        position="relative"
        width="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <Button
              bg="transparent"
              p="0"
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
              border="none"
              height="24px"
              width="24px"
            >
              <Image src="/market-search-icon.svg" alt="icon" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            position="absolute"
            right={{md: "-30px", base: "-100px"}}
            top="75px"
            p="20px"
            bg="#162333"
            border="1px solid rgba(74, 96, 124, 0.2) !important"
            borderRadius="0px 0px 8px 8px"
            width={{sm: "446px", base: "300px"}}
          >
            <PopoverBody>
              <Box
                bg="#223752"
                width="100%"
                height="48px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="2px"
                px="24px"
                py="12px"
              >
                <Input
                  placeholder="Search"
                  color="#688DB3"
                  fontSize="14px"
                  fontWeight="400"
                  border="none"
                  outline="none"
                  p="0"
                />
                <Box height="20px" width="20px">
                  <Image src="https://enochdev.com/marketplace/search_icon.svg" alt="icon" />
                </Box>
              </Box>
              <Box
                my="16px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  fontSize="20px"
                  lineHeight="20px"
                  fontWeight="600"
                  color="#FFFFFF"
                >
                  Recent
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="500"
                  color="#1DB4F4"
                >
                  Clear
                </Text>
              </Box>

              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
                flexWrap={"wrap"}
                borderBottom="1px solid #4A607C"
                pb="16px"
                mb="16px"
              >
                <Box textAlign="center" >
                  <Box
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mx={"auto"}
                  >
                    <Image
                      src="https://enochdev.com/marketplace/search-people-img.png"
                      alt="img"
                      mx="auto"
                    />
                  </Box>
                  <Link
                    href="#"
                    fontSize="13px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="#FFFFFF"
                  >
                    @username
                  </Link>
                </Box>

                <Box textAlign="center" >
                  <Box
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mx={"auto"}
                  >
                    <Image
                      src="https://enochdev.com/marketplace/search-people-img.png"
                      alt="img"
                      mx="auto"
                    />
                  </Box>
                  <Link
                    href="#"
                    fontSize="13px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="#FFFFFF"
                  >
                    @username
                  </Link>
                </Box>

                <Box textAlign="center" >
                  <Box
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mx={"auto"}
                  >
                    <Image
                      src="https://enochdev.com/marketplace/search-people-img.png"
                      alt="img"
                      mx="auto"
                    />
                  </Box>
                  <Link
                    href="#"
                    fontSize="13px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="#FFFFFF"
                  >
                    @username
                  </Link>
                </Box>

                <Box textAlign="center" >
                  <Box
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    overflow="hidden"
                    mx={"auto"}
                  >
                    <Image
                      src="https://enochdev.com/marketplace/search-people-img.png"
                      alt="img"
                      mx="auto"
                    />
                  </Box>
                  <Link
                    href="#"
                    fontSize="13px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="#FFFFFF"
                  >
                    @username
                  </Link>
                </Box>
              </Box>

              <UnorderedList
                listStyleType="none"
                fontSize="14px"
                lineHeight="24px"
                fontWeight="500"
                color="#FFFFFF"
                ml="0px"
              >
                <ListItem mt="0px">Suggested Search</ListItem>
                <ListItem mt="16px">Suggested Search</ListItem>
                <ListItem mt="16px">Suggested Search</ListItem>
              </UnorderedList>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default SearchBox;
