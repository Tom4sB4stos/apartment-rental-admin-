import { Flex, Box, VStack, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Box display="flex" alignContent="center" align="stretch">
        <Box
          color="white"
          align="stretch"
          display="flex"
          justifyContent="center"
          height="50px"
          border="3px solid teal"
          borderRadius="50px"
          width="100vw"
          mt="50px"
          alignItems="center"
          backgroundColor="teal"
          mb="0"
        >
          <Link href="https://github.com/Tom4sB4stos/apartment-rental-admin-">
            <b>G I T H U B</b>
          </Link>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
