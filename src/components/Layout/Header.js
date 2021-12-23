// ./client/src/Layout/Header.js
import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'

export default function Header() {
    
    const ctx = useContext(UserContext)

    const{
        currentUser,
        verifyingToken,
        logoutUser
    } = ctx

    useEffect(() => {
        verifyingToken()
    },[])
	




	return (
		<header className="bg-gray">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
					

						<Link to="/">
							<img className="h-10 w-auto" src="https://image.flaticon.com/icons/png/512/118/118997.png" alt="" />
						</Link>
						<div className="ml-10 space-x-8 lg:block">
						
							<Link to="/shirts" className="text-base font-medium text-black hover:text-gray-50">
								Shirts
							</Link>
							
							<Link to="/about-us" className="text-base font-medium text-black hover:text-gray-50">
								About us
							</Link>
                            

						</div>
                       

					</div>
                    <div className="flex items-center"></div>  
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{
							currentUser.admin ?
								<>
                                <div>
								<Link to="/shirts/create" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
									New Shirt
								</Link>
								</div>
								</>
								:
								<>
									
								</>
						}

					</div>
					<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{
							currentUser.username ?
								<>
								
								<a onClick={() => logoutUser()} href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">Log out</a>
								</>
								:
								<>
                                
									<Link to="/register" class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
										Create an account
									</Link>
									<Link to="/login" class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
										Log in
									</Link>
								</>
						}

					</div>

				</div>
			</nav>
		</header>
	)
		
}
