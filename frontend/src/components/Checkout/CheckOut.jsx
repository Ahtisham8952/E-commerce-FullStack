import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useDisplayUser } from "../../context/UserContextProvider";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { clearCart } from "../../features/Auth/cartSlice";


const CheckOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector((state) => state.cart);
    const total = useSelector((state) =>  state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    const { user } = useDisplayUser();

    const handlePlaceOrder = () => {
        dispatch(clearCart()); // Clear the cart
        navigate('/OrderConfirmation'); // Redirect to order confirmation page
    };

    return (
        <Box w="100%" p="30px">
            <Text
                as={"span"}
                pb="10px"
                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                fontWeight={{ base: "600", md: "900" }}
                color="#FFFFFF"
            >
                Checkout
            </Text>

            <Flex w="100%" gap="30px" mt="30px" flexDirection={{base:'column',md:'row'}}>
                <Box bg="gray.700" p="20px" w={{base:'100%',md:'50%'}}>
                    <Heading as="h2" size="md" mb={4} color="#FFFFFF">
                        Billing Address
                    </Heading>
                    <VStack spacing={4}>
                        <FormControl id="fullName">
                            <FormLabel color="#FFFFFF">Full Name</FormLabel>
                            <FormLabel color="#FFFFFF">{user.fullName}</FormLabel>
                        </FormControl>

                        <FormControl id="address">
                            <FormLabel color="#FFFFFF">Address</FormLabel>
                            <FormLabel color="#FFFFFF">{user.address}</FormLabel>
                        </FormControl>
                    </VStack>
                </Box>

                {/* Order Summary Section */}
                <Box bg="gray.700" p="20px" w={{base:'100%',md:'50%'}}>
                    <Heading as="h2" size="md" mb={4} color="#FFFFFF">
                        Order Summary
                    </Heading>
                    <VStack spacing={4} align="stretch">
                        {items.length > 0 && (
                            <Box p={4} bg="gray.700" borderRadius="md" shadow="md">
                                <Flex justifyContent="space-between">
                                    <Text color="white" fontSize="xl" fontWeight="bold">
                                        Subtotal:
                                    </Text>
                                    <Text color="white" fontSize="xl" fontWeight="bold">
                                        ${total}
                                    </Text>
                                </Flex>
                            </Box>
                        )}
                        <Flex justifyContent="space-between">
                            <Text color="white">Shipping:</Text>
                            <Text color="white">$10.00</Text>
                        </Flex>
                        <Divider />
                        <Flex justifyContent="space-between">
                            <Text color="white" fontSize="xl" fontWeight="bold">
                                Total:
                            </Text>
                            <Text color="white" fontSize="xl" fontWeight="bold">
                                ${(total + 10).toFixed(2)}
                            </Text>
                        </Flex>
                    </VStack>
                    <Button 
                        mt="10px" 
                        w="100%"  
                        colorScheme='#7D31EA'
                        bg={"#7D31EA"}
                        color="white"
                        borderRadius="md"
                        shadow="md"
                        py={6}
                        px={8}
                        fontSize="lg"
                        fontWeight="bold"
                        onClick={handlePlaceOrder} // Place Order handler
                    >
                        Place Order
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default CheckOut;
