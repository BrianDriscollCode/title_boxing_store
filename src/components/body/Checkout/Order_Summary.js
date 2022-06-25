import React from "react"

const OrderSummary = ( { cartItems } ) => {


    console.log(cartItems)
    let totalPrice = 0;

    const calculateTotalPrice = () => {

        totalPrice = 0;

        for (let i = 0; i < cartItems.length; i++) {


            totalPrice += cartItems[i].price 

        }

        return totalPrice;

    }

    return (

        <div id="order_summary_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 4 </div> 
               <h2> Order Summary </h2>
            </div>

            <div>

                <p id="amount_of_items"> {cartItems.length} items </p> 

            <div id="order_summary_item_list">

                <hr />


                {
                    cartItems.map(item => 
                        
                    <div className="order_summary_item">

                        <img src={item.mini_image} width="100px" height="auto"/>

                        <div> 
                            <h4> {item.name} </h4>
                            <p> Brand: {item.brand} </p>
                        </div>

                        <p> {item.price} </p>

                    </div>
     
                    )
                }

                <hr />
            </div>
                

                <div className="order_summary_info"> 

                    <div className="order_summary_info_item">
                        <p> Subtotal </p>
                        <p> ${calculateTotalPrice()} </p>
                    </div>

                    <div className="order_summary_info_item">
                        <p> Shipping </p>
                        <p> $20.00 </p>
                    </div>

                </div>

                <div>

                <div className="order_summary_info_item">
                        <h4> Subtotal </h4>
                        <h4> ${calculateTotalPrice() + 20} </h4>
                </div>


                </div>


            </div>
            

        </div>

    )

}

export default OrderSummary