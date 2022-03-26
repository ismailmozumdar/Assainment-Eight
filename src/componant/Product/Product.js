import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({hendleAddtoCart, product}) => {
    const {img, name, price, id} = product
  
    return (
        <div>
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Name: {name}</h5>
        <p class="card-text">price: {price}</p>
        <p>id: {id}</p>
      </div>
        <button onClick={() => hendleAddtoCart(product)} className='border-0 w-100 bg-info  button-container'><p>Add To Cart</p>
        <FontAwesomeIcon   icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    </div>
    );
};

export default Product;