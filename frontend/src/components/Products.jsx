import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Img,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Flex,
  useToast
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { add } from '../features/Auth/cartSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductVariants from './ProductVariants/ProductVariants';
import Productinfo from './ProductInfo/Productinfo';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [counters, setCounters] = useState({}); // State object to manage counters by product ID
  const [selectedVariants, setSelectedVariants] = useState({}); // State object to manage selected variants by product ID
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const getProductsFunction = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        const data = response.data;
        setProducts(data);

        // Initialize counters and selectedVariants for all products
        const initialCounters = {};
        const initialSelectedVariants = {};
        data.forEach(product => {
          initialCounters[product.id] = 0;
          initialSelectedVariants[product.id] = product.mgVariants?.[0] || null; // Set default variant if available
        });
        setCounters(initialCounters);
        setSelectedVariants(initialSelectedVariants);

      } catch (error) {
        console.log(error);
      }
    };

    getProductsFunction();
  }, []);

  const addToCart = (product, counter, selectedVariant) => {
    if (counter > 0 && selectedVariant) {
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

  const incrementCounter = (productId) => {
    setCounters(prevCounters => ({
      ...prevCounters,
      [productId]: prevCounters[productId] + 1,
    }));
  };

  const decrementCounter = (productId) => {
    setCounters(prevCounters => ({
      ...prevCounters,
      [productId]: Math.max(prevCounters[productId] - 1, 0),
    }));
  };

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants(prevSelectedVariants => ({
      ...prevSelectedVariants,
      [productId]: variant,
    }));
  };

  const renderProducts = (category) => {
    return products.filter(product => product.category === category).map((product) => (
      <Box p="24px" h="auto" w={{base:'100%',md:'40%',lg:'23%'}} mb="24px" bg="#FFFFFFED" borderRadius={"16px"} key={product.id}>
        <Box mb="10px" position={"relative"}>
          <Link to={`/products/${product.id}`}>
            <Img mx={"auto"} h="200px" src={product.image} borderRadius={"2px"} w="200px"></Img>
          </Link>
        </Box>
        <Box mb="8px">
          <Text as="p" color="#222222" fontSize={"18px"} fontWeight="600" lineHeight={"27px"}>
            {product.title}
          </Text>
        </Box>
        <Box mb="10px">
          <Text color="#A7B3BF" fontSize="15px" fontWeight="400" minH="69px" lineHeight="22px" overflow="hidden" display="-webkit-box" sx={{ WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}>
            {product.description}
          </Text>
        </Box>
        <Box mb="8px">
          <Text color="#222222" fontSize="16px" fontWeight="500">
            <ProductVariants 
              mgVariants={product.mgVariants} 
              selectedVariant={selectedVariants[product.id]}
              onChange={(value) => handleVariantChange(product.id, value)}
            />
          </Text>
        </Box>
        <Box mb="8px" border="2px solid #5111AE" borderRadius={"4px"} p="6px 9px">
          <Flex justifyContent={"space-between"} alignItems={"center"}  >
            <Text color="#222222" fontSize="14px" fontWeight="600" lineHeight={"14px"}>
              Price
            </Text>
            <Text color="#222222" fontSize="14px" fontWeight="800" lineHeight={"17px"}>
              ${product.price}
            </Text>
          </Flex>
        </Box>
        <Flex gap="20px" alignItems={"center"} justifyContent={"center"} mb="8px">
         
            <Image cursor={"pointer"}   onClick={() => decrementCounter(product.id)} src="/blackminus.svg"></Image>
        
          <Text color="#000000" fontSize="24px" fontWeight="600">
            {counters[product.id]}
          </Text>
        
          
            <Image cursor={"pointer"}    onClick={() => incrementCounter(product.id)} src="/blackplus.svg"></Image>
      
        </Flex>
        <Button
          colorScheme='#7D31EA'
          onClick={() => addToCart(product, counters[product.id], selectedVariants[product.id])}
          bg="#7D31EA"
          color="white"
          fontSize="14px"
          fontWeight="600"
          w="100%"
          _focus={{ outline: 'none' }} 
          _focusVisible={{ outline: 'none' }}  
          borderRadius="md"
          shadow="md"
          py={"13px"}
          px={"10px"}
        >
          Add to cart
        </Button>
      </Box>
    ));
  };

  return (
    <Tabs variant="soft-rounded" colorScheme="blue" mt="40px" mx='20px'>
      <TabList flexDirection={{base:'column',sm:'row'}}  p='16px 32px' mx={"auto"} justifyContent="space-between" borderBottom={"none"} bg="rgba(49, 17, 100, 0.75)" maxW={"650px"} borderRadius={{base:'35px',md:'100px'}}>
        <Tab
          p="14px 46px"
          bg="transparent"
          color="rgba(255, 255, 255, 0.65)"
          borderRadius="50px"
          _selected={{ bg: '#FFFFFF', color: '#7D31EA' }}
          _focus={{ outline: 'none' }} 
          _focusVisible={{ outline: 'none' }}  
        >
          Breeze Pro
        </Tab>
        <Tab p="14px 46px" bg="transparent" color="rgba(255, 255, 255, 0.65)" borderRadius={"50px"} _selected={{bg:'#FFFFFF',color:'#7D31EA'}}  _focus={{ outline: 'none' }} 
          _focusVisible={{ outline: 'none' }}  
        >Breeze Prime</Tab>
        <Tab p="14px 46px" bg="transparent" color="rgba(255, 255, 255, 0.65)" borderRadius={"50px"} _selected={{bg:'#FFFFFF',color:'#7D31EA'}}  _focus={{ outline: 'none' }} 
          _focusVisible={{ outline: 'none' }}  
        >Breeze Elite</Tab>
      </TabList>

      <TabPanels maxW={"1440px"} mx={"auto"}>
        <TabPanel >
          <Productinfo productname={'Breeze Pro'}/>
          <Flex flexWrap={"wrap"} gap="40px" justifyContent={"center"}>
            {renderProducts("Breeze Pro")}
            <Image h="537px" w={{base:'100%',md:'40%',lg:'23%'}} src="/proimage.png"></Image>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Productinfo productname={'Breeze Prime'}/>
          <Flex flexWrap={"wrap"} gap="40px" justifyContent={"center"}>
            {renderProducts("Breeze Prime")}
            <Image h="537px" w={{base:'100%',md:'40%',lg:'23%'}} src="/breezeprime.png"></Image>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Productinfo productname={'Breeze Elite'}/>
          <Flex flexWrap={"wrap"} gap="40px" justifyContent={"center"}>
            {renderProducts("Breeze Elite")}
            <Image h="537px" w={{base:'100%',md:'40%',lg:'23%'}} src="/breezeelite.png"></Image>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Products;
