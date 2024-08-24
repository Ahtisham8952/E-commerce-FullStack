import React, { useState, useEffect } from 'react';
import { Box, Button, Img, Text, VStack, HStack, Heading, Spinner, Divider, Container, Badge, Image, Flex, UnorderedList, ListItem, useToast } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../../features/Auth/cartSlice';
import ProductVariants from '../ProductVariants/ProductVariants';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductDetail = () => {
  const [counter, setCounter] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const getProductFunction = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/products/${productId}`);
        const data = response.data;
        setProduct(data);
        // Set the default variant if it exists
        if (data.mgVariants && data.mgVariants.length > 0) {
          setSelectedVariant(data.mgVariants[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProductFunction();
  }, [productId]);

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="teal.500" />
      </Box>
    );
  }

  const addToCart = () => {
    if (counter > 0 && selectedVariant !== null) {
      const productWithDetails = {
        ...product,
        quantity: counter,
        selectedVariant: selectedVariant,
      };
      dispatch(add(productWithDetails));
      toast({
        title: "Added to Cart",
        description: `${counter} ${product.title} with ${selectedVariant} mg added to your cart.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Missing Information",
        description: "Please select a quantity and variant before adding to the cart.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Container maxW="7xl" py={12}>
      <HStack spacing={10}>
        <Box>
          <Img src={product.image} alt={product.title} />
        </Box>
        <VStack align="start" spacing={4}>
          <Heading as="h1" size="36px" color='#FFFFFF'>{product.title}</Heading>
          <Text fontSize="18px" color="#FFFFFF">{product.description}</Text>
          <Badge colorScheme="teal" fontSize="lg">${product.price}</Badge>
          <Divider />
          <Flex gap="20px">
            <Image src="/caution.svg" />
            <Text fontSize="18px" color="#FFFFFF">Warning: This product contains nicotine. Nicotine is an addictive chemical.</Text>
          </Flex>
          <Divider />
          <Box mb="8px" w="50%" bg="rgba(255, 255, 255, 0.77)" borderRadius={"50px"}>
            <ProductVariants 
              mgVariants={product.mgVariants} 
              selectedVariant={selectedVariant} 
              onChange={(value) => setSelectedVariant(value)} 
            />
          </Box>
          <Box>
            <Flex gap="20px" alignItems={"center"}>
              <Button
                onClick={() => setCounter(counter - 1)}
                colorScheme='#FFFFFFED'
                bg={"#FFFFFFED"}
                color="white"
                _focus={{ outline: 'none' }} 
                _focusVisible={{ outline: 'none' }}  
                borderRadius="50%"
                h="30px"
                w='30px'
                p="0px"
                fontSize="lg"
                fontWeight="bold"
              >
                <Image src="/minuscounter.svg" />
              </Button>
              <Text color="#FFFFFF" fontSize="24px" fontWeight="600">
                {counter}
              </Text>
              <Button
                onClick={() => setCounter(counter + 1)}
                colorScheme='#FFFFFFED'
                bg={"#FFFFFFED"}
                color="white"
                _focus={{ outline: 'none' }} 
                _focusVisible={{ outline: 'none' }}  
                borderRadius="50%"
                h="30px"
                w='30px'
                p="0px"
                fontSize="lg"
                fontWeight="bold"
              >
                <Image src="/pluscounter.svg" />
              </Button>
            </Flex>
          </Box>
          <Button
            onClick={addToCart}
            colorScheme='#7D31EA'
            bg={"#7D31EA"}
            color="white"
            borderRadius="md"
            shadow="md"
            py={6}
            px={8}
            fontSize="lg"
            fontWeight="bold"
          >
            Add to cart
          </Button>
        </VStack>
      </HStack>
      <Box textAlign={"left"} mt='40px'>
        <Text color="#FFFFFF" fontSize="18px" fontWeight="400" mb="20px">Product Overview</Text>
        <Text color="#FFFFFF" fontSize="18px" fontWeight="400" mb="20px">Experience the timeless allure of classic red fruits, infused with a chilling sensation that elevates the familiar flavours to new levels of coolness and satisfaction.</Text>
        <Text color="#FFFFFF" fontSize="18px" fontWeight="400">Introducing ELFBAR BC 10000:</Text>
        <UnorderedList styleType="'-'" color="#FFFFFF" fontSize="18px" fontWeight="400">
          <ListItem>18 ml e liquid capacity</ListItem>
          <ListItem>20 mg throat hit</ListItem>
          <ListItem>10000 puffs</ListItem>
          <ListItem>Type C Charging cable</ListItem>
          <ListItem>Quaq mesh coil</ListItem>
          <ListItem>620 mAh rechargeable battery</ListItem>
          <ListItem>Ergonomic design</ListItem>
        </UnorderedList>
        <Text color="#FFFFFF" fontSize="18px" fontWeight="400" my="20px">ELFBAR BC 10000 is the pinnacle of disposable vapes. Elevate your vaping journey with an extraordinary 18ml e-liquid capacity, ensuring prolonged enjoyment without interruptions. Experience a powerful 20mg throat hit that delivers a satisfying punch with every draw. With an impressive capability of 10000 puffs, this device ensures enduring satisfaction. Embrace the convenience of a Type-C charging cable, ensuring swift and efficient recharging for the 620mAh rechargeable battery. The cutting-edge Quaq mesh coil technology guarantees an unparalleled flavor experience, complemented by the ergonomic design for a comfortable grip. Unleash the power of BC 10000 – where capacity, technology, and design converge for an exceptional vaping experience.</Text>
      </Box>
    </Container>
  );
};

export default ProductDetail;
