const initial_accounts = [

    {
        username: "brianR",
        password: "password",
        cart: []

    },
    {
        username: "MichaelA",
        password: "password123",
        cart: []

    }

]


export default (all_accounts = initial_accounts, action) => {

    switch (action.type) {
        case "ADD_ACCOUNT":
            return [...all_accounts, action.payload]
            break;
        case "GET_ACCOUNT": 
            console.log([...all_accounts])
            console.log(action.payload)
            const account = all_accounts.filter(
                
                account => account.username == action.payload.username
                
            )
            console.log(account)
            return account;
            break;
        default: 
            return [...all_accounts]

    }




}
