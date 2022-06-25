import React from "react";
import OrderSummary from "./Order_Summary";
import Payment from "./Payment";
import ShippingAddress from "./Shipping_Address";
import ShippingMethods from "./Shipping_Methods";


const Checkout_Page = () => {


    return (
        

        <div id="checkout_div_container"> 
        
            <div id="checkout_div_wrapper"> 

                <ShippingAddress />

                <div id="middle_row_checkout">
                    <ShippingMethods />
                    <Payment />
                </div>

                <OrderSummary/>
            </div>

        </div>

    )


}

export default Checkout_Page