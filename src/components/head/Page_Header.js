import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom" 
import logo from "../../images/logo_titleboxingretail.jpg"
import { Cart, PersonFill, Search } from "react-bootstrap-icons"

//Parent - src/header.js

const Page_Header = ( { cartAmount } ) => {


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

                        
                        <div className="non-visible"> Empty </div>
                        <div className="non-visible"> | </div>
                        <PersonFill />
                        <Link to="/login"> Sign In </Link> 
                        <div> | </div>
                        <Cart className="cart" />
                        <Link to="/cart" className="cart"> Cart ({cartAmount}) </Link>

                    </div>

                    <div id="search_container">
                        <input id="item_search" /> 
                        <button className="search_button"> <Search /> </button> 
                    </div>

                </div>

            </div>

        </div>
        


    )


}

export default Page_Header