//Shirt Reducer

const reducer = (globalState, action) => {

    switch(action.type) {

        case "GET_SHIRT":
        case "UPDATE_SHIRT":
            return {
                ...globalState,
                guitars: action.payload
            }
        case "GET_SHIRTS":
            return {
                ...globalState,
                shirts: action.payload
            }
        
        default:
            return globalState
    }
}

export default reducer