
import React, {useState, useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import ShirtContext from "../../../context/Shirt/ShirtContext";

export default function EditShirt() {

    //Estado global
    const params = useParams()
    const idShirt = params.id 

    const ctx = useContext(ShirtContext)

    const {
        singleShirt,
        getShirt,
        updateShirt
    }= ctx

    //Estado local
    const [shirtData, setShirtData] = useState({
        team: "",
        price: "",
        year: "",
        status: "",
        category:"",
        description: "",
        image: ""
    })

    //Funciones
    //UseEffect para actualizar datos del estado global
    useEffect(() =>{
        getShirt(idShirt)
    }, [])

    //UseEffect para actualizar datos del estado global al estad o local
    useEffect(() => {
        const{
            team,
            price,
            year,
            status,
            category,
            description,
            image
        } = ctx.singleShirt

        setShirtData({
            team: team,
            price: price,
            year: year,
            status: status,
            category: category,
            description: description,
            image: image
        })
    }, [singleShirt])

    const handleChange = (e) => {
        e.preventDefault()

        setShirtData({
            ...shirtData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        updateShirt(shirtData, idShirt)
    }

    return (
        <div>Shirt edit</div>
    )
}