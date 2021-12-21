//imports
import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'

import UserState from "./context/User/UserState"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Auth from "./routes/Auth"

import Shirts from "./components/Shirts"
import CreateShirt from "./components/Shirts/Create"
import ShirtSate from "./context/Shirt/ShirtState"
import Single from "./components/Shirts/Single"

import EditShirt from "./components/Shirts/Single/Edit"

//funciones
function Router() {
    return (
        
            <ShirtSate>
                
                <BrowserRouter>



                    <Routes>
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Home />} />
                            <Route path="register"
                                element={<Auth component={Register} />} />

                            <Route path="login" element={<Auth component={Login} />} />

                            <Route path="shirts" element={<Shirts />} />
                            <Route path="shirts/create" element={<CreateShirt />} />
                            <Route path="shirts/:id" element={<Single />} />
                            <Route path="shirts/:id/edit" element={<EditShirt />} />



                        </Route>
                    </Routes>

                </BrowserRouter>
            </ShirtSate>
        
    )

}

//exports
export default Router