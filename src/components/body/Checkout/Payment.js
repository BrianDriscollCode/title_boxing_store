import React from "react"

const Payment = () => {

    return (

        <div id="payment_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 3 </div> 
               <h2> Payment Info </h2>
            </div>

            <form id="credit_card_form">

                <div className="input_wrapper">
                    <label> Card number </label>
                    <input className="input_sizes" />
                </div>

                <div id="date_and_cvv">
                    <div className="input_wrapper">
                        <label> Expiry date </label>
                        <input className="input_sizes" id="expiry_date"/>
                    </div>

                    <div className="input_wrapper">
                        <label> CVC/CVV </label>
                        <input className="input_sizes" id="CVV"/>
                    </div>

                </div>

                <div className="input_wrapper">
                    <label> Name on card </label>
                    <input className="input_sizes" />
                </div>

            </form>

        </div>

    )

}

export default Payment