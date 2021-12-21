import React, {useContext, useEffect} from "react";
import ShirtContext from "../../../context/Shirt/ShirtContext";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Single() {
    const ctx = useContext(ShirtContext)
    const {getShirt, singleShirt, deleteShirt} = ctx
    
    
    const params = useParams()
    const id = params.id

    useEffect(() =>{
        getShirt(id)
    }, [])
    
    return (
		<>


	
<div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
  <div class="mt-4 flex md:mt-0">
						<Link to={`/shirts/${id}/edit`}>
							<button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Edit Shirt
							</button>
						</Link>
					</div>
                    <div class="mt-4 flex md:mt-0">
						
							<button onClick={() => deleteShirt(id)}
                            type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Delete Shirt
							</button>
						
					</div>
    <div class="lg:max-w-lg lg:self-end">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
          <li>
            <div class="flex items-center text-sm">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
                Shirts
              </a>

              
            </div>
          </li>

          <li>
           
          </li>
        </ol>
      </nav>

      <div class="mt-4">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleShirt.team}</h1>
      </div>

      <section aria-labelledby="information-heading" class="mt-4">
        <h2 id="information-heading" class="sr-only">Product information</h2>

        <div class="flex items-center">
          <p class="text-lg text-gray-900 sm:text-xl">  USD{singleShirt.price}</p>

          <div class="ml-4 pl-4 border-l border-gray-300">
            <h2 class="sr-only">Reviews</h2>
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                 
                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  
                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                 
                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  
                  <svg class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p class="sr-only">4 out of 5 stars</p>
              </div>
              <p class="ml-2 text-sm text-gray-500">1624 reviews</p>
            </div>
          </div>
          
        </div>
        

        <div class="mt-4 space-y-6">
          <p class="text-base text-gray-500">{singleShirt.description}</p>
        </div>

        <div class="mt-6 flex items-center">
          
          <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <p class="ml-2 text-sm text-gray-500">{singleShirt.status}</p>
        </div>
      </section>
    </div>

    
    <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img src={singleShirt.image} alt="shirt image" class="w-full h-full object-center object-cover"/>
      </div>
    </div>

    
    
  </div>
</div>


      

		</>
	)
}

