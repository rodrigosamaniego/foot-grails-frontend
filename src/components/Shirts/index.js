//
import React, {useEffect, useContext} from "react";
import ShirtContext from "../../context/Shirt/ShirtContext";
import UserContext from "../../context/User/UserContext";
 
import { Link } from 'react-router-dom'

export default function Shirts() {

    //Estado Global
    const ctx = useContext(ShirtContext)

    const {
    shirts,
	
    
    getShirts } = ctx

	const ctxUser = useContext(UserContext)

	const {
		currentUser
	}=ctxUser

    //Estado Local
    useEffect(() => {
        getShirts()
    }, [])

    return (
		<>
			<div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
				<div class="md:flex md:items-center md:justify-between">
					<div class="flex-1 min-w-0">
						<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
							Shirts
						</h2>
					</div>
					
						

					
					
					
					
				</div>
					


				<div class="bg-white">
					<div>
						<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

							{
								shirts.map(element => {
									return (
										<>
											<div class="">
												<div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
													<Link to={`/shirts/${element._id}`} >
													<img src={element.image} alt="Shirt Image" class="w-full h-full object-center object-cover" />
													</Link>
												</div>
												<div class="pt-10 pb-4 text-center">
													<h3 class="text-sm font-medium text-gray-900">
														<Link to={`/shirts/${element._id}`} >
															{element.team}
														</Link>
													</h3>
                                                    <h3 class="text-sm font-medium text-gray-900">
														<Link to={`/shirts/${element._id}`} >
															{element.status}
														</Link>
													</h3>
                                                    
													<div class="mt-3 flex flex-col items-center">
														<p class="mt-1 text-sm text-gray-500">{element.year}</p>
													</div>
													<p class="mt-4 text-base font-medium text-gray-900">${element.price}</p>
												</div>
											</div>
										</>
									)
								})
							}

						</div>

					</div>
				</div>
			</div>

		</>					


		
	)
}