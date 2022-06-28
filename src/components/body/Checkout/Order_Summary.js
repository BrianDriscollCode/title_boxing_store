import React from "react"
import { Link } from "react-router-dom"

const OrderSummary = ( { cartItems, shippingCost, removeAllCartItems } ) => {


    console.log(cartItems)
    let totalPrice = 0;

    const calculateTotalPrice = () => {

        totalPrice = 0;

        for (let i = 0; i < cartItems.length; i++) {


            totalPrice += cartItems[i].price 

        }

        return totalPrice;

    }

    console.log(calculateTotalPrice())
    console.log(shippingCost)

    if (totalPrice > 300 & shippingCost < 9) {

        shippingCost = 0;

    }


    return (

        <div id="order_summary_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 4 </div> 
               <h2> Order Summary </h2>
            </div>

            <div>

                <p id="amount_of_items"> {cartItems.length} items </p> 
                <hr />
            <div id="order_summary_item_list">

                


                {
                    cartItems.map(item => 
                        
                    <div className="order_summary_item">

                        <img src={item.mini_image} width="100px" height="auto"/>

                        <div id="name_and_brand_summary"> 
                            <h4> {item.name} </h4>
                            <p> Brand: {item.brand} </p>
                        </div>

                        <p> {item.price} </p>

                    </div>
     
                    )
                }

                
            </div>
                <hr />

                <div className="order_summary_info"> 

                    <div className="order_summary_info_item">
                        <p> Item Total </p>
                        <p> ${calculateTotalPrice().toFixed(2)} </p>
                    </div>

                    <div className="order_summary_info_item">
                        <p> Shipping </p>
                        <p> ${
                               
                                shippingCost.toFixed(2)
                            
                            } </p>
                    </div>

                </div>

                <hr />

                <div>

                    <div className="order_summary_info_item">
                            <h4> Subtotal </h4>
                            <h4> ${(calculateTotalPrice() + shippingCost).toFixed(2)} </h4>
                    </div>


                </div>

                <div id="summary_button_container">
                    <Link to="/Purchased">
                        <button 
                            className="item_button"
                            onClick={removeAllCartItems}
                        > Confirm Purchase 
                        </button>
                    </Link>
                </div>
                

            </div>
            

        </div>

    )

}

export default OrderSummary