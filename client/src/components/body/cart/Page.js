import React, { useEffect, useState } from "react";
import { ChevronCompactLeft } from "react-bootstrap-icons";
import { connect } from "react-redux";

import Shopping_Cart from "./Shopping_Cart";
import Shopping_Summary from "./Summary";

const Cart_Page = ( { currentAccount } ) => {

    const [currentCart, setCurrentCart] = useState([])

    let pageAccount = [

        {

            cart: null //prevents error when nothing in cart

        }

    ];

    //update cart on rerender
    // useEffect(() => {

    //     pageAccount = accounts.filter(account => 
            
    //         account.username == currentAccount[0].username
            
    //     )

    //     setCurrentCart(currentAccount[0].cart)
    // })

    return (
        

        <div className="cart_page_div">


            <div id="cart_page_container">

                <Shopping_Cart 
                    cart_items={currentCart} 
                    currentAccount={currentAccount}
                    //accounts={accounts}
                />
                <Shopping_Summary cart_items={currentCart} />
                
            </div>

            
        
        </div>

    )


}

const mapStateToProps = (state) => {

    return { currentAccount: state.currentAccount } // deleted accounts
            
}

export default connect(mapStateToProps)(Cart_Page)