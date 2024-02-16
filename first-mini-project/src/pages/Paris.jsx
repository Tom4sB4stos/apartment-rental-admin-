import Data from "../assets/data.json";
import { Box, Image, Badge, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Paris({}) {
  const [apartmentData, setApartmentData] = useState(Data);

  const parisApartments = apartmentData.filter(
    (apartment) => apartment.city === "Paris"
  );
  return (
    <Wrap>
      {parisApartments.map((apartmentData) => {
        return (
          <WrapItem key={apartmentData.id}>
            <Box
              maxW="md"
              ml="120px"
              width="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mt="100px"
            >
              <Image src={apartmentData.picture_url.url} />

              <Box p="6" display="flex" flexDirection="column" align="left">
                <Box alignItems="baseline" display="flex">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {apartmentData.price <= 80 ? "Great Deal" : null}
                    {apartmentData.price > 80 && apartmentData.price < 120
                      ? "Good Find"
                      : null}
                    {apartmentData.price >= 120 ? "Premium" : null}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {apartmentData.bedrooms} bed &bull;{" "}
                    {apartmentData.bathrooms} bath
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {apartmentData.city} , {apartmentData.country}
                    </Box>

                    <Box>
                      {apartmentData.price}
                      <Box as="span" color="gray.600" fontSize="sm">
                        € / wk
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box display="flex" direction="column">
                      <ChakraLink as={Link} to={`/details/${apartmentData.id}`}>
                        <Button colorScheme="teal" height="25px">
                          Details
                        </Button>
                      </ChakraLink>
                    </Box>

                    <Box>
                      <Button
                        colorScheme="red"
                        height="25px"
                        mt="10px"
                        onClick={() => deleteApartment(apartmentData.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default Paris;
