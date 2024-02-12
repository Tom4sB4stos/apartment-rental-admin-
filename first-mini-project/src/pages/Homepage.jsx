import Data from "../assets/data.json"
import { useState } from "react"
import Form from "../components/Form"
import ApartmentList from "../components/ApartmentList"


function HomePage() {
  
 const [apartment, setApartment] = useState(Data)

 function addNewApartment(newApartment) {
     const updatedList = [...apartment, newApartment]
     setApartment(updatedList)
 }

    return (
        <div>
            <Form addNewApartment={addNewApartment} />
           <ApartmentList />
        </div>
    )

}

export default HomePage;