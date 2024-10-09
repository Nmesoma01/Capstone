"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Camera } from 'lucide-react';
import axios from 'axios';

const ProfileSettingsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    bio: '',
    accountType: '',
    location: '',
    danceStyle: '',
    experienceLevel: '',
    portfolio: ''
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile');
      const profileData = response.data;
      setFormData(profileData);
      if (profileData.image) {
        setProfileImage(profileData.image);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData(prevData => ({
        ...prevData,
        image: file
      }));
    }
  };

  const handlePortfolioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPortfolioFile(file);
      setFormData(prevData => ({
        ...prevData,
        portfolio: file.name
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined) {
          formDataToSend.append(key, formData[key]);
        }
      });

      if (formData.image instanceof File) {
        formDataToSend.append('profileImage', formData.image);
      }
      if (portfolioFile) {
        formDataToSend.append('portfolio', portfolioFile);
      }

      await axios.post('localhost:5000/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Profile updated successfully!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
                  <img 
                    src={profileImage || '/api/placeholder/150/150'} 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" 
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="bg-pink-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">
                  Change Picture
                </label>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block mb-1">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
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
                    required
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
                    required
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
                    required
                  >
                    <option value="">Select dance style</option>
                    <option value="ballet">Ballet</option>
                    <option value="contemporary">Contemporary</option>
                    <option value="hiphop">Hip Hop</option>
                    {/* Add more dance styles as needed */}
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
                    required
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
                      type="file"
                      id="portfolio"
                      name="portfolio"
                      onChange={handlePortfolioChange}
                      className="flex-1 p-2 border rounded-l"
                    />
                    <button type="button" className="bg-pink-500 text-white px-4 py-2 rounded-r">
                      Upload Portfolio
                    </button>
                  </div>
                  {formData.portfolio && (
                    <p className="mt-2 text-sm text-gray-600">Current portfolio: {formData.portfolio}</p>
                  )}
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
                <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Profile'}
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