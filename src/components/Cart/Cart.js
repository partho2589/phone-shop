import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name,img} =props.phone 
    
    return (
        <div className='cart-detail'>
            <img className='cart-img' src={img} alt="" />
            <p  className='phone-name'>{name}</p>
        </div>
        
    );
};

export default Cart;