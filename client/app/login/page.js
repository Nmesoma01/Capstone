import React from 'react';
import { Camera} from 'lucide-react';

const Login = () => {
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
          <input 
            type="text" 
            placeholder="Username Or Email" 
            className="w-full p-2 mb-4 bg-black border border-gray-300"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 mb-4 bg-black border border-gray-300"
          />
          <button className="w-full p-2 bg-pink-500 text-white font-bold">
            Log In
          </button>
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