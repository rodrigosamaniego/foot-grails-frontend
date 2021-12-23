//Login user
import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Login() {

    const ctx = useContext(UserContext)

    const {
        loginUser,
        errorUserMessage
    }= ctx

    //Estado local
    const[logUser, setLogUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        e.preventDefault()

        setLogUser({
            ...logUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        loginUser(logUser)
    }

    return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://image.flaticon.com/icons/png/512/118/118997.png" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account? &nbsp;
          <Link to="/register">
            <a className="font-medium text-yellow-500 hover:text-yellow-300">
              Register here.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form 
            className="space-y-6"
            onSubmit={(e) => { handleSubmit(e) }}
          >
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => { handleChange(evt) }} 
                  name="email" 
                  type="email" 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input 
                  onChange={(evt) => { handleChange(evt) }} 
                  name="password" 
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            {
							errorUserMessage ? 
							
							<p>{errorUserMessage}</p>
							:
							null
						}



            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Log into your account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
	)
}