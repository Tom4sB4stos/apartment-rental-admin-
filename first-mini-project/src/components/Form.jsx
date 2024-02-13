import { Box,
    FormControl, 
    FormLabel, 
    Input,
    NumberInput,
   NumberInputField,
   NumberInputStepper,
   NumberIncrementStepper ,
   NumberDecrementStepper,
   InputLeftAddon,
   InputGroup,
   Heading,
   Button
       } from "@chakra-ui/react"

import {useState} from "react"
//import { Form} from "@chakra-ui/react";


function Form (props) {
 const [country, setCountry] = useState("");
 const [city, setCity] = useState("");
/*  const [price, setPrice] = useState(50);
 const [bedrooms, setBedrooms] = useState("");
 const [bathrooms, setBathrooms] = useState("");
 const [url, setUrl] = useState(""); */

 function handleSubmit(e) {
  
   e.preventDefault();

   const newApartment = { country, city, /* , price, bedrooms, bathrooms, url  */};
   console.log(newApartment)

   props.addNewApartment(newApartment);
  
   setCountry("");
   setCity("");
  /*  setPrice(50);
   setBedrooms("");
   setBathrooms("");
   setUrl(""); */
   
 }

return (
   <Box display="flex" flexDirection="column" alignItems="center" mt="100px" >
       <Heading as='h3' size='lg'>
        Add a new Apartment
       </Heading>
       <form onSubmit={handleSubmit}>
       <FormControl isRequired >
           <FormLabel>Country</FormLabel>
           <Input placeholder='Country' 
           name="country"
           value={country}
           onChange={(e) => setCountry(e.target.value)}/>
           

           <FormLabel>City</FormLabel>
           <Input placeholder='City'
           name="city"
           value={city}
           onChange={(e) => setCity(e.target.value)} />

          {/*  <FormLabel>Price</FormLabel>
           <NumberInput max={500} min={20}
           name="price"
           value={price}
           onChange={(e) => setPrice(e.target.value)}>
           <NumberInputField />
           <NumberInputStepper>
           <NumberIncrementStepper />
           <NumberDecrementStepper />
           </NumberInputStepper>
           </NumberInput>

           <FormLabel>Bed Rooms</FormLabel>
           <NumberInput max={10} min={0}
           name="bedrooms"
           value={bedrooms}
           onChange={(e) => setBedrooms(e.target.value)}
           >
           <NumberInputField />
           <NumberInputStepper>
           <NumberIncrementStepper />
           <NumberDecrementStepper />
           </NumberInputStepper>
           </NumberInput>

           <FormLabel>Bath Rooms</FormLabel>
           <NumberInput max={10} min={0}
           name="bathrooms"
           value={bathrooms}
           onChange={(e) => setBathrooms(e.target.value)}
           >
           <NumberInputField />
           <NumberInputStepper>
           <NumberIncrementStepper />
           <NumberDecrementStepper />
           </NumberInputStepper>
           </NumberInput>

           <FormLabel>Image Url</FormLabel>
           <InputGroup size='sm'
           name="url"
           value={url}
           onChange={(e) => setUrl(e.target.value)}
           >
           <InputLeftAddon>
           https://
           </InputLeftAddon>
           <Input placeholder='ImageUrl' />
           </InputGroup> */}

           <Button type="submit" mt="30px" colorScheme='green'>Submit</Button>
       </FormControl>
       </form>
   </Box>
  
)
}

export default Form