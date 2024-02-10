
import { Wrap} from '@chakra-ui/react'

import UpdatedApartmentList from '../components/updatedApartmentList';
import ApartmentList from "../components/ApartmentList";
import Form from '../components/Form';
function HomePage() {
  return (
    <div>
        <Form/>
       <Wrap justify="space-evenly">
   <ApartmentList/>
   </Wrap>
   
    </div>
  );
}

export default HomePage;