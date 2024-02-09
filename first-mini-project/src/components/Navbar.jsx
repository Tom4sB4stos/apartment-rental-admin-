import { Flex, Box, Heading} from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'



function NavBar() {
    return (
      <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      p={2}
      bg="teal.500"
      color="white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box p="2">
        <Heading size="md">Logo</Heading>
      </Box>
      <Flex alignItems="center">
      <ChakraLink as={ReactRouterLink} to='/about'mr="20px" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>About</ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/' mr="20px" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Home</ChakraLink>
      <ChakraLink as={ReactRouterLink} to='#' color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Button 3</ChakraLink>
      </Flex>
    </Flex>
  );
};



export default NavBar