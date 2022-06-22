import React, { useEffect } from "react";

const Shopping_Cart = ( { cart_items, currentAccount, accounts } ) => {

    const remove_item = (index) => {

        console.log(cart_items, ' -cart_items')
        console.log(accounts, ' -accounts')
        console.log(currentAccount, ' -currentAccount')
        console.log(index)

    }


    return (

        <div id="cart_container">
        <div id="title_section_cart">
            <h2> Cart </h2> 
            <hr />
        </div>        

        {cart_items != undefined ?    
        
        
            cart_items.map((item, index) => 
                
            <div className="cart_item" key={index}>

                <div className="left_cart_section">
                    <h3> {item.name} </h3>
                    <p> ${item.price} </p>
                    <img src={item.mini_image} />
                </div>

                <div className="right_cart_section">
                    <button 
                        className="item_button"
                        onClick={() => remove_item(index)}
                    > Remove Item </button>
                </div>

            </div>    
                
            )

         : null
        }

        </div>

    )


}


export default (Shopping_Cart)