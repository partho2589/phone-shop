import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart} = props
   console.log(cart)
   let name = [];
   for(const product of cart){
      name.push(product.name)  
   }
    return (
        <div>
           <h4 className='phone-name'>{name} </h4>
           <button>CHOOSE 1 FOR ME </button>
           <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;