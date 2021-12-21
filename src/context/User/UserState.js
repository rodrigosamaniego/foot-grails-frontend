import { useReducer } from "react";

import UserReducer from './UserReducer'
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {

    //Initial State
    const initialState = {
        currentUser: {
            email: "",
            username: "",
            country: "",
            admin: "",
            password: ""
        },
        authStatus: false
    }
    //Reducer config
    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    //Funciones
    const registerUser = async (form) => {

        const res = await axiosClient.post("users/create", form)

        console.log(res)

        const token = res.data.data

        dispatch({
            type:"REGISTER_SUCCESFUL",
            payload: token
        })
    }

    const loginUser = async (form) => {
        
        console.log(form)

        const res = await axiosClient.post("users/login", form)

        console.log(res)

        const token = res.data.data

        dispatch({
            type: "LOGIN_SUCCESFUL",
            payload: token
        })
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem("token")

        if(token) {
            axiosClient.defaults.headers.common["x-auth-token"] = token
        } else {
            delete axiosClient.defaults.headers.common["x-auth-token"]
        }

        try {
            const res = await axiosClient.get("users/verifytoken")

            console.log(res)

            const userData = res.data.data

            dispatch({
                type: "GET_DATA_USER",
                payload: userData
            })
        } catch(error){
            console.log(error)
        }
    }

    const logoutUser = async () => {

        dispatch({
            type: "LOGOUT_USER"
        })
    }

    //Return
    return (
        <UserContext.Provider
            value={{
                currentUser: globalState.currentUser,
                authStatus: globalState.authStatus,
                registerUser,
                loginUser,
                verifyingToken,
                logoutUser
            }}
        >

        </UserContext.Provider>
        
    )
}

export default UserState