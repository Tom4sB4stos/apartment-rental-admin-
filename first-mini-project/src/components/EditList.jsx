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


import {useState} from "react"

function EditList ({name, price}) {

const [names, setNames] = useState("names")
const [prices, setPrices] = useState(price)

console.log(names)
//console.log(price)

const setInitial = () => {

}

return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="100px">
      <Heading as="h3" size="lg">
        Edit Current Apartment
      </Heading>
      <form >
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            name="name"
            defaultValue={name}
            /* value={data.name} */
            /*  onChange={(e) => setCountry(e.target.value)} */
          />

          <FormLabel>Price</FormLabel>
          <NumberInput
            max={5000}
            min={30}
            name="price"
            defaultValue={price}
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

export default EditList