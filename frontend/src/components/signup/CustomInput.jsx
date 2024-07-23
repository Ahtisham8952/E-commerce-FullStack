import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import React, { useState } from 'react';

const CustomInput = ({ Formlabel, width, FormInputVal, onTextChange, nameofinput }) => {
  const [style, setStyle] = useState({});

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
        bg={"transparent"}
        variant={"floating"}
        id="first-name"
        isRequired={true}
      >
        <Input
          name={nameofinput}
          value={FormInputVal}
          onChange={handleTextChange}
          type={"text"}
          placeholder=" "
          p="17px"
          h="54px"
          bg={"#192C45"}
          style={style}
          border="1px solid"
          borderColor={"transparent"}
          _hover={{ border: 'none' }}
          borderRadius="2px"
          outline="none"
          color="white"

        />
        <FormLabel backgroundColor={"#192C45 !important"} color="#688DB3">
          {Formlabel}
          {width}
        </FormLabel>
      </FormControl>
    </Box>
  );
};

export default CustomInput;
