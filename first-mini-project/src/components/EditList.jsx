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

function EditList ({name, price, onSubmit}) {

    const [updatedName, setUpdatedName] = useState(name);
    const [updatedPrice, setUpdatedPrice] = useState(price);
  

const handleSubmit = (e) => {
  e.preventDefault();
  const updatedData = {
    name: updatedName,
    price: parseFloat(updatedPrice),
  };
  onSubmit(updatedData);
};
//console.log(price)



return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="100px">
        <form onSubmit={handleSubmit}>
      <FormControl isRequired >
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          name="name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />

        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          max={5000}
          min={30}
          name="price"
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />

        <Button type="submit" mt="30px" colorScheme="green" >
          Submit
        </Button>
      </FormControl>
      </form>
    </Box>
  );

}

export default EditList