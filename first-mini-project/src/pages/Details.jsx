import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import Data from "../assets/data.json"


function Details() {

    const {detailsId} = useParams()

    const apartmentDetail = Data.find(
        (apartment) => apartment.id === detailsId
    )

    return (
        <div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusamus nemo suscipit minima cumque? Error necessitatibus quod voluptatem beatae, doloribus impedit hic et eveniet pariatur molestias perspiciatis? Eos, culpa quas.</p>
        <p>{apartmentDetail.city}</p>
        <img src={apartmentDetail.picture_url.url} />
        </div>
        
    )

}

export default Details