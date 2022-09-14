import React from 'react'
import { MdLocationOn} from "react-icons/md";

function Card(props) {

    return (
        <div className='card'>

            <img className="img" src={props.imageUrl} alt="" />

            <div className="text">
                <span className='location'><MdLocationOn/> <p className='location-name'>{props.location}</p> <p className='map'> <a href={props.googleMapsUrl} target="_blank">googleMapsUrl</a>  </p></span>
                <h2 className='title'>{props.title}</h2>
                <h4 className='date'>{props.startDate}</h4>
                <p className='description'>{props.description}</p>
            </div>


        </div>
    )
}

export default Card

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"