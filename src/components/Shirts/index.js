//
import React, {useEffect, useContext} from "react";
import ShirtContext from "../../context/Shirt/ShirtContext";
 
import { Link } from 'react-router-dom'

export default function Shirts() {

    //Estado Global
    const ctx = useContext(ShirtContext)

    const {
    shirts,
    changeText,
    getShirts } = ctx

    //Estado Local
    useEffect(() => {
        getShirts()
    }, [])

    return (
        <>
        Hola mundo</>
    )

}