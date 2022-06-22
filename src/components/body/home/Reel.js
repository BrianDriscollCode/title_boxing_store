import React from "react";
import { Link } from "react-router-dom"
import { AnimationOnScroll } from "react-animation-on-scroll"

const Home_Reel = ( { products } ) => {

    return (

        
        <AnimationOnScroll animateIn="animate__fadeIn"><div id="home_reel"> 

            {

                products.slice(0,6).map((product, index) =>
                    
                        <div className="reel_images" key={product.type + index}>
                            <Link 
                            to={`/product/${product.type}/${product.id}`} 
                            >
                    
                                <img src={`${product.mini_image}`} className="single_reel_image"/>  

                            </Link> 
                        </div>
                        
                     
                    
                )

            }

        </div> </AnimationOnScroll>

    )

}

export default Home_Reel