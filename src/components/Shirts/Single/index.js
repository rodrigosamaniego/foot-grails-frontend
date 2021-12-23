import React, { useContext, useEffect } from "react";
import ShirtContext from "../../../context/Shirt/ShirtContext";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from "../../../context/User/UserContext";

export default function Single() {
  const ctx = useContext(ShirtContext)
  const { getShirt, singleShirt, deleteShirt } = ctx

  const ctxUser = useContext(UserContext)
  const {
    currentUser
  } = ctxUser

  const params = useParams()
  const id = params.id



  useEffect(() => {
    getShirt(id)
  }, [])

  return (

    


    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        
        <div className="mt-4 flex md:mt-0">
          {

          currentUser.admin ?
           <>
          <div>
          <Link to={`/shirts/${id}/edit`} className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
            
              Edit Shirt
           
          </Link>
          </div>
          </>
          :
          null
          
          }
        
        </div>
       
        

        <div className="mt-4 flex md:mt-0">
          {
            currentUser.admin ?
          <button onClick={() => deleteShirt(id)}
            type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Delete Shirt
          </button>
          :
          null
            }
        </div>
        <div class="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-2">
              <li>
                <div class="flex items-center text-sm">
                  <p  class="font-medium text-gray-500 hover:text-gray-900">
                    {singleShirt.category}
                  </p>


                </div>
              </li>

              <li>

              </li>
            </ol>
          </nav>

          <div class="mt-4">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleShirt.team}</h1>
          </div>
          <div class="mt-2">
            <h4 class="text-3xl  tracking-tight text-gray-900 sm:text-4xl">{singleShirt.status} {singleShirt.year}</h4>
          </div>

          <section aria-labelledby="information-heading" class="mt-4">
            <h2 id="information-heading" class="sr-only">Product information</h2>

            <div class="flex items-center">
              <p class="text-lg text-gray-900 sm:text-xl">   ${singleShirt.price}</p>

              <div class="ml-4 pl-4 border-l border-gray-300">
                <h2 class="sr-only">Reviews</h2>
               
              </div>

            </div>

           


            <div class="mt-4 space-y-6">
              <p class="text-base text-gray-500">{singleShirt.description}</p>
            </div>

         <div className="mt-4 space-y-6">
          {

          currentUser.username ?
           <>
          <div>
          <Link to={`/shirts/${id}/buy`} className="mt-4  inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
            
              Buy Shirt
           
          </Link>
          </div>
          </>
          :
          <div>
          <Link to={`/login`} className="mt-4  inline-flex items-center justify-center bg-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
            
              Log In To Buy This Shirt
           
          </Link>
          </div>
          
          
          }
        
        </div>

            
          </section>
        </div>


        <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={singleShirt.image} alt="shirt image" class="w-full h-full object-center object-cover" />
          </div>
        </div>






      
      </div>
    </div>



    




  )
}

