import React from 'react'
import b from './img/b.jpg'
import c from './img/c.jpg'
import p from './img/p.jpg'
import ese from './img/ese.webp'

const Product = () => {
  return (
    <div>
        <div className=" py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Products</h2>
      
          </div>
         
      
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           
            <div>
              <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <img src={b} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
                <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
              </a>
      
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Binance</a>
                </div>
      
               
              </div>
            </div>
         
            <div>
              <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <img src={c} loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Out Look</a>
                </div>
      
              
              </div>
            </div>
          
      
            <div>
              <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <img src={p} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">BlockChain</a>
                </div>
      
               
              </div>
            </div>
      
            <div>
              <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <img src={ese} loading="lazy" alt="Photo by Vladimir Fedotov" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Transfer Interface</a>
                </div>
      
               
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product