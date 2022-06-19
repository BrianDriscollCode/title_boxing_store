import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Shopping_Cart from "./Shopping_Cart";

const Cart_Page = ( { accounts, currentAccount } ) => {

    const [currentCart, setCurrentCart] = useState([])

    let pageAccount = [

        {

            cart: null //prevents error when nothing in cart

        }

    ];

    //update cart on rerender
    useEffect(() => {

        pageAccount = accounts.filter(account => 
            
            account.username == currentAccount[0].username
            
        )

        setCurrentCart(pageAccount[0]?.cart)
    })

    return (
        

        <div className="page_div">

            <h2> Cart </h2> 

            <Shopping_Cart cart_items={currentCart} />
        
        </div>

    )


}

const mapStateToProps = (state) => {

    return { currentAccount: state.currentAccount, accounts: state.accounts }
            
}

export default connect(mapStateToProps)(Cart_Page)