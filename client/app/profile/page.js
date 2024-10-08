"use client"
import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const ProfileSettingsPage = () => {
  const [profileImage, setProfileImage] = useState('https://metricool.com/wp-content/uploads/Screen-Shot-2023-06-28-at-2.21.12-PM.png');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    accountType: '',
    location: '',
    danceStyle: '',
    experienceLevel: '',
    portfolio: '',
    bio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = () => {
    // Open file picker
    alert('Image changed successfully');
  };

  const handleImageDelete = () => {
    setProfileImage('/api/placeholder/150/150');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Profile created!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-black text-white p-4">
        <img 
          src="/logo.png" 
          alt="Arts Khonnect logo" 
          className="w-1/5 h-full"
        />
      </header>

      <div className="container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-black">
          <div className="md:flex">
            <nav className="bg-gray-50 p-4 md:w-64">
              <h3 className="font-bold mb-4">Settings</h3>
              <ul>
                <li className="font-semibold">Public Profile</li>
              </ul>
            </nav>
            <main className="flex-1 p-8">
              <h2 className="text-2xl font-bold mb-6">Public Profile</h2>
              <div className="mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button onClick={handleImageChange} className="bg-pink-500 text-white px-4 py-2 rounded mr-2">
                  Change Picture
                </button>
                <button onClick={handleImageDelete} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  Delete Picture
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="accountType" className="block mb-1">Account Type</label>
                  <select
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select account type</option>
                    <option value="dancer">Dancer</option>
                    <option value="choreographer">Choreographer</option>
                    <option value="studio">Dance Studio</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="danceStyle" className="block mb-1">Dance Style</label>
                  <select
                    id="danceStyle"
                    name="danceStyle"
                    value={formData.danceStyle}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select dance style</option>
                    <option value="ballet">Ballet</option>
                    <option value="contemporary">Contemporary</option>
                    <option value="hiphop">Hip Hop</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experienceLevel" className="block mb-1">Experience Level</label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="portfolio" className="block mb-1">Portfolio</label>
                  <div className="flex">
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="flex-1 p-2 border rounded-l"
                    />
                    <button type="button" className="bg-pink-500 text-white px-4 py-2 rounded-r">
                      Upload Portfolio
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="bio" className="block mb-1">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full p-2 border rounded"
                  ></textarea>
                </div>
                <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded">
                  Create Profile
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white mt-12 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Camera color="white" size={24} />
            <Camera color="white" size={24} />
            <Camera color="white" size={24} />
          </div>
          <p className="mb-2">READY TO EXPLORE THE WORLD OF DANCE ?</p>
          <p className="text-sm">English | Privacy Policy | Terms And Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfileSettingsPage;