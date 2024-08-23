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
  Flex
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
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsFunction = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/products`); // Adjust the URL to match your backend endpoint
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsFunction();
  }, []);

  const addtocart = (product) => {
    dispatch(add(product));
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
        <ProductVariants mgVariants={product.mgVariants} onChange={(value) => console.log(`Selected variant: ${value} mg`)} />
        </Text>
      </Box>
      <Box mb="8px" border="2px solid #5111AE" borderRadius={"4px"} p="6px 9px">
        <Flex justifyContent={"space-between"} alignItems={"center"} >
        <Text color="#222222" fontSize="14px" fontWeight="600" lineHeight={"14px"}>
          Price
        </Text>
        <Text color="#222222" fontSize="14px" fontWeight="800" lineHeight={"17px"}>
        ${product.price}
        </Text>
        </Flex>
       
      </Box>
      
     
      <Button
      colorScheme='#7D31EA'
      _focus={{ outline: 'none' }} 
      _focusVisible={{ outline: 'none' }}  
        onClick={() => addtocart(product)}
        bg="#7D31EA"
        color="white"
        fontSize="14px" fontWeight="600" lineHeight={"17px"}
       w="100%"
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
  _focusVisible={{ outline: 'none' }}  >Breeze Prime</Tab>
        <Tab p="14px 46px" bg="transparent" color="rgba(255, 255, 255, 0.65)" borderRadius={"50px"} _selected={{bg:'#FFFFFF',color:'#7D31EA'}}  _focus={{ outline: 'none' }} 
  _focusVisible={{ outline: 'none' }}  >Breeze Elite</Tab>
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
