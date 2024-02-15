import Data from "../assets/data.json";
import { Box, Image, Badge, Button, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function ApartmentList(props) {
  const [apartmentData, setApartmentData] = useState(Data);
  const { apartment } = props;
  const { deleteApartment } = props;

  //console.log(apartmentData)
  //console.log(apartment)

  return (
    <Wrap justify="space-evenly">
      {apartment.map((x) => {
        return (
          <Box
            maxW="md"
            ml="120px"
            width="250px"
            borderWidth="1px"
            borderRadius="lg"
            key={x.id}
            overflow="hidden"
            mt="100px"
            onKeyUp={x.id}
          >
            <Box>
              {x.picture_url && x.picture_url.url && (
                <Image src={x.picture_url.url} />
              )}
            </Box>

            <Box p="6" display="flex" flexDirection="column" align="left">
              <Box alignItems="baseline" display="flex">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {x.price <= 80 ? "Great Deal" : null}
                  {x.price > 80 && x.price < 120 ? "Good Find" : null}
                  {x.price >= 120 ? "Premium" : null}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {x.bedrooms} bed &bull; {x.bathrooms} bath
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
                    {x.city} , {x.country}
                  </Box>

                  <Box>
                    {x.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      € / wk
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box display="flex" direction="column">
                    <ChakraLink as={Link} to={`/details/${x.id}`}>
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
                      onClick={() => deleteApartment(x.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Wrap>
  );
}

export default ApartmentList;
