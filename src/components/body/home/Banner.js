import React from "react";
import { Link } from "react-router-dom" 
import { AnimationOnScroll } from "react-animation-on-scroll"


const Home_Banner = () => {

    return (

        <div id="home_banner"> 
            <AnimationOnScroll animateIn="animate__fadeIn">
                <img src="home/Hero-Ali_5.jpg" width="100%" height="auto" /> 
            
                <div id="heroTag"> 
                    <h2> AMAZING GLOVES </h2> 
                    <p> Look at our selection of high-quality boxing gloves! </p> 
                    <Link to="/product/boxing_glove"><button className="item_button"> SHOP NOW </button></Link> 
                </div>
            </AnimationOnScroll>

    
        </div>

    )

}

export default Home_Banner