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
                    <input 
                        className="input_sizes"
                        value="4000 5086 1083 1851"
                    />
                </div>

                <div id="date_and_cvv">
                    <div className="input_wrapper">
                        <label> Expiry date </label>
                        <input 
                            className="input_sizes" 
                            id="expiry_date"
                            value="2/23" />
                    </div>

                    <div className="input_wrapper">
                        <label> CVC/CVV </label>
                        <input 
                            className="input_sizes" 
                            id="CVV"
                            value="971"
                        />
                    </div>

                </div>

                <div className="input_wrapper">
                    <label> Name on card </label>
                    <input 
                        className="input_sizes" 
                        value="Joe smith"
                    />
                </div>

            </form>

        </div>

    )

}

export default Payment