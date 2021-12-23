//Estado Global

import { useReducer } from "react";
import ShirtContext from "./ShirtContext";
import ShirtReducer from "./ShirtReducer"
import axiosClient from "./../../config/axios";

const ShirtSate = (props) => {

    //Initial State
    const initialState = {
        shirts: [],
        singleShirt: {
            _id: "",
            team: "",
            price: "",
            year: "",
            status: "",
            category: "",
            description: "",
            image: ""
        }
    }
    //Reducer config
    const [globalState, dispatch] = useReducer(ShirtReducer, initialState)

    //Funciones
    const getShirts = async () => {
        const res = await axiosClient.get("shirts/readall")
        console.log("Getting Shirts")
        const list = res.data.data

        dispatch({
            type: "GET_SHIRTS",
            payload: list
        })
    }

    const getShirt = async (shirtId) => {
        

        const res = await axiosClient.get(`shirts/readone/${shirtId}`)

        console.log(res)

        const selectedShirt = res.data.data

        dispatch({
            type: "GET_SHIRT",
            payload: selectedShirt
        })

        return "Ready"
    }

    const createShirt = async (form) => {
        const res = await axiosClient.post("shirts/create", form, window.location.replace("/shirts"))
        console.log(res)
        
    }

    const updateShirt = async (form, idShirt) => {

        const res = await axiosClient.put(`shirts/edit/${idShirt}`, form, window.location.replace(`/shirts/${idShirt}`))

        const updatedShirt = res.data.data

        dispatch({
            type: "UPDATE_SHIRT",
            payload: updatedShirt
        })
        
    }

    const deleteShirt = async (idShirt) => {
        
        const res = await axiosClient.delete(`shirts/delete/${idShirt}`, window.location.replace("/shirts")) 
    }

    //Return
    return(
        <ShirtContext.Provider
            value={{
                shirts: globalState.shirts,
                singleShirt: globalState.singleShirt,
                getShirts,
                getShirt,
                createShirt,
                updateShirt,
                deleteShirt
            }}
            >
                {props.children}
        </ShirtContext.Provider>
    )

    
}

export default ShirtSate
