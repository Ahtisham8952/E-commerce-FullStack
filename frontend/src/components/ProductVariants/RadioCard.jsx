import { Box, useRadio, Icon, Image } from "@chakra-ui/react";


function RadioCard(props) {
  const { getInputProps, getCheckboxProps, state } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    const { isChecked } = state;

  return (
    <Box as="label" w={"100%"}>
      <input {...input} />
      <Box
        w={"100%"}
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="38px"
        fontSize={"14px"}
        color="#222222"
        fontWeight='600'
        _checked={{
          bg: "#7D31EA",
          color: "white",
          borderColor: "#FFFFFF",
          position: "relative", // Ensure the icon is positioned within the box
        }}
        _focus={{
          boxShadow: "none",
        }}
        p="9px"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="8px"
      >
        {isChecked && (
                    <Box
                      
                       h='18px' w="18px"
                       
                    >
                        <Image h='18px' w="18px" src='/whitetick.svg' alt="Selected" />
                    </Box>
                )}
        <Box>
        {props.children}
        </Box>
        
        {/* Show the check icon only when the radio is checked */}
        
      </Box>
    </Box>
  );
}

export default RadioCard;
