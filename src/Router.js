//imports
import React  from "react"
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

import PrivateRoute from "./routes/Private"
import AboutUs from "./components/AboutUs"

import Spinner from "./components/Spinner"


//funciones
function Router() {
    
    
    return (
        
            <ShirtSate>
                <UserState>
                <BrowserRouter>



                    <Routes>
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Home />} />
                            <Route path="register"
                                element={<Auth component={Register} />} />

                            <Route path="login" element={<Auth component={Login} />} />
                            <Route path="about-us" element={<Spinner component={AboutUs} />} />
                            
                            <Route path="shirts" element={<Spinner component={Shirts} />} />
                            <Route path="shirts/create" element={<PrivateRoute component={CreateShirt} />} />
                            <Route path="shirts/:id" element={<Single />} />
                            <Route path="shirts/:id/edit" element={<PrivateRoute component={EditShirt} />} />



                        </Route>
                    </Routes>

                </BrowserRouter>
                </UserState>
            </ShirtSate>
        
    )

}

//exports
export default Router