import {
  Box,
  Flex,
  Spacer,
  VStack,
  Text,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import ApartmentList from "./ApartmentList";
import { useState } from "react";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <Box
      bg="white"
      border=" 3px solid teal"
      w="200px"
      h="100vh"
      position="fixed"
      top="2.5"
      left={isOpen ? "0" : "-200px"}
      transition="left 0.3s"
      zIndex="1"
      boxShadow="lg"
      mt="56px"
    >
      <Flex direction="column" p="4" color="white">
        <VStack spacing="4" align="stretch">
          <Heading
            fontSize="16
          px"
            color="teal"
          >
            SORT BY CITY
          </Heading>
          <ChakraLink
            as={ReactRouterLink}
            to="/Berlin"
            mr="20px"
            color="teal"
            _hover={{ textDecoration: "none", color: "gray.200" }}
            mt="15px"
            textDecoration="underline"
          >
            Berlin
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/Paris"
            mr="24px"
            color="teal"
            _hover={{ textDecoration: "none", color: "gray.200" }}
            textDecoration="underline"
          >
            Paris
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/Madrid"
            color="teal"
            _hover={{ textDecoration: "none", color: "gray.200" }}
            textDecoration="underline"
            mr="10px"
          >
            Madrid
          </ChakraLink>
        </VStack>
        <Spacer />
        <Box mt="auto">
          <Text textAlign="center" fontSize="xs"></Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Sidebar;
