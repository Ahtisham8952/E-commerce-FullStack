import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { remove } from '../features/Auth/cartSlice'
import { Box, Button, Image } from '@chakra-ui/react'
const Cart = () => {
    const dispatch=useDispatch()
    const item=useSelector((state)=>state.cart)


    const removefromcart=(id)=>{
        dispatch(remove(id))
    }

  return (
 <>
 {
    item.map((item)=>{
        return(
            <Box key={item.id}>
                <Image src={item.image}/>
                <Button
      onClick={()=>removefromcart(item.id)}
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
 remove
  </Button>

            </Box>
        )
    })
 }

 </>
  )
}

export default Cart