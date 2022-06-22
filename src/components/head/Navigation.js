import React from "react"
import { Link } from "react-router-dom"

//Parent - src/header.js

const Navigation = () => {

    return (

        <div id="navigation_container">

            <div id="navigation_wrapper">

                <ul id="navigation_list">
                    <li id="menu_item_1" className="navigation_list_item"> 
                    
                        <Link to="/"> Home  </Link> 
                        
                    </li>
                    <li id="menu_item_2" className="navigation_list_item"> 
                    
                        <Link to="/product/boxing_glove"> Gloves </Link>
                        
                    </li>
                    <li id="menu_item_3" className="navigation_list_item"> 
                    
                        <Link to="/product/shoes"> Boxing Shoes </Link>
                        
                    </li>
                    <li id="menu_item_4" className="navigation_list_item"> 
                    
                    <Link to="/product/headgear"> Head Gear </Link>
                        
                    </li> 

                    <li id="menu_item_4" className="navigation_list_item"> 
                    
                    <Link to="/product/headgear"> Punching Bags </Link>
                        
                    </li> 

                    <li id="menu_item_4" className="navigation_list_item"> 
                    
                    <Link to="/product/headgear"> Trainer Gear </Link>
                        
                    </li> 
                </ul>


            </div>

        </div>

    )


}

export default Navigation