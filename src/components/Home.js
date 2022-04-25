import React, {useContext} from "react";
import { Link } from "react-router-dom";

export default function Home (){
    return (
     <>
     <div class="bg-white">
  <main>
    {/* <!-- Hero section --> */}
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div>
            <img class="h-11 w-auto" src="https://www.emozionat.com/wp-content/uploads/2021/01/equipaciones.png" alt="Workflow"/>
          </div>
          <div class="mt-20">
            <div>
              <Link to="/shirts">  <a className="inline-flex space-x-4">
                
              
                <span class="inline-flex items-center text-sm font-medium text-black hover:text-gary-50">
                  <span>Go to shirts</span>
                  {/* <!-- Heroicon name: solid/chevron-right --> */}
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                </a>
                </Link>
                
              
            </div>
            <div class="mt-6 sm:max-w-xl">
              <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                We have your grail
              </h1>
              <p class="mt-6 text-xl text-gray-500">
                We know you have been looking for that one shirt. We've got it here. With over 500 shirts in our collection we have the biggest football shirt catologue on the market.
              </p>
            </div>
            
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex-shrink-0 flex pr-5">
                  {/* <!-- Heroicon name: solid/star --> */}
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* <!-- Heroicon name: solid/star --> */}
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* <!-- Heroicon name: solid/star --> */}
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* <!-- Heroicon name: solid/star --> */}
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* <!-- Heroicon name: solid/star --> */}
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3"><span class="font-medium text-gray-900">More than 1000 costumers satisfied worldwide</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="hidden sm:block">
            <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
            <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="https://i.pinimg.com/originals/da/9e/c1/da9ec1e3e2076ed07c2dfaef3a85d8a0.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Testimonial/stats section --> */}
    <div class="relative mt-20">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
            <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* <!-- Testimonial card--> */}
            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" src="https://todosobrecamisetas.com/wp-content/uploads/chelsea-2021-22-nike-away-kit-8.jpg" alt=""/>
              
             
              <div class="relative px-8">
                <div>
                  <img class="h-12" src="" alt=""/>
                </div>
                <blockquote class="mt-8">
                  <div class="relative text-lg font-medium text-white md:flex-grow">
                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      
                    </svg>
                   
                  </div>

                  <footer class="mt-4">
                    
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* <!-- Content area --> */}
          <div class="pt-12 sm:pt-16 lg:pt-20">
            <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              We love football shirts
            </h2>
            <div class="mt-6 text-gray-500 space-y-6">
              <p class="text-lg">
                We use them to show love for our team or to enhance an outfit. The decission is yours! Our catlogue includes shirts from 7 different decades. You will find something you love.
              </p>
              
            </div>
          </div>

          {/* <!-- Stats section --> */}
          <div class="mt-10">
            <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Founded</dt>
                <dd class="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
              </div>

              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Decades in Shirts</dt>
                <dd class="text-3xl font-extrabold tracking-tight text-gray-900">7</dd>
              </div>

              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Satisfied Costumers</dt>
                <dd class="text-3xl font-extrabold tracking-tight text-gray-900">1000+</dd>
              </div>

              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Biggest Catologue</dt>
                <dd class="text-3xl font-extrabold tracking-tight text-gray-900">2000 Shirts</dd>
              </div>
            </dl>
            <div class="mt-10">
              <Link to="/about-us"> <a className="text-base font-medium text-black-500">
                About us&rarr;
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    

   
    
  </main>

 

</div>
     </>
    )
}