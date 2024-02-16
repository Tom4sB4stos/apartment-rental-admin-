import { Heading, Link, ButtonGroup, Button, Box } from "@chakra-ui/react";

function Error() {
  return (
    <Box mt="300px" mb="200px">
      <Heading size="md">Error 404 - Page Not Found</Heading>

      <ButtonGroup spacing="2" mt="45px">
        <Link href="/">
          <Button variant="solid" colorScheme="teal">
            Back to Home
          </Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default Error;
