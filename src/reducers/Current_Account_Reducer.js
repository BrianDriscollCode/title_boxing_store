export default (current_account = initial_account, action) => {

    switch (action.type) {
        case "SET_CURRENT_ACCOUNT":
            return [action.payload]
        case "GET_CURRENT_ACCOUNT":
            return [...current_account]
        default: 
            return [...current_account]

    }

}

const initial_account = [

    {
        username: "GUEST",
        password: null,
        cart: []

    }

]