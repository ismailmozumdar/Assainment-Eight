import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name,price,id} = props.product
    return (
        <div>
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Name: {name}</h5>
        <p class="card-text">price: {price}</p>
        <p>id: {id}</p>
      </div>
        <button className='border-0 w-100 bg-info py-2'>Add To Cart</button>
      </div>
    </div>
    );
};

export default Product;