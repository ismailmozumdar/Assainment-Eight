import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product}) => {
    const {img, name, price, id} = product;

    const hendleAddtoCart = () => {
        const cadeContainer = document.getElementById('Cade-container');
        const newSesion = document.createElement('div')
        newSesion.innerHTML =`
        <div class="row mt-3">
        <img class="d-flax col-5"  src=${img} alt="..."/>
        <h5  class="d-flax mt-3 col-7">${name}</h5>
        </div>

        `
        cadeContainer.appendChild(newSesion);
        
        
    }
    
    
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
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    </div>
    );
};

export default Product;