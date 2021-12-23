import React, {useState, useContext} from "react";
import ShirtContext from "../../context/Shirt/ShirtContext";
import UserContext from "../../context/User/UserContext";
import { useNavigate} from "react-router-dom";

export default function CreateShirt() {

	const navigate = useNavigate()

    //Estado Global
    const ctx = useContext(ShirtContext)
    const {
        createShirt
    } = ctx

	const ctxUser = useContext(UserContext)
	const {
		currentUser
	}=ctxUser

	if(!currentUser.admin){
	 navigate("/")
		
	}

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
			<form onSubmit={ (event) => { handleSubmit(event) } }>
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Team</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="team"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Price (USD)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="price" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="email-address" class="block text-sm font-medium text-gray-700">Year</label>
								<input 
									type="text" 
									name="year" 
									onChange={ (event) => { handleChange(event) } } 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="country" class="block text-sm font-medium text-gray-700">Status</label>
								<select 
									onChange={ (event) => { handleChange(event) } } 
									name="status"
									class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
									<option value={""}>
										---
									</option>
									<option value={"Home"}>
										Home
									</option>
									<option value={"Away"}>Away</option>
                                    <option value={"Third"}>Third</option>
								</select>
							</div>

                            <div class="col-span-6 sm:col-span-4">
								<label for="country" class="block text-sm font-medium text-gray-700">Category</label>
								<select 
									onChange={ (event) => { handleChange(event) } } 
									name="category"
									class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
									<option value={""}>
										---
									</option>
									<option value={"Club"}>
										Club
									</option>
									<option value={"International"}>International</option>
                                    
								</select>
							</div>

							<div class="col-span-6 sm:col-span-6 lg:col-span-4">
								<label for="city" class="block text-sm font-medium text-gray-700">Description</label>
								<textarea 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="description" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-4">
								<label for="city" class="block text-sm font-medium text-gray-700">Image</label>
								<textarea 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="image" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

                            

						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Save Shirt
						</button>
					</div>
				</div>
			</form>
		</>
	)
}