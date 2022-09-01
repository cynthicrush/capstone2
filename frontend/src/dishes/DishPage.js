import React, { useEffect, useState } from "react";
import JensKitchenApi from "../Api";
import DishList from "./DishList";

function DishPage() {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        async function getAllDishes() {
            let dishes = await JensKitchenApi.getDishes()
            setDishes(dishes)
        }
        getAllDishes()
    })

    return (
        <section id="menu" className="menu section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                </div>

                <DishList dishes={dishes}/>
            </div>
        </section>
    )
}

export default DishPage