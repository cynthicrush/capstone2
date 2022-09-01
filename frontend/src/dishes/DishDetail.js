import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JensKitchenApi from '../Api'

function DishDetail() {
    const {id} = useParams()
    const [dish, setDish] = useState([])

    useEffect(() => {
        async function getDish() {
            let dish = await JensKitchenApi.getDish(id)
            setDish(dish) 
        }
        getDish()
    }, [id])

    return(
        <section id="specials" className='DishDetail specials'>

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Detail</h2>
                    <p>Dish Detailes</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className='col-lg-9 mt-4 mt-lg-0'>
                        <div className='tab-content'>
                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                <div className="col-lg-8 details order-2 order-lg-1">
                                    <h3>{dish.title}</h3>
                                    <p className="fst-italic">Every ingredient is fresh in this dish.</p>
                                    <p>{dish.description}</p>
                                </div>
                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                    
                                    {dish.dish_url && <img src={dish.dish_url} alt={dish.title} className='img-fluid' style={{borderRadius: '50%'}}/>}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
          
            </div>
        </section>
    )
}

export default DishDetail
