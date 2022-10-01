import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom" 
import logo from "../../images/logo_titleboxingretail.jpg"
import { Cart, PersonFill, Search } from "react-bootstrap-icons"

//Parent - src/header.js

const Page_Header = ( { cartAmount, username } ) => {


    const [itemsInCart , setItemsInCart] = useState(0)
    console.log(cartAmount)

    return (

        <div id="top_header_container">
            <div id="top_header_wrapper">

                <div id="main_logo_container">
                    <img src={logo} /> 
                </div>

                <div id="functionality_header_container">

                    <div id="functionality_header_items">
                        <div>
                            <Link to="/login" className="signIn"><PersonFill /></Link>
                            <Link to="/login" className="signIn" id="show_signIn">  Sign In </Link> 
                            <Link to="/login" className="signIn"><span id="show_username"> ({username}) </span></Link>
                        </div>
                        
                        <div className="spacer"> | </div>
                        
                        <div>
                            <Cart className="cart" />
                            <Link to="/cart" className="cart"> Cart ({cartAmount}) </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        


    )


}

export default Page_Header