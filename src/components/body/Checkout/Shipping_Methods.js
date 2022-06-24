import React from "react"

const ShippingMethods = () => {

    return (

        <div id="shipping_methods_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 2 </div> 
               <h2> Shipping Method </h2>
            </div>

            <div>

                <table>
                    <tr>
                        <th> <input type="radio" /> </th>
                        <th> $8.00 </th>
                        <th> Standard </th>
                    </tr>

                    <tr>
                        <th> <input type="radio" /> </th>
                        <th> $96.95 </th>
                        <th> 2-Day Air </th>
                    </tr>

                    <tr>
                        <th> <input type="radio" /> </th>
                        <th> $123.95 </th>
                        <th> Next Day Air </th>
                    </tr>
                    
                </table>



            </div>

        </div>

    )

}

export default ShippingMethods