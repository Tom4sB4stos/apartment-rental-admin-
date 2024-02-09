
import { Wrap} from '@chakra-ui/react'


import ApartmentList from "../components/ApartmentList";
function HomePage() {
  return (
    <div>
       <Wrap justify="space-evenly">
   <ApartmentList/>
   </Wrap>
    </div>
  );
}

export default HomePage;