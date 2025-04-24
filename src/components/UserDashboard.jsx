import React, { useState, useEffect } from 'react';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { CopyToClipboard } from './CopyToClipboard';
import { getAllUrls, incrementClickCount } from '../services/LocalStorageService';

const UserDashboard = () => {
  const [urls, setUrls] = useState([]);
  const [copySuccess, setCopySuccess] = useState(null);

  useEffect(() => {
    // loading URL using local storage
    const loadUrls = () => {
      const storedUrls = getAllUrls();
      // sorting by creation date
      const sortedUrls = storedUrls.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setUrls(sortedUrls);
    };

    loadUrls();
    // even listener for storage changes
    window.addEventListener('storage', loadUrls);
    
    return () => {
      window.removeEventListener('storage', loadUrls);
    };
  }, []);

  const handleCopy = (id) => {
    setCopySuccess(id);
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000);
  };

  const handleVisit = (id) => {
    // to increment click count when link is visited
    incrementClickCount(id);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (urls.length === 0) {
    return null; // no dashboard if no URLs
  }

  return (
    <section className="user-dashboard py-12 bg-gray-800 bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Shortened URLs</h2>
        
        <div className="url-history space-y-4 max-w-4xl mx-auto">
          {urls.map((url) => (
            <div 
              key={url.id} 
              className="url-item bg-gray-800 bg-opacity-50 rounded-lg p-4 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-gray-400 text-sm">Original:</span>
                    <p className="text-white truncate">{url.originalUrl}</p>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-400 text-sm">Short URL:</span>
                    <p className="text-blue-400">{url.shortUrl}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Created: {formatDate(url.createdAt)}</span>
                    <span className="mx-3">•</span>
                    <span>Clicks: {url.clicks || 0}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <CopyToClipboard text={url.shortUrl} onCopy={() => handleCopy(url.id)}>
                    <button 
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm"
                    >
                      <FaCopy /> 
                      {copySuccess === url.id ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                  
                  <a 
                    href={url.shortUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm"
                    onClick={() => handleVisit(url.id)}
                  >
                    <FaExternalLinkAlt /> 
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;