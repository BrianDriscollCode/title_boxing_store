import axios from "axios";
import React, { useState } from "react"
import { Link } from "react-router-dom"

const Create_Account = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]  = useState("");
    const [phone, setPhone] = useState("");


    //whole birthdate
    const [birthDate, setBirthDate] = useState("1940-01-01");

    //form validation
    const [showUsernameValidationText, setShowUsernameValidationText] = useState(false);
    const [usernameValidationText, setUsernameValidationText] = useState("Must be longer than 2 characters")

    const [showPasswordValidationText, setShowPasswordValidationText] = useState(false);
    const [showFirstNameValidationText, setShowFirstNameValidationText] = useState(false);
    const [showLastNameValidationText, setShowLastNameValidationText] = useState(false);


    //submit validation
    const [accountSubmitted, setAccountSubmitted] = useState(false);

    const handleChange = (e, statePicker, dateSetter) => {

        switch(statePicker) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "phone_number": 
                setPhone(e.target.value);
                break;
            case "lastname":
                setLastName(e.target.value);
                break;
        }

    }

    //This function (create_account) calls these functions:
    // 1. validate_password - puts password through series of regular expression checks
    // 2. validate_form - puts username, firstname, and lastname through length checks
    // 3. submit_create_account_request - submits nested post requests. 
    //      A) First post request checks to see if there is a matching username
    //      B) Second post request posts the new account to database if there is
    //         no matching username from the first post request

    const create_account = async (e) => {

        e.preventDefault();

        let passReqFulfilled =  validate_password(password);

        //Validate form params accepts form string and submits a "type" for the function logic
        let userReqFulfilled = validate_form(username, "username");
        let firstNameReqFulfilled = validate_form(phone, "firstName");

        if (
                userReqFulfilled
                && passReqFulfilled
                && firstNameReqFulfilled
            ) 
        {
            submit_create_account_request();

        } else {

            console.log("form not filled out")
            setAccountSubmitted(false)
        
        }


    }

    const submit_create_account_request = async () => {

        let single_account;

        console.log('get request run username -', username);

            let comparisonResponse = await axios.post("http://localhost:9000/create_account/compare", {
                
                data: {
                    username: username,
                }

            })
            .then(res => {

                console.log(res.data, " -create account response")
                single_account = res;
            
            })
            .then(() => {

                console.log('post request run');
                if (single_account.data.length < 1) {
                    console.log(username, password, phone)
                    let response = axios.post("http://localhost:9000/create_account", {

                        data: {

                            username: username,
                            password: password,
                            cart:'[]',
                            phone_number: phone,

                        }

                    })

                    console.log("account posted")
                    setAccountSubmitted(true)
                }
                else {

                    console.log("account not posted due to duplicate username")
                    setUsernameValidationText("Username already exists");
                    setShowUsernameValidationText(true);
                    setAccountSubmitted(false)

                }
            })
    }

    const validate_password = (password) => {
        
        //test lowercase letters
        let checkLowercaseREGEX = /[a-z]/;
        //test uppercase letters
        let checkUppercaseREGEX = /[A-Z]/;
        //test digits
        let checkDigitsREGEX = /\d/;
        //test special characters
        let checkSpecialCharREGEX = /[!@#$%^&*()+=/\<>`~?,.-]/;

        if (
            checkLowercaseREGEX.test(password)
            && checkUppercaseREGEX.test(password)
            && checkDigitsREGEX.test(password)
            && checkSpecialCharREGEX.test(password)
        ) 
            {
                setShowPasswordValidationText(false)
                return true
            } 
        else 
            {
                setShowPasswordValidationText(true)
                return false
            }

    }

    const validate_form = (input, type) => {

        if (type === "username") {
                
            if (input.length >= 2) {

                setShowUsernameValidationText(false)
                return true;

            } else {

                setShowUsernameValidationText(true)
                setUsernameValidationText("Must be longer than 2 characters")
                return false;
           
            }
           
        } else if (type === "firstName") {

            if (input.length >= 2) {

                setShowFirstNameValidationText(false)
                return true;

            } else {

                setShowFirstNameValidationText(true)
                return false;
           
            }

        } else if (type === "lastName") {

            if (input.length >= 2) {

                setShowLastNameValidationText(false)
                return true;

            } else {

                setShowLastNameValidationText(true)
                return false;
           
            }

        } else {

            return false;
        }
    }

    const print_days_selection = () => {

        let days = [];
        for (let i = 1; i <= 31; i++) {

            days[i] = <option value={(i < 10) ? `0${i}` : `${i}`}> {i} </option>;

        }

        return days;

    }

    const print_years_selection = () => {

        let years = [];
        let minimumAge = 14;

        for (let i = 1940; i <= new Date().getFullYear() - minimumAge; i++) {

            years[i] = <option value={`${i}`}> {i} </option>

        }

        return years;

    }

    return (

        <div id="create_account_container"> 

            <div id="create_account_title_wrapper">

                <h2 id="login_title"> Fill out the form: </h2>

            </div>

            <div id="account_form_container">

                <form>
                    <table>

                    <tr>
                        <th>
                            <Link to="/login">
                                <button 
                                className="page_button_"
                                style={{ display: accountSubmitted ? 'inline' : 'none'}}
                            > 
                                Back to Login
                                </button>
                            </Link>
                        </th>
                    </tr>


                    <tr>
                        <th className="table_cell">
                            <label htmlFor="username"> Username </label>
                            <input id="username_input" onChange={(e) => handleChange(e, "username")} />
                        </th>
                        <span 
                            style={ {opacity: showUsernameValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            {usernameValidationText}
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="password"> Password </label>
                            <input id="passowrd_input" type="password" onChange={(e) => handleChange(e, "password")} />
                        </th>
                        <span 
                            style={ {opacity: showPasswordValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            include upper and lowercase, number, and special character 
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="first_name"> Phone Number </label>
                            <input 
                                id="first_name_input" 
                                onChange={(e) => handleChange(e, "phone_number")}
                                type="tel"
                                pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                           />
                        </th>
                        <span 
                            style={ {opacity: showFirstNameValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            Ex: 1-520-333-9854
                        </span>
                    </tr>

                    <tr>

                        <th id="table_cell_button">

                            <button 
                                className="page_button_"
                                onClick={(e) => create_account(e)}
                            > 
                                Submit 
                            </button>

                        </th>

                    </tr>

                    <tr>

                        <th>
                            <span 
                                className="success_text_"
                                style={{opacity: accountSubmitted ? '1' : '0'}}
                            > 
                            Success </span>
                        </th>

                    </tr>

                    </table>

                </form>
                
            </div> 

        </div>

    );

}

export default Create_Account;