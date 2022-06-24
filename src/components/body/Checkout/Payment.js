import React from "react"

const Payment = () => {

    return (

        <div id="payment_section">

            <div className="checkout_title_sections">
               <div className="checkout_title_numbers"> 3 </div> 
               <h2> Shipping Method </h2>
            </div>

            <form id="credit_card_form">

                <div id="credit_card_section_input"> 
                    <input type="radio" />
                    <div id="payment_cards">
                        <img src="#" />
                        <img src="#" />
                        <img src="#" />
                        <img src="#" />
                    </div>
                </div>

                <div id="input_wrapper">
                    <label> Card number </label>
                    <input />
                </div>

                <div id="date_and_cvv">
                    <div id="input_wrapper">
                        <label> Expiry date </label>
                        <input />
                    </div>

                    <div id="input_wrapper">
                        <label> CVC/CVV </label>
                        <input />
                    </div>

                </div>

                <div id="input_wrapper">
                    <label> Name on card </label>
                    <input />
                </div>

            </form>

        </div>

    )

}

export default Payment