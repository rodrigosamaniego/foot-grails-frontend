import React, {useState, useContext} from "react";
import ShirtContext from "../../context/Shirt/ShirtContext";

export default function CreateShirt() {

    //Estado Global
    const ctx = useContext(ShirtContext)
    const {
        createShirt
    } = ctx

    //Estado Local
    const [newShirt, setNewShirt] = useState({
        team: "",
        price: "",
        year: "",
        status: "",
        category: "",
        description: "",
        image: ""
    })

    //Funciones
    const handleChange = (e) => {
        e.preventDefault()

        setNewShirt({
            ...newShirt,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        createShirt(newShirt)
    }

    return (
        <>
        crear shirt</>
    )
}