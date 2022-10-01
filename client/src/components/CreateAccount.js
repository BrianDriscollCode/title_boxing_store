import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import { accountActions } from "../actions";

//Inheriting styling from login.scss

const CreateAccount = ( {accounts, accountActions} ) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const [usernameExists, setUsernameExists] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false)

    //add account to redux state
    const addAccount = (e) => {

        e.preventDefault();
        console.log(accounts)

        //check for matching usernames
        const accountComparison = accounts.filter(

            account => account.username.toLowerCase() == username.toLowerCase().trim()
        
        )

        //if matching username in "DB", send back error, if not, create account
        if (accountComparison[0]?.username.toLowerCase() != username.toLowerCase()) {

            accountActions("ADD_ACCOUNT", {username: username.toLowerCase().trim(), password: password, cart: []})
            setUsernameExists(false);
            setAccountCreated(true)

        } else {

            setUsernameExists(true)
            setAccountCreated(false)

        }

        


    }

    

    return (

        <div id="create_page_container">
            <h2> Create Account </h2>

            <div id="create_page_wrapper">
            
                <div id="create_container">

       
                    <form id="create_form">

                        <div className="create_input_login">
                            <label> Username </label>
                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            {
                                usernameExists ?
                                    <span className="form_warning"> *Username exists* </span>:
                                    null
                            }

                            {
                                accountCreated ?
                                    <span className="form_success"> *Account created!* </span>:
                                    null

                            }
                            
                        </div>

                        <div className="create_input_login">
                            <label> Password </label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /> 
                        </div>

                        <div id="create_account_button">
                            <button  
                                className="item_button login_button"
                                onClick={(e) => addAccount(e)}
                            > Create Account </button> 
                        </div>
                        

                    </form>
            
                </div>
            </div>  
        </div>

    )

}

const mapStateToProps = (state) => {

    return { accounts: state.accounts }

}

export default connect(mapStateToProps, { accountActions })(CreateAccount)