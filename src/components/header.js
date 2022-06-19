import React from "react"
import { connect } from "react-redux"

import Page_Header from "./head/Page_Header"
import Navigation from "./head/Navigation"
import Shipping_Info from "./head/Shipping_info"

const Header = ( { accounts, currentAccount } ) => {

    //using current account to get updated account file from accounts
    //so cart length on top right of page can be updated
    const getCartLength = () => {

        const pageAccount = accounts.filter(account => account.username == currentAccount[0].username)  

        return pageAccount[0].cart.length

    }

    getCartLength();

    return (

        <div id="header">

            <Page_Header cartAmount={getCartLength()}/>
            <Navigation />
            <Shipping_Info />
            
        </div>

    )


}

const mapStateToProps = (state) => {

    return {
        accounts: state.accounts,
        currentAccount: state.currentAccount

    }

}

export default connect(mapStateToProps)(Header)