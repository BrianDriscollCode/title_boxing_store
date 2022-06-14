import { combineReducers } from "redux";
import Product_List_Reducer from "./Product_List_Reducer";
import Search_Options_Reducer from "./Search_Options_Reducer"

export default combineReducers({

    products: Product_List_Reducer,
    options: Search_Options_Reducer

})