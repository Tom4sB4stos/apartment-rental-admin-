import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Data from "../assets/data.json";
import { Box, Image, Heading, Badge, Flex } from "@chakra-ui/react";
import EditList from "../components/EditList"
import {useState} from "react"

function Details() {
  const { detailsId } = useParams();

  const apartmentDetail = Data.find((apartment) => apartment.id === detailsId);

 

  const handleFormSubmit = (updatedData) => {
   
    setData(updatedData);
    console.log(updatedData);
  };

  const [data, setData] = useState({
    name: apartmentDetail.name,
    price: apartmentDetail.price,
  })

  return (
    <article>
      <EditList name ={apartmentDetail.name} price={apartmentDetail.price} onSubmit={handleFormSubmit}/>
      {/* IMAGE */}
      <Box
        display="flex"
        mt="75px"
        justifyContent="center"
        maxW="1200px"
        mb="40px"
      >
        <Image src={apartmentDetail.picture_url.url} borderRadius="lg" />
      </Box>
      {/* TITLE */}
      <Box display="flex" justifyContent="center" mt="35px" fontSize="m">
        <Heading as="h1" width="720px" color="#555">
          {data.name}
        </Heading>
      </Box>
      {/* CITY */}
      <Box>
        <Heading
          as="h3"
          fontSize="22px"
          mt="35px"
          mb="10px"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          {apartmentDetail.city}, {apartmentDetail.country}
        </Heading>
      </Box>

      {/* BADGE AND INFO */}

      <Box margin="0 auto">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          mt="10px"
        >
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="teal"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="200px"
            height="30px"
            margin="0 auto"
          >
            {data.price <= 80 ? "Great Deal" : null}
            {data.price > 80 && data.price < 120
              ? "Good Find"
              : null}
            {data.price >= 120 ? "Premium" : null}
          </Badge>
          <p>
            {apartmentDetail.bedrooms} bed &bull; {apartmentDetail.bathrooms}{" "}
            bath
          </p>
        </Box>
      </Box>

      {/* PRICE */}
      <Box display="flex" justifyContent="center" mt="15px" fontSize="m">
        <Heading as="h3" width="720px" color="#555" fontSize="22px">
          {data.price} € / week
        </Heading>
      </Box>

      {/* DESCRIPTION */}
      <Box textAlign="justify" mt="30px" mb="40px">
        <p>{apartmentDetail.description}</p>
      </Box>
    </article>
  );
}

export default Details;
