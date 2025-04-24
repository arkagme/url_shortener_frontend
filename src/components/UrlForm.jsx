import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import { saveUrl, generateUrlId, generateShortUrl } from '../services/LocalStorageService';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic URL validation
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    // Add protocol if missing
    let processedUrl = url;
    if (!/^https?:\/\//i.test(processedUrl)) {
      processedUrl = 'https://' + processedUrl;
    }
    
    try {
      new URL(processedUrl);
    } catch (err) {
      setError('Please enter a valid URL');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // to simulate api call with timeout
    setTimeout(() => {
      try {
        // generating unique ID for URL
        const urlId = generateUrlId();
        
        // creating short URL
        const shortUrl = generateShortUrl(urlId);
        
        // creating URL data object
        const urlData = {
          id: urlId,
          originalUrl: processedUrl,
          shortUrl: shortUrl,
          createdAt: new Date().toISOString(),
          clicks: 0
        };
        
        // saving to local storage
        saveUrl(urlData);
        
        // redirect to result page
        navigate(`/result/${urlId}`);
      } catch (error) {
        console.error('Error processing URL:', error);
        setError('An error occurred. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="url-form max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="input-container relative">
          <div className="input-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaLink size={20} />
          </div>
          <input
            type="text"
            className="input-field w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-full py-3 px-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>
        
        <div className="button-container mt-6 flex justify-center">
          <button
            type="submit"
            className="btn-primary bg-[#261FB3] hover:bg-[#1F1999] text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Shortening...' : 'Shorten Now!'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="error-message text-red-400 text-center mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default UrlForm;