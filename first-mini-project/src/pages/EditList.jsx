import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Button,
} from "@chakra-ui/react";
import Data from "../assets/data.json";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { Form} from "@chakra-ui/react";

function EditList(props) {
  const [data, setData] = useState({ name: "tomas", price: 10 });
  /* const [price, setPrice] = useState("");
   */
  const { id } = useParams();

  useEffect(() => {
    setData(data);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="100px">
      <Heading as="h3" size="lg">
        Edit Current Apartment
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            name="name"
            /* value={data.name} */
            /*  onChange={(e) => setCountry(e.target.value)} */
          />

          <FormLabel>Price</FormLabel>
          <NumberInput
            max={5000}
            min={30}
            name="price"
            /*  value={data.price} */
            /* onChange={(e) => setPrice(e.target.value)} */
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button type="submit" mt="30px" colorScheme="green">
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default EditList;
