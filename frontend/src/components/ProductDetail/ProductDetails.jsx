import React, { useState, useEffect } from 'react';
import { Box, Button, Img, Text, VStack, HStack, Heading, Spinner, Divider, Container, Badge } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../../features/Auth/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductFunction = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
        const data = response.data;
        setProduct(data);
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
    dispatch(add(product));
  };

  return (
    <Container maxW="7xl" py={12}>
      <HStack spacing={10}>
        <Box flex="1" boxShadow="xl" borderRadius="lg" overflow="hidden">
          <Img src={product.image} alt={product.title} objectFit="cover" w="100%" />
        </Box>
        <VStack flex="1" align="start" spacing={4}>
          <Heading as="h1" size="xl">{product.title}</Heading>
          <Badge colorScheme="teal" fontSize="lg">${product.price}</Badge>
          <Divider />
          <Text fontSize="lg">{product.description}</Text>
          <Divider />
          <Button
            onClick={addToCart}
            bgGradient="linear(to-r, teal.400, blue.500)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, teal.500, blue.600)",
              boxShadow: "xl",
            }}
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
    </Container>
  );
};

export default ProductDetail;
