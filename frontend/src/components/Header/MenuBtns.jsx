import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

const MenuBtns = () => {
  return (
    <>
      <Flex gap="20px" alignItems="center" flexDirection={{base: "column", lg: "row"}}>
        <Menu>
          <MenuButton
            bg="transparent"
            color="#FFF"
            border="1px solid #F0FCFB"
            borderRadius="50px"
            height={{ base: "45px", xl: "54px" }}
            minWidth="max-content"
            maxWidth={{ base: "190px", lg: "140px", xl: "190px" }}
            width="100%"
            fontSize={{ base: "16px", lg: "12px", xl: "16px" }}
            lineHeight="24px"
            fontWeight="600"
            as={Button}
            leftIcon={
              <Image src="/eth-icon.svg" alt="icon" />
            }
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent"}}

          >
            <Text>ETH MAINNET</Text>
          </MenuButton>
          <MenuList bg="#2C3444">
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
          </MenuList>
        </Menu>
        <Button
          bg="transparent"
          color="#FFF"
          border="1px solid #F0FCFB"
          borderRadius="50px"
          height={{ base: "45px", xl: "54px" }}
          maxW={{ base: "190px", lg: "140px", xl: "190px" }}
          width="100%"
          fontSize={{ base: "16px", lg: "12px", xl: "16px" }}
          lineHeight="24px"
          fontWeight="600"
          textTransform="uppercase"
          as={Button}
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
        >
          Connect Wallet
        </Button>
      </Flex>
    </>
  );
};

export default MenuBtns;
