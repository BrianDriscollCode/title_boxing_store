import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom" 
import { AnimationOnScroll } from "react-animation-on-scroll"


const Home_Banner = () => {

    const [current, setCurrent] = useState(0);

    const changeBanner = (number) => {

        number == 0 ?
            number = 1:
            number = 0

        setCurrent(number)
        console.log(number)

    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(current == 0 ? 1 : 0)
        }, 7000);
        return () => clearInterval(interval);
      });

    return (

        <div id="home_banner"> 
            <div className="home_gallery">

            <div className={1 === current ? 'slider_home active' : 'slider_home inactive'}>
               
                    <img src="home/Hero-Ali_5.jpg" width="100%" height="auto" /> 
                
                    <div id="heroTag"> 
                        <h2> AMAZING GLOVES </h2> 
                        <p> Look at our selection of high-quality boxing gloves! </p> 
                        <Link to="/product/boxing_glove"><button className="item_button"> SHOP NOW </button></Link> 
                    </div>
                
            </div>

            <div  className={0 === current ? 'slider_home active' : 'slider_home inactive'}>
              
                    <img src="home/Hero-Ali_4.jpg" width="100%" height="auto" /> 
                
                    <div id="heroTag"> 
                        <h2> PROFESSIONAL GEAR </h2> 
                        <p> Look at our selection of professional boxing gear! </p> 
                        <Link to="/product/shoes"><button className="item_button"> SHOP NOW </button></Link> 
                    </div>
               
            </div>
            
                    <div 
                        id="chooser1" 
                        className={1 === current ? 'chooser active' : 'chooser inactive'} 
                        onClick={() => changeBanner(0)}> 
                    </div>
                    <div 
                        id="chooser2" 
                        className={0 === current ? 'chooser active' : 'chooser inactive'} 
                        onClick={() => changeBanner(1)}> 
                    </div>

            </div>

        </div>

    )

}

export default Home_Banner