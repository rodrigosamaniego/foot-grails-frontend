//imports
import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'

import Shirts from "./components/Shirts"
import CreateShirt from "./components/Shirts/Create"
import ShirtSate from "./context/Shirt/ShirtState"

//funciones
const Router = () => {
    <BrowserRouter>
        <ShirtSate>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home /> } />

                    <Route path="shirts" element={<Shirts />} />
                    <Route path="shirts/create" element={<CreateShirt />} />



                </Route>
            </Routes>
        </ShirtSate>
    </BrowserRouter>




}
//exports
export default Router