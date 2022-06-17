import React, { useState } from "react";
import { ChevronCompactLeft } from "react-bootstrap-icons";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"

const Item_Gallery = ( { images } ) => {

    const [current, setCurrent] = useState(0)

    const length = images[0].length - 1;

    const setImageOnPicker = (pickedImage) => {


            setCurrent(pickedImage)
    
    }
    
    const setPrevSlide = (setting) => {

        if (setting == "minus") {
            setCurrent(current == 0 ? length: current - 1)
        } else {
            setCurrent(current == length ? current - length: current + 1)
        }
        console.log(current)

    }

    let counter = 0;

    return (

        <div id="gallery_container">

            <div id="outer_image_gallery_single">

                    <div id="left_arrow_gallery" onClick={() => setPrevSlide('minus')}>
                        <FaRegArrowAltCircleLeft />
                    </div>
                
                    
                    <div id="image_gallery_single">
                        {
                            images[0].map((image, index) => 
                                
                                index === current ? 
                                    <img    src={image} 
                                            className={index === current ? 'slide active' : 'slide'}
                                            key={index} 
                                    /> : null
                                
                                
                            )

                        }
                    </div> 

                    
                    <div id="right_arrow_gallery" onClick={() => setPrevSlide('plus')}>
                        <FaRegArrowAltCircleRight />
                    </div>
                
            </div>

            <div id="gallery_images_picker">

                {


                    images[0].map((image, index) => 
                    
                    <div className="image_picker_containers">

                        <img 
                            src={image} 
                            className={index === current ? 'selected image_picker_items' : 'unselected image_picker_items'}
                            key={index}
                            onClick={() => setImageOnPicker(index)}
                        />

                    </div>

                    )

                }

            </div>
        </div>

    )

}

export default Item_Gallery;