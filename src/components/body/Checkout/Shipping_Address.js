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
                    <label> Email Address </label>
                    <input 
                        className="input_sizes" 
                        value="joe.smith@gmail.com"
                    />
                </div>
                

                <div id="shipping_address_names">

                    <div className="input_wrapper">
                        <label> First Name </label>
                        <input 
                            className="input_sizes" 
                            id="first_name_1" 
                            value="Joe"
                        />
                    </div>
                    
                    <div className="input_wrapper">
                        <label> Last Name </label>
                        <input 
                            className="input_sizes" 
                            id="last_name_1" 
                            value="Smith" />
                    </div>
                    
                </div>

                <div className="input_wrapper">
                    <label> Street Address </label>
                    <input 
                        className="input_sizes" 
                        value="4297 E Cordle Dr"
                    />
                </div>
                
                <div className="input_wrapper">
                    <label> Phone Number </label>
                    <input 
                        className="input_sizes" 
                        value="589-384-8380"
                    />
                </div>
                
                

            </form>

        </div>

    )

}

export default ShippingAddress