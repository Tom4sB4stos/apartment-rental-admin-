import Data from "../assets/data.json";
import { useState } from "react";
import Form from "../components/Form";
import ApartmentList from "../components/ApartmentList";

function HomePage() {
  const [apartment, setApartment] = useState(Data);

  function addNewApartment(newApartment) {
    const updatedList = [...apartment, newApartment];
    setApartment(updatedList);
  }

  const deleteApartment = (id) => {
   // console.log(id);
    const filteredApartment = apartment.filter((apartment) => {
      return apartment.id !== id;
    });
    setApartment(filteredApartment);
   // console.log(filteredApartment);
  };

  return (
    <div>
      <Form addNewApartment={addNewApartment} />
      <ApartmentList apartment={apartment} deleteApartment={deleteApartment} />
    </div>
  );
}

export default HomePage;
