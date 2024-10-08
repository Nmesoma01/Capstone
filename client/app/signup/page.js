"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Camera } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Next.js router for navigation

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/profile'); 
      } else {
        setErrorMessage(result.message || "An error occurred");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-5">
        <img 
          src="/logo.png" 
          alt="Arts Khonnect logo" 
          className="w-1/5 h-full"
        />
      </header>
      
      <main className="flex-1 flex items-center justify-center p-10">
        <div className="flex-1 max-w-2xl">
          <img 
            src="/hex-image.png" 
            alt="Arts Khonnect Collage" 
            className="w-auto h-auto"
          />
        </div>
        
        <div className="bg-white text-black p-10 w-80">
          <h2 className="text-center text-2xl mb-6">
            Create Your <span className="text-pink-500">Account!</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              className="w-full p-2 mb-4 bg-black text-white border border-gray-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="w-full p-2 mb-4 bg-black text-white border border-gray-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="w-full p-2 mb-4 bg-black text-white border border-gray-300"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              className="w-full p-2 mb-4 bg-black text-white border border-gray-300"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="w-full p-2 bg-pink-500 text-white font-bold">
              Sign Up
            </button>
          </form>
          {errorMessage && (
            <div className="text-red-500 mt-4 text-center">
              {errorMessage}
            </div>
          )}
          <div className="text-center my-4 relative">
            <span className="bg-white px-2 relative z-10">OR</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-10"></div>
          </div>
          <button className="w-full p-2 border border-gray-300 font-bold flex items-center justify-center">
            <Camera className="mr-2" size={20} /> Sign Up With Google
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-pink-500 no-underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 p-5 flex justify-between items-center">
        <div className="space-x-4">
          <a href="#" className="text-white no-underline">Instagram</a>
          <a href="#" className="text-white no-underline">Twitter</a>
          <a href="#" className="text-white no-underline">Facebook</a>
        </div>
        <div className="text-white">
          READY TO EXPLORE THE WORLD OF DANCE?
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white no-underline">English</a>
          <a href="#" className="text-white no-underline">Privacy Policy</a>
          <a href="#" className="text-white no-underline">Terms And Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
