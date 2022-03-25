import React, { useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [cart, setCart] = useState([])
    const products = [
        {name:'vivo v19', 
        id:1, 
        price:23000, 
        img:"https://cmobileprice.com/products/Vivo_Y19.jpg"
        },
        {name:'vivo V20', 
        id:2, 
        price:20000, 
        img:"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1641369093068/3dc70ab279a58b47c20d6b55f9aeae9f.png"
        },
        {name:'vivo V20s', 
        id:3, 
        price:22000, 
        img:"https://cdn.mos.cms.futurecdn.net/pPzFjDhEVDDcoSrRZcSohH.jpg"
        },
        {name:'vivo V15', 
        id:4, 
        price:18000, 
        img:"https://i.gadgets360cdn.com/products/large/1551530083_635_vivo_v15.jpg"
        },
        {name:'vivo V21 pro', 
        id:5, 
        price:25000, 
        img:"https://www.91-cdn.com/hub/wp-content/uploads/2021/12/vivo-v21-5g-image-feat-1.jpg"
        },
        {name:'vivo X70 pro', 
        id:6, 
        price:40000, 
        img:"https://www.zilcopay.com/public/uploads/all/Pu7u6BGX54Qv6FHkqLorKSdXTAvTBtY05FeA2DXR.png"
        },
        {name:'vivo V12G', 
        id:7, 
        price:12000, 
        img:"https://static.toiimg.com/photo/87166972.cms"
        },
        {name:'vivo V30', 
        id:8, 
        price:18000, 
        img:"https://www.notebookcheck.info/uploads/tx_nbc2/VivoY20__1_.JPG"
        },
        {name:'vivo V75', 
        id:9, 
        price:15000, 
        img:"https://www.gizbot.com/img/600x40/img/2022/01/vivo-y75-1642767571.jpg"
        },
        {name:'vivo Y53', 
        id:10, 
        price:24000, 
        img:"https://qph.fs.quoracdn.net/main-qimg-f46afad22efc3c50301fab69327438f0-pjlq"
        }
    ]
    const handelAddToCart = (product) =>{
        
        const newCart = [...cart, product]
        setCart(newCart)
        
    }
    return (
        
        <div className='shop-container'>
            <div className='phone-con-name'>
            <h1>Choose your favorite vivo phone</h1>
            <div className='products-container' >
            {
                products.map(product=><Product
                product ={product}
                key = {product.id}
                handelAddToCart = {handelAddToCart}
                ></Product>)

            }
            </div>
            </div>
            
            <div className='cart-container'>
                <div>
                    <h3>Select phone</h3>
                </div>
               <Cart cart = {cart}></Cart>
                
            </div>
           
        </div>
    );
};

export default Shop;