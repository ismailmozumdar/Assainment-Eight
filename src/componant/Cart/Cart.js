import React from 'react';
import './Cart.css'

const Cart = () => {
    const reset = () => {
        document.getElementById('Cade-container').innerHTML="";   
    }
    return (
            <div className='mt-4 Styke-body container'>
                <div id='Cade-container' className=''>
            </div>
            <button className='d-block mt-3 border-1 rounded p-2 btn btn-outline-success'>CHOOSE 1 FOR ME</button>
            <button onClick={reset} className='d-block mt-3 border-1 rounded p-2 btn btn-outline-warning'>CHOOSE AGAIN</button>
            </div>
    );
};

export default Cart;