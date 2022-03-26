import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [cart])  

    const hendleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
            console.log({product})
    }

    return (
        <div className='row row-cols-1'>
          <div  className='d-flax col-9 row row-cols-1 row-cols-md-3 g-4'>
          {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    hendleAddtoCart={hendleAddtoCart}
                ></Product>)
            }
              </div>
              <div className=' d-flax col-3'>
                  <p>name:</p>
                  </div> 
        </div>
    );
};

export default Shop;