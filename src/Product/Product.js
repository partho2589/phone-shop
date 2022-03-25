import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price } = props.product 
    return (
        <div className='product-container'>
            
          <img  src={img} alt="" />
          <div>
              <p className='phone-name'>Name: {name}</p>
              <p className='phone-price'>Price: {price}</p>
          </div>
        </div>
           
      
                    
                
    );
};

export default Product;