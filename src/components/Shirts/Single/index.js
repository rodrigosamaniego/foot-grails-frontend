import React, {useContext, useEffect} from "react";
import ShirtContext from "../../../context/Shirt/ShirtContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleShirt() {
    const ctx = useContext(ShirtContext)
    const {getShirt, singleShirt} = ctx
    const params = useParams()
    const id = params.id

    useEffect(() =>{
        getShirt(id)
    }, [])
    return (
        <div>
          <p>  ${singleShirt.team} </p>
        </div>
    )
}

