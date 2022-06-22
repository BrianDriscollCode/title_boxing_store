import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {

    return (

        <div id="footer_page">
            <div id="outer_footer_container">
                <div id="footer">

                    <div id="footer_container">
                        <h3> Shopping Information </h3> 

                        <div id="footer_link_wrap">
                            <Link className="footer_link" to="/product/boxing_glove"> Boxing Gloves </Link>
                    
                            <Link className="footer_link" to="/product/shoes"> Boxing Shoes </Link>
                        
                            <Link className="footer_link" to="/product/headgear"> Headgear </Link>
                        
                            <Link className="footer_link"> Punching Bags </Link>
                
                            <Link className="footer_link"> Trainer Gear </Link>
                        </div>
                    </div>

                    <div id="footer_container">
                        <h3> Sign In </h3>

                        <div id="footer_link_wrap">
                            <Link className="footer_link" to="/login" > Sign In </Link>
                            
                            <Link className="footer_link" to="/create_account"> Create Account </Link>
                        
                        </div>
                    </div>

                    <div id="footer_container" className="rights_container">
                        <p>© 2022 Title Boxing. All rights reserved.</p>

                    </div>
                
                </div>
            </div>
        </div>

    )

}

export default Footer