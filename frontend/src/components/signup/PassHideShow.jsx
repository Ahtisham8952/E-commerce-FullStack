import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PassHideShow({
  Formlabel,
  Required,
  width,
  Border,
  Unique,
  nameofinput,
  FormInputVal,
  onTextChange
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isborder ,setisborder] =useState(false);
  const [style, setStyle] = useState({});
  const ColorHandler =() =>{
    setisborder(!isborder)
  }
  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setStyle({ border: '1px solid transparent' });
    } else {
      setStyle({ border: '1px solid #42CE1F' });
    }

    // Call the parent function if provided
    if (onTextChange) {
      onTextChange(e);
    }
  };

  return (
    <Box>
      <FormControl
        id="password"
        isRequired={true}
        bg={"transparent"}
        variant={"floating"}
     
      >
        {Required}
        <InputGroup>
          <Input
           name={nameofinput}
           value={FormInputVal}
           onChange={handleTextChange}
            type={showPassword ? "text" : "password"}
            
            placeholder=" "
            p="17px"
            h="54px"
            bg={"#192C45"}
            _hover={{border:'none'}}
            border="1px solid"
            borderColor={isborder ? '#42CE1F' : 'transparent'}
            borderRadius="2px"
            outline="none"
            _focusVisible={"hidden"}
            color="white"
            backdropBlur={"7px"}
          />
          {Border}
          {Unique}

          <FormLabel backgroundColor={"#192C45 !important"} color="#688DB3">
            {Formlabel}
            {width}
          </FormLabel>
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              _active="none"
              _focusVisible={"hidden"}
              _hover="none"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <ViewIcon
                  _active="none"
                  _focusVisible={"hidden"}
                  _hover="none"
                  color={"#7B82A8"}
                />
              ) : (
                <ViewOffIcon color={"#7B82A8"} />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
}
