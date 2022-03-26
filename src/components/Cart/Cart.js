import React from 'react';

const Cart = (props) => {
    console.log(props)
    const {name} =props.phone 
    // console.log(cart)
    // let name = [];

    // for(const product of cart ){
    //     name = name + product.name 
    // }
    return (
        <div>
            <p  className='phone-name'>{name}</p>
        </div>
        
    );
};

export default Cart;