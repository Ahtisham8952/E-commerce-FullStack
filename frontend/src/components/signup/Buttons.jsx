import { Box, Button } from "@chakra-ui/react";
import React from "react";
export const Buttons = ({ Text, Width, Maxwidth, Raduis,btntype }) => {
  return (
    <Box>
      <Button
      type={btntype}
        bg={"linear-gradient(97.3deg, #1386F0 0%, #1673FF 100%)"}
        w={"100%"}
        maxWidth={Maxwidth}
        h="48px"
        color={"white"}
        fontFamily=""
        _hover={"none"}
        borderRadius="2px"
        py={"12px"}
        px="51px"
        fontSize={{ base: "16px", md: "14px", xl: "16px" }}
      >
        {Text}
        {Raduis}
      </Button>
    </Box>
  );
};
