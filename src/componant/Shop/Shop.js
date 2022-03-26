import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])  

    

    return (
        <div className='row row-cols-1'>
          <div  className='d-flax col-9 row row-cols-1 row-cols-md-3 g-4'>
          {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
              </div>
              <div className='cart-container d-flax col-3'>
                  <Cart></Cart>
                  </div> 
        </div>
    );
};

export default Shop;