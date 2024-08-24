import { Box, Flex, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

function ProductVariants({ mgVariants, selectedVariant, onChange }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mgVariants',
    value: selectedVariant ? selectedVariant.toString() : '', // Handle null or undefined selectedVariant
    onChange: (value) => onChange(parseInt(value, 10)),
  });

  const group = getRootProps();

  return (
    <Flex {...group} bg='#2729370D' w="100%" borderRadius={"50px"} p="8px" display={"flex"} gap="10px">
      {mgVariants.map((value) => {
        const radio = getRadioProps({ value: value.toString() });
        return (
          <RadioCard key={value} {...radio}>
            {value} mg
          </RadioCard>
        );
      })}
    </Flex>
  );
}

export default ProductVariants;
