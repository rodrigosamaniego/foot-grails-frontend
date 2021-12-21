// User Reducer

const reducer = (globalState, action) => {

    switch (action.type) {

        case "REGISTER_SUCCESFUL":
        case "LOGIN_SUCCESFUL":
            localStorage.setItem("token", action.payload)
    
            return {
                ...globalState,
                authStatus: true
            }
        case "LOGOUT_USER":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,
            }
        
        case "GET_DATA_USER":
            return {
                ...globalState,
                authStatus: true,
                currentUser: action.payload
            }

        default: 
            return globalState



    }
}

export default reducer