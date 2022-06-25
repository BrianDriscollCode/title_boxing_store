import React from "react";
import OrderSummary from "./Order_Summary";
import Payment from "./Payment";
import ShippingAddress from "./Shipping_Address";
import ShippingMethods from "./Shipping_Methods";

import { connect } from "react-redux";


const Checkout_Page = ( { currentAccount, accounts } ) => {

    let account = accounts.filter(account => currentAccount[0].username == account.username)        

    return (
        

        <div id="checkout_div_container"> 

            <h2 id="announce"> **Page Building In Progress** </h2> 
        
            <div id="checkout_div_wrapper"> 

                <ShippingAddress />

                <div id="middle_row_checkout">
                    <ShippingMethods />
                    <Payment />
                </div>

                <OrderSummary cartItems={account[0].cart} />
            </div>

        </div>

    )


}

const mapStateToProps = (state) => {

    return { currentAccount: state.currentAccount, accounts: state.accounts }

}

export default connect(mapStateToProps)(Checkout_Page)