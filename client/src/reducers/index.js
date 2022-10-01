import { combineReducers } from "redux";
import Product_List_Reducer from "./Product_List_Reducer";
import Search_Options_Reducer from "./Search_Options_Reducer"
import Banner_Reducer from "./Banner_Reducer";
import Accounts_Reducer from "./Accounts_Reducer";
import Current_Account_Reducer from "./Current_Account_Reducer";

export default combineReducers({

    products: Product_List_Reducer,
    options: Search_Options_Reducer,
    banners: Banner_Reducer,
    accounts: Accounts_Reducer,
    currentAccount: Current_Account_Reducer

})