import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/Auth/cartSlice';
import { Box, Button, Image, Text, VStack, HStack, Divider, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart);
    const total = useSelector((state) =>  state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0))

    const removeFromCart = (id) => {
        dispatch(remove(id));
    };
    if (items.length === 0) {
        return (
            <Box p={4} bg="gray.800" minH="100vh" display="flex" alignItems="center" justifyContent="center">
                <Text color="white" fontSize="2xl" fontWeight="bold">
                    Your cart is empty
                </Text>
            </Box>
        );
    }
    return (
        <Box p={4} bg="gray.800" minH="100vh">
          

       
             <Text as={"span"}  pb="10px" borderBottom={"2px solid #7D31EA"}  fontSize={{base:'24px',md:'28px',lg:'36px'}} fontWeight={{base:'600',md:'900'}} color='#FFFFFF'>Shopping Cart</Text>
           
            <Flex mt='30px' gap="30px">

           
            <VStack spacing={4} align="stretch" w="60%" >
                {items.map((item) => (
                    <Box key={item.id} p={4} bg="gray.700" borderRadius="md" shadow="md">
                        <HStack spacing={4}>
                            <Image 
                                src={item.image} 
                                boxSize="100px" 
                                objectFit="cover" 
                                borderRadius="md" 
                            />
                            <VStack align="start" flex="1">
                                <Text color="white" fontSize="lg" fontWeight="bold">{item.title}</Text>
                                <Text color="gray.300">${item.price}</Text>
                                <Text color="gray.400">Quantity: {item.quantity}</Text>
                            </VStack>
                            
                            <Button
      onClick={() => removeFromCart(item.id)}
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
           Remove from Cart
          </Button>
                        </HStack>
                        <Divider mt={4} />
                    </Box>
                ))}
                {items.length === 0 && (
                    <Text color="white" fontSize="lg" align="center">
                        Your cart is empty
                    </Text>
                )}
               
            </VStack>
            <Box w="40%" bg="gray.700" p='20px'>
<Box>
<Text textAlign={"left"}  pb="10px" borderBottom={"1px solid white"}  fontSize={{base:'24px',md:'28px',lg:'36px'}} fontWeight={{base:'600',md:'600'}} color='#FFFFFF'>Order Details</Text>
</Box>
<Box>
{items.map((item) => (
                    <Box key={item.id} p={4} bg="gray.700" borderRadius="md" shadow="md">
                        
                            <Flex justifyContent={"space-between"} w="100%">
                                <Box textAlign={"left"}>
                                <Text color="white" fontSize="lg" fontWeight="bold">Product</Text>
                                <Text color="gray.300">Price</Text>
                                <Text color="gray.400">Quantity</Text>
                                </Box>
                                <Box textAlign={"right"} >
                                <Text color="white" fontSize="lg" fontWeight="bold">{item.title}</Text>
                                <Text color="gray.300">${item.price}</Text>
                                <Text color="gray.400">Quantity: {item.quantity}</Text>
                            </Box>
                            </Flex>
                          
                           
                            
                         
                       
                        <Divider mt={4} />
                    </Box>
                ))}
</Box>
{items.length > 0 && (
                    <Box p={4} bg="gray.700" borderRadius="md" shadow="md">
                        <Flex justifyContent={"space-between"}>
                        <Text color="white" fontSize="xl" fontWeight="bold">
                        Total:
                    </Text>
                    <Text color="white" fontSize="xl" fontWeight="bold">
                         ${total}
                    </Text>

                        </Flex>
                   
                </Box>
                )}
                     <Button
                     as={Link}
                     to={'/checkout'}
                     mt="20px"

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
         Proceed to Checkout
          </Button>
            </Box>
            </Flex>
        </Box>
    );
};

export default Cart;
