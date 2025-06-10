import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import Footer from '../components/Footer';
import { getUrlById } from '../services/LocalStorageService';
import { FaArrowLeft } from 'react-icons/fa';

const AnalyticsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [urlData, setUrlData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // retrieve url data from local storage
    const retrieveUrlData = () => {
      const foundUrl = getUrlById(id);
      
      if (foundUrl) {
        setUrlData(foundUrl);
      } else {
        // if URL not found, redirect to history
        navigate('/history');
      }
      
      setLoading(false);
    };

    retrieveUrlData();
  }, [id, navigate]);

  const goBack = () => {
    navigate('/history');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="analytics-page min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 md:pt-36 flex-grow">
        <div className="container mx-auto px-6">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 mb-6 transition-colors"
          >
            <FaArrowLeft /> Back to History
          </button>
          
          <h1 className="text-3xl font-bold text-center mb-8">URL Analytics</h1>
          
          {urlData && (
            <div className="mb-8 p-4 bg-gray-800 bg-opacity-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">URL Details</h2>
              <p className="mb-2"><span className="text-gray-400">Original URL:</span> {urlData.originalUrl}</p>
              <p><span className="text-gray-400">Short URL:</span> {urlData.shortUrl}</p>
            </div>
          )}
          
          {urlData && <AnalyticsDashboard urlData={urlData} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage; 