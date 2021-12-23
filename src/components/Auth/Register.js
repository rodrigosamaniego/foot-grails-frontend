//Register
import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";


export default function Register() {

    const ctx = useContext(UserContext)

    const{
        registerUser,
		errorMessage,
		
    } = ctx

    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        country: "",
        password: "",
        confirmpassword: ""
    })

    const handleChange = (e) => {
        e.preventDefault()

        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(newUser)
    }

    return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img className="mx-auto h-12 w-auto" src="https://image.flaticon.com/icons/png/512/118/118997.png" />
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Create an account
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Already have an account? &nbsp;
					<Link to="/login">
						<a className="font-medium text-yellow-500 hover:text-yellow-300">
							Log in.
						</a>
					</Link>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form 
					onSubmit={(event) => { handleSubmit(event) }}
					className="space-y-6">
						<div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Username
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="username"
									type="text"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

                        <div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Country
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="country"
									type="text"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label for="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
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
									onChange={(event) => { handleChange(event)}}
									name="password"
									type="password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Confirm your password
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="confirmpassword"
									type="password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						{
							errorMessage ? 
							
							<p>{errorMessage}</p>
							:
							null
						}



						<div>
							<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								Create your account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)

        
}