import React, { useEffect } from "react";

const Shopping_Cart = ( { cart_items } ) => {

    return (

        <div id="cart_container">
        <div id="title_section">
            <h2> Cart </h2> 
            <hr />
        </div>

        
            

        {cart_items != undefined ?    
        
        
            cart_items.map(item => 
                
            <div className="cart_item">

                <div className="left_cart_section">
                    <h3> {item.name} </h3>
                    <p> ${item.price} </p>
                    <img src={item.mini_image} />
                </div>

                <div className="right_cart_section">
                    <button className="item_button"> Remove Item </button>
                </div>

            </div>    
                
            )

         : null
        }

        </div>

    )


}


export default (Shopping_Cart)