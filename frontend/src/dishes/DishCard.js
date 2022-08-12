import React from "react";
import { Link } from 'react-router-dom'

function DishCard({id, title, description, price, image}) {
    return(
        <Link className="DishCard card" to={`/dishes/${id}`}>
            <div className="card-body">
                <h6 className="card-title">
                    {title}
                    {image && <img src={image} alt={title} className='float-right ml-5' />}
                </h6>
                <h7>{price}</h7>
                <p><small>{description}</small></p>
            </div>
        </Link>
    )
}

export default DishCard
