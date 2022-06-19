import React from "react";

//Parent single/Item_Page.js

const Item_Info = ( { info } ) => {

    return (

        <div> 

            <h3> Information </h3>

            <p> { info[0].info } </p>

        </div>

    )

}

export default Item_Info