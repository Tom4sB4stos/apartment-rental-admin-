import { Flex, Box, Heading, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
      <Box p="2" display="flex" flexDirection="column" justifyContent="center">
        <Box>
          <Button
            position="fixed"
            top="4"
            left="4"
            onClick={toggleSidebar}
            colorScheme="teal"
          >
            {isOpen ? "Close Sidebar" : "Open Sidebar"}
          </Button>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </Box>

        {/* <Heading size="md" ml="200px">
          Logo
        </Heading> */}
      </Box>
      <Flex alignItems="center">
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          mr="20px"
          color="white"
          _hover={{ textDecoration: "none", color: "gray.200" }}
        >
          About
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          mr="20px"
          color="white"
          _hover={{ textDecoration: "none", color: "gray.200" }}
        >
          Home
        </ChakraLink>

        <Image src="logo.png" width="50px" height="50px"></Image>
      </Flex>
    </Flex>
  );
}

export default NavBar;
