import React, { useState } from "react"
import logo from "../../images/logo_titleboxingretail.jpg"
import { Cart, PersonFill, Search } from "react-bootstrap-icons"


const Page_Header = () => {


    const [itemsInCart , setItemsInCart] = useState(0)

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
                        <a> Sign In </a> 
                        <div> | </div>
                        <Cart className="cart" />
                        <a className="cart"> Cart ({itemsInCart}) </a>

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