import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="center" bg="gray.700" p="20px" borderRadius="md" shadow="md">
        <Heading as="h2" size="xl" color="#FFFFFF">
          Thank You for Your Order!
        </Heading>
        <Text fontSize="lg" color="gray.300" textAlign="center">
          Your order has been placed successfully. We will send you a confirmation email with the details of your order shortly.
        </Text>
        <Text fontSize="lg" color="gray.300" textAlign="center">
          If you have any questions about your order, please contact our support team.
        </Text>
        <Box mt={8}>
          <Button
            as={Link}
            to="/"
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
            Continue Shopping
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default OrderConfirmation;
