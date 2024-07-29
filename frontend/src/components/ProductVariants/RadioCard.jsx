import { Box, useRadio } from "@chakra-ui/react"

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label"   w={"100%"} >
        <input {...input} />
        <Box
        w={"100%"}
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="38px"
       
          color="#272937BF"
          _checked={{
            bg: "#7D31EA",
            color: "white",
            borderColor: "#FFFFFF",
          }}
          _focus={{
            boxShadow: "none",
          }}
       p="9px"
        >
          {props.children}
        </Box>
      </Box>
    )
  }
export default  RadioCard