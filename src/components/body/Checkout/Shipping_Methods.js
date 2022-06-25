import React from "react"

const ShippingMethods = () => {

    return (

        <div id="shipping_methods_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 2 </div> 
               <h2> Shipping Method </h2>
            </div>

            <div id="shipping_method_container">

                <div id="shipping_method_options">
                    <div className="table_row_shipping">
                        <div> <input type="radio" /> </div>
                        <div> $8.00 </div>
                        <div> Standard </div>
                    </div>

                    <div className="table_row_shipping">
                        <div> <input type="radio" /> </div>
                        <div> $96.95 </div>
                        <div> 2-Day Air </div>
                    </div>

                    <div className="table_row_shipping">
                        <div> <input type="radio" /> </div>
                        <div> $123.95 </div>
                        <div> Next Day Air </div>
                    </div>
                </div>



            </div>

        </div>

    )

}

export default ShippingMethods