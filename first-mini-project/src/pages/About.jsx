import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Box,
  Image,
  Center,
  Link,
} from "@chakra-ui/react";

function About() {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        gap="50px"
        mt="200px"
        justifyContent="center"
        mb="130px"
      >
        <Card maxW="lg" maxH="lg">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Piyush</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, aperiam voluptatibus. Quia voluptatem, molestiae
                officiis dolorum eveniet animi enim, eos ex esse inventore
                libero fugiat natus similique rem nulla vel.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2">
              <Link href="https://github.com/piyush13101994">
                <Button variant="solid" colorScheme="teal">
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/piyush-bisht-7b3658299/">
                <Button variant="ghost" colorScheme="teal">
                  Linkedin
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Image
          display="flex"
          src="logo.png"
          width="250px"
          height="100px"
          backgroundColor="teal"
          borderRadius="50px"
          mt="-100px"
        ></Image>

        <Card maxW="lg">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Tomás</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto necessitatibus, non voluptatem tempora omnis,
                veritatis repudiandae laboriosam assumenda nemo labore, aperiam
                maxime optio praesentium? Ipsa maxime quae architecto dolorem
                magnam.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2">
              <Link href="https://github.com/Tom4sB4stos">
                <Button variant="solid" colorScheme="teal">
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/tom%C3%A1s-bastos-3aa674136/">
                <Button variant="ghost" colorScheme="teal">
                  Linkedin
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </Box>
  );
}

export default About;
