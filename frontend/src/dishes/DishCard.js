import React, { useContext, useEffect, useState } from "react";
import UserContext from '../auth/UserContext'

function DishCard({id, title, description, price, dish_url}) {
  const [ordered, setOrdered] = useState()
  const { hasOrdered, orderDish } = useContext(UserContext) 
  const {currentUser} = useContext(UserContext)

  useEffect(() => {
    setOrdered(hasOrdered(id))
  }, [id, hasOrdered]) 

  async function handleClick(event) {
    event.preventDefault()
    if(hasOrdered(id)) return
    orderDish(id)
    setOrdered(true)
  }

  return(
    <div className="col-lg-6 menu-item filter-specialty">
      {dish_url && <img src={dish_url} alt={title} className='menu-img' />}
      <div className="menu-content">
        <a href={`/dishes/${id}`}>{title}</a><span>${price}</span>
      </div>
      <div className="menu-ingredients">
        {description}
      </div>
      <div className="">
        {currentUser
        ?
          <button 
              type="submit"
              className="order-btn"
              onClick={handleClick}
              disabled={ordered}
          >
          {ordered ? 'Ordered' : 'Add to Order'}
          </button>
        : <div></div>
        }
        
      </div>
    </div> 
  )
}

export default DishCard
