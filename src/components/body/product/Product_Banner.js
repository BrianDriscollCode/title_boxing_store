import React from "react"

//images
import Boxing_Gloves from "../../../images/Banner-Headgear_1.jpg"


const Product_Banner = () => {


    return (

                <div id="image_banner" style={ {backgroundImage: `url(${Boxing_Gloves})`} }> 

                    <div id="banner_text_area">

                        <div id="banner_content_wrapper">
                            <h3> Gloves</h3>

                            <span id="message"> From design to performance, color to construction or fit to feel, 
                                TITLE Boxing has the largest selection of boxing gloves in the world. 
                                We feature the most popular and in-demand brands including the entire 
                                range of TITLE Boxing, Fighting, Pro Mex, Rival, Adidas, Golden Boy 
                                Boxing, Muhammad Ali, WBC and so much more. Our range of gloves runs 
                                from professional world title fight gloves to the largest selection of 
                                bag gloves, training gloves, sparring gloves, competition gloves, MMA 
                                gloves, fitness gloves, women’s gloves and youth gloves.
                            </span>

                        </div>
                        
                        

                    </div>



                </div>

          
        


    )

}

export default Product_Banner