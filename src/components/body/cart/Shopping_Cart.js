import React, { useEffect } from "react";

const Shopping_Cart = ( { cart_items } ) => {

    return (

        <div> 
            

        {cart_items != undefined ?    
        
        
            cart_items.map(item => 
                
            <div>

                <h3> {item.name} </h3>
                <p> {item.price} </p>
                <img src={item.mini_image} />
                <button> Remove Item </button>

            </div>    
                
            )

         : null
        }

        </div>

    )


}


export default (Shopping_Cart)