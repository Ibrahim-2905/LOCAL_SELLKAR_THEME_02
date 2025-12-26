"use client"

import React, { useState } from 'react';
import AnimatedButton from '../Button/Button';


const NewsletterEmailSection2 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      
    }
  };

  return (
    <div className="w-full  bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Join our list and get 15% off your first purchase! Don't worry we don't spam
        </p>
        
        <div className="relative">
          <div className="flex items-center border-b border-gray-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="flex-1 py-3 px-0 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
            <AnimatedButton
              text="SUBMIT"
              bgColor="transparent"
              textColor="black"
              height="h-auto"
              padding="py-2"
              onlyBottomBorder={false}
              onClick={handleSubmit}
              className="text-sm font-medium"
              border="border-0"
              hoverBgColor="black"
              hoverTextColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterEmailSection2;