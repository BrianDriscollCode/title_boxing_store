import React from "react"

const OrderSummary = () => {

    return (

        <div id="order_summary_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 4 </div> 
               <h2> Shipping Method </h2>
            </div>

            <div>

                <p> 2 items </p> 

                <div className="order_summary_item">

                    <img src="#" />

                    <div> 
                        <h4> Title Ionic Body Gaurd </h4>
                        <p> Brand: Title</p>
                    </div>

                    <p> $119.99 </p>

                </div>

                <div className="order_summary_item">

                    <img src="#" />

                    <div> 
                        <h4> Title Ionic Body Gaurd </h4>
                        <p> Brand: Title</p>
                    </div>

                    <p> $119.99 </p>

                </div>

                <div className="order_summary_info"> 

                    <div className="order_summary_info_item">
                        <p> Subtotal </p>
                        <p> $631.93 </p>
                    </div>

                    <div className="order_summary_info_item">
                        <p> Shipping </p>
                        <p> $20.00 </p>
                    </div>

                </div>

                <div>

                <div className="order_summary_info_item">
                        <h4> Shipping </h4>
                        <h4> $20.00 </h4>
                    </div>


                </div>


            </div>
            

        </div>

    )

}

export default OrderSummary