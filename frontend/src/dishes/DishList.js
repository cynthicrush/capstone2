import React from "react";
import DishCard from "./DishCard";

function DishList({ dishes }) {
    return (
        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
            {dishes.map(d => (
                <DishCard 
                    key={d.id}
                    id={d.id}
                    title={d.title}
                    description={d.description}
                    price={d.price}
                    dish_url={d.dish_url}
                />
            ))}
        </div>
    )
}

export default DishList
