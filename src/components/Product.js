import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'

const Product = (curElem) => { 
    const {id, name, image, price, category } = curElem
    // console.log(curElem, "each product as props coming through grid & parted at Product.Js")
  return (
    <NavLink to={`/singleproduct/${id}`} >
      <div className="card" key={id}>
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product