import React from "react"

const ShippingAddress = () => {

    return (

        <div id="shipping_address_container">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 1 </div> 
               <h2> Shipping Address </h2>
            </div>

            <form id="shipping_address_form">

                <div className="input_wrapper">
                    <label> Email Address</label>
                    <input />
                </div>
                

                <div id="shipping_address_names">

                    <div className="input_wrapper">
                        <label> First Name</label>
                        <input />
                    </div>
                    
                    <div className="input_wrapper">
                        <label> Last Name </label>
                        <input />
                    </div>
                    
                </div>

                <div className="input_wrapper">
                    <label> Street Address</label>
                    <input />
                </div>
                
                <div className="input_wrapper">
                    <label> Phone Number </label>
                    <input />
                </div>
                
                

            </form>

        </div>

    )

}

export default ShippingAddress