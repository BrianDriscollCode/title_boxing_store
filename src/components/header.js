import React from "react"
import Page_Header from "./head/Page_Header"
import Navigation from "./head/Navigation"
import Shipping_Info from "./head/Shipping_info"

const Header = () => {


    return (


        <div id="header">


            <Page_Header />
            <Navigation />
            <Shipping_Info />
            

        </div>

    )


}

export default Header