import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/Auth/cartSlice';
import { Box, Button, Image, Text, VStack, HStack, Divider } from '@chakra-ui/react';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart);
    const total = useSelector((state) =>  state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0))

    const removeFromCart = (id) => {
        dispatch(remove(id));
    };

    return (
        <Box p={4} bg="gray.800" minH="100vh">
            <VStack spacing={4} align="stretch">
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
                                py={2}
                                px={4}
                                fontSize="md"
                                fontWeight="bold"
                            >
                                Remove
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
                 {items.length > 0 && (
                    <Box p={4} bg="gray.700" borderRadius="md" shadow="md">
                    <Text color="white" fontSize="xl" fontWeight="bold">
                        Total: {total}
                    </Text>
                </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Cart;
