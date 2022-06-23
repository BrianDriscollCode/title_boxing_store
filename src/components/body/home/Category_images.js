import React from "react";
import { Link } from "react-router-dom" 
import { AnimationOnScroll } from "react-animation-on-scroll"


const Category_Images = () => {

    return (

        <div id="category_container"> 

            <hr id="category_line" />
            
            <div id="categories_wrapper"> 

                <AnimationOnScroll animateIn="animate__fadeIn">
                    <Link to="/product/boxing_glove">
                        <div 
                        className="category_image" 
                        id="category_1" 
                        style={{backgroundImage: `url(assets/home/boxing_glove_home.jpg)` }}
                        >

                        <div className="centered_text"> GLOVES </div> 

                        </div>
                    </Link>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn">
                    <Link to="/product/headgear">
                        <div 
                        className="category_image" 
                        id="category_2"
                        style={{backgroundImage: `url(assets/home/headgear_home.jpg)` }}
                        >

                        <div className="centered_text"> PROTECTION </div>

                        </div>
                    </Link>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn"><div 
                    className="category_image" 
                    id="category_3"
                    style={{backgroundImage: `url(assets/home/punching_bag_home.jpg)` }}
                >

                    <div className="centered_text"> <s>PUNCHING BAGS</s> </div>

                </div></AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn"><div 
                    className="category_image" 
                    id="category_4"
                    style={{backgroundImage: `url(assets/home/coach_gear_home.jpg)` }}
                >

                    <div className="centered_text"> 
                            <s> COACH {'&'} TRAINER </s>
                    </div>

                </div></AnimationOnScroll>

            </div>
            

        </div>

    )

}

export default Category_Images