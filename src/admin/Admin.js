import React from 'react'
import heroimg from '../user/img/img2.jpg'
const Admin = () => {
  return (
    <div>
        <section className="text-gray-600 body-font mt-5 md:h-[90vh]  ">
        <div className="container mx-auto w-[90%] flex h-full px-5 py-12 flex-col md:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl shadow-lg">
          
            <div className="order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-8 md:mb-0 flex justify-center">
                <img className="object-cover object-center rounded-full border-4 border-white shadow-lg max-w-full h-auto sm:w-5/6" alt="hero" src={heroimg} />
            </div>
         
            <div className="order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font md:text-4xl text-2xl mb-4 font-medium text-white">Mobile Wallet</h1>
                <p className="mb-8 text-gray-300 text-xl">"Your Money, your World, at your fingertips"</p>
                <div className="flex justify-center">
                    <button className="bg-white text-blue-950 flex items-center justify-between py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
                        <span className="flex-grow text-center">Learn More</span>
                        <span className="bg-black text-white rounded-full p-2 ml-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Admin
