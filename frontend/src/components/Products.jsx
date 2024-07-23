import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  
  Flex,
  Grid,
  HStack,
  Img,
  Text,
 
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { add } from '../features/Auth/cartSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
const dispatch=useDispatch()
  useEffect(() => {
    const getProductsFunction = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsFunction();
  }, []);
  const addtocart=(product)=>{
    dispatch(add(product))
  }

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //     {products.map((product) => (
    //       <div key={product.id} className="border p-4 rounded-lg shadow-lg">
    //         <img src={product.images[1]} alt={product.title} className="w-full h-48 object-cover mb-4" loading="lazy" />
    //         <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
    //         <p className="text-gray-700">${product.price}</p>
    //         <button onClick={()=>addtocart(product)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
  <Grid  templateColumns={{ base: "repeat(1, 1fr)",md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)",xl:'repeat(4, 1fr)' }}  w="100%" gap="12px" mt="40px">
    {
      products.map((product) => (
      <Box p="24px" w="100%" mb="24px" bg="#0B1926" borderRadius={"2px"} key={product} >
      <Box display={"flex"} justifyContent="space-between" pb="16px">
        <Button
          py="3px"
          fontSize={"13px"}
          h="26px"
          px="13px"
          alignItems={"center"}
          fontWeight={"600"}
          lineHeight="20px"
          borderRadius={"42px"}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box"
          color="white"
          textTransform={"uppercase"}
          css={{
            background:
              "linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #F18B14, #E64411) border-box",
            border: "1px solid transparent",
            borderRadius: "50px",
            display: "",
          }}
        >
              
          Hot Deal
        </Button>

        <Button
          py="3px"
          h="26px"
          fontSize={"13px"}
          p="3px 28px"
          fontFamily={"Poppins"}
          fontWeight="700"
          border="1px solid rgba(102, 183, 228, 1)"
          borderRadius={"42px"}
          bg="rgba(23, 23, 43, 0.7)"
          letterSpacing={"0.02em"}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #7000FF,#66B7E4) border-box"
          color="white"
          css={{
            background:
              "linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #7000FF,#66B7E4) border-box",
            border: "1px solid transparent",
            borderRadius: "50px",
            display: "",
          }}
        >
          SALE
        </Button>
      </Box>
      <Box mb="10px" position={"relative"}>
      <Link to={`/products/${product.id}`}>
        <Img h="500px" src={product.image} borderRadius={"2px"} w="100%"></Img>
        </Link>
      </Box>
      <HStack justifyContent={"space-between"}>
        <Box display={"flex"}>
          <Text
            as="span"
            color="#A1A1A1"
            fontSize="18px"
            fontWeight="700"
            lineHeight={"25px"}
            mr="3px"
          >
           277
          </Text>
          <Img src="/heart-pink.svg"></Img>
        </Box>
        <Text
          as="span"
          color="#63C5DB"
          fontSize="14px"
          fontWeight="500"
          lineHeight={"21px"}
        >
         
        </Text>
      </HStack>
      <Box mb="8px">
        <Text
          letterSpacing={"0.04em"}
          as="p"
          color="white"
          fontSize={"18px"}
          fontWeight="600"
          lineHeight={"27px"}
          textTransform="uppercase"
        >
         {product.title}
        </Text>
      </Box>
      <Box mb="10px">
      <Text
  color="#A7B3BF"
  fontSize="15px"
  fontWeight="400"
  minH="69px"
  lineHeight="22px"
  overflow="hidden"
  display="-webkit-box"
  sx={{
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  }}
>
  {product.description}
</Text>
      </Box>
      <Button
      onClick={()=>addtocart(product)}
    bgGradient="linear(to-r, teal.400, blue.500)"
    color="white"
    _hover={{
      bgGradient: "linear(to-r, teal.500, blue.600)",
      boxShadow: "xl",
    }}
    _active={{
      bgGradient: "linear(to-r, teal.600, blue.700)",
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
    </Box>
        ))}
          
          </Grid>
          </>
   
  );
};

export default Products;
