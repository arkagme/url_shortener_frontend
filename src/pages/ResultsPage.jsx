import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ResultsDisplay from '../components/ResultsDisplay';
import Footer from '../components/Footer';
import { getUrlById } from '../services/LocalStorageService';
import { FaArrowLeft } from 'react-icons/fa';

const ResultsPage = () => {
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
        // if URL not found, redirect to home
        navigate('/');
      }
      
      setLoading(false);
    };

    retrieveUrlData();
  }, [id, navigate]);

  const goToHome = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="results-page min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 md:pt-36 flex-grow">
        <div className="container mx-auto px-6">
          <button 
            onClick={goToHome}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 mb-6 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </button>
          
          <h1 className="results-title text-3xl font-bold text-center mb-8">URL Shortened Successfully!</h1>
          {urlData && <ResultsDisplay originalUrl={urlData.originalUrl} shortUrl={urlData.shortUrl} />}
          
          <div className="mt-8 text-center">
            <button
              onClick={goToHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Shorten Another URL
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;