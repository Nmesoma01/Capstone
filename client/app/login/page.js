"use client"
import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include', // Allows cookies to be sent from server (for auth tokens)
      });

      if (response.ok) {
        // handle successful login (e.g., redirect to dashboard)
        const data = await response.json();
        console.log("Login successful:", data);
        window.location.href = '/profile'; // Redirect after login
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Server error, please try again later.');
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

        <div className="bg-white text-black p-10 w-80 ml-5">
          <h2 className="text-center text-2xl mb-6">
            Join The <span className="text-pink-500">Community!</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Username Or Email" 
              className="w-full p-2 mb-4 bg-black border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 mb-4 bg-black border border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="submit" 
              className="w-full p-2 bg-pink-500 text-white font-bold"
            >
              Log In
            </button>
          </form>

          {errorMessage && (
            <div className="text-red-500 text-center mt-4">
              {errorMessage}
            </div>
          )}

          <div className="text-center my-4 relative">
            <span className="bg-white px-2 relative z-10">OR</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-10"></div>
          </div>

          <button className="w-full p-2 border border-gray-300 font-bold flex items-center justify-center">
            <Camera className="mr-2" size={20} /> Log In With Google
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-pink-500 no-underline">
              don't have an account? sign up
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

export default Login;
