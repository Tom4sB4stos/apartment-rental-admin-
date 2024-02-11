import { Box, Flex, Spacer, VStack, Text, Button, Heading, Link} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import ApartmentList from "./ApartmentList";
import {useState} from "react"

function Sidebar({isOpen, toggleSidebar}) {

   
   
  return (
    <Box
    bg="gray.800"
    w="200px"
    h="100vh"
    position="fixed"
    top="0"
    left={isOpen ? "0" : "-200px"}
    transition="left 0.3s"
    zIndex="1"
    boxShadow="lg"
    mt="56px"
    >
      <Flex direction="column" p="4" color="white">
        <VStack spacing="4" align="stretch">

        <Heading>Sort by City</Heading>
        <ChakraLink as={ReactRouterLink} to='/Berlin'mr="20px" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Berlin</ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/Paris' mr="20px" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Paris</ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/Madrid"  color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Madrid</ChakraLink>
            
          
        </VStack>
        <Spacer />
        <Box mt="auto">
          <Text textAlign="center" fontSize="xs">
            Footer or additional links can be placed here
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}


export default Sidebar;
