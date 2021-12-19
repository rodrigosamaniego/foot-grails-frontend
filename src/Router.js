//imports
import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'

import Shirts from "./components/Shirts"
import CreateShirt from "./components/Shirts/Create"
import ShirtSate from "./context/Shirt/ShirtState"
import SingleShirt from "./components/Shirts/Single"
import CreateShirt from "./components/Shirts/Create"
import EditShirt from "./components/Shirts/Single/Edit"

//funciones
const Router = () => {
    <BrowserRouter>
        <ShirtSate>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home /> } />

                    <Route path="shirts" element={<Shirts />} />
                    <Route path="shirts/create" element={<CreateShirt />} />
                    <Route path="shirts/:id" element={<SingleShirt />} />
                    <Route path="shirts/:id/edit" element={<EditShirt />} />



                </Route>
            </Routes>
        </ShirtSate>
    </BrowserRouter>




}
//exports
export default Router