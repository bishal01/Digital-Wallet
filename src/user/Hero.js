import React from 'react'
import Heroimg from './img/img2.jpg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font mt-5 md:h-[90vh]  ">
        <div className="container mx-auto w-[90%] flex h-full px-5 py-12 flex-col md:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl shadow-lg">
          
            <div className="order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-8 md:mb-0 flex justify-center">
                <img className="object-cover object-center rounded-full border-4 border-white shadow-lg max-w-full h-auto sm:w-5/6" alt="hero" src={Heroimg} />
            </div>
         
            <div className="bg-dark-nav text-white py-10">
  

  <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16">
    {/* Key Information and Features */}
    <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-4xl font-medium mb-4">Mobile Wallet</h1>
      <p className="mb-8 text-xl text-gray-300">"Your Money, Your World, at Your Fingertips"</p>
      <div className="flex justify-center md:justify-start">
        <button className="bg-white text-blue-950 flex items-center py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
          <span className="flex-grow text-center">Learn More</span>
          <span className="bg-black text-white rounded-full p-2 ml-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>

   
  </div>

  {/* Sections for Sending and Requesting Money */}
  <div className="bg-slate-600 text-white py-10">
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-12">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-medium mb-4">Send Money</h2>
        <p className="text-lg text-gray-300">Quickly and securely send money to anyone, anywhere. Enjoy instant transfers with just a few taps.</p>
      </div>
      <div className="text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-2xl font-medium mb-4">Request Money</h2>
        <p className="text-lg text-gray-300">Easily request payments from friends and family. Track your requests and get paid fast.</p>
      </div>
    </div>
  </div>
</div>

        </div>
    </section>
    </div>
  )
}

export default Hero