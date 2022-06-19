import React from "react";
import { Link } from "react-router-dom"

const Home_Reel = ( { products } ) => {

    return (

        <div id="home_reel"> 

            {

                products.slice(0,6).map(product =>
                    
                        <div className="reel_images">
                            <Link 
                            to={`/product/${product.type}/${product.id}`} 
                            >
                    
                                <img src={`${product.mini_image}`} className="single_reel_image"/>  

                            </Link> 
                        </div>
                        
                     
                    
                )

            }

        </div> 

    )

}

export default Home_Reel