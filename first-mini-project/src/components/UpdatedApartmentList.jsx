import Data from "../assets/data.json"
import {useState} from "react"
import Form from "./Form"
import ApartmentList from "./ApartmentList"


function UpdatedApartmentList() {
    const [apartment, setApartment] = useState(Data)

    function addNewApartment(newApartment) {
        const updatedList = [...apartment, newApartment]
        setApartment(updatedList)
    }

    return(
        <div>
            <h2>Movie List</h2>
            <Form addNewApartment = {addNewApartment}/>
            {apartment.map((movie) => {
                return <ApartmentList movie={movie}/>
            })
            }
        </div>
    )

    }


export default UpdatedApartmentList