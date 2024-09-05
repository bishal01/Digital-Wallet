import React from 'react';
import maps from './img/map.JPG'; // Update the path as needed

const Contact = () => {
  return (
    <div className=" py-8 lg:py-16">
      <section className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">AMSEV's Wallet</h1>
          <p className="text-lg text-gray-200 mx-auto max-w-3xl mb-8">
            For inquiries, support, or feedback, please find our comprehensive contact information below. You can reach us via phone, email, or social media. We are also happy to connect through our social media channels.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="lg:pr-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h2>
            <ul className="space-y-4 text-gray-200 mb-8">
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Email:</strong> support@amsev.com</li>
              <li><strong>Address:</strong> 123 Main Street, Suite 456, City, State, 78901</li>
            </ul>
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Connect with Us</h2>
            <ul className="flex space-x-4 text-gray-200">
              <li><a href="https://facebook.com/amsev" className="hover:text-blue-600">Facebook</a></li>
              <li><a href="https://twitter.com/amsev" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="https://instagram.com/amsev" className="hover:text-pink-500">Instagram</a></li>
              <li><a href="https://linkedin.com/company/amsev" className="hover:text-blue-700">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Our Location</h2>
            <img
              src={maps}
              alt="Map showing AMSEV location"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
