import {
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import MainMenuList from "./MainMenuList";
import SearchBox from "./SearchBox";
import MenuBtns from "./MenuBtns";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <HamburgerIcon color="#FFFFFF" fontSize="32px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" />
        <DrawerContent bg="#0A1622" minW={{ base: "100%", sm: "50%" }}>
          <DrawerCloseButton color="#FFFFFF" fontSize="20px" />
          <DrawerHeader py="50px">
            <Link href="#">
              <Box>
                <Image
                  src="https://enochdev.com/marketplace/logo.svg"
                  alt="img"
                  maxW="150px"
                  mx="auto"
                />
              </Box>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection="column" gap="25px" alignItems="center" justifyContent="center">
              <MainMenuList />
              <MenuBtns />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
