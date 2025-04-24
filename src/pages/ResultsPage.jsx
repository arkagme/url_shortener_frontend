import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ResultsDisplay from '../components/ResultsDisplay';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import Footer from '../components/Footer';
import { getUrlById } from '../services/LocalStorageService';

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

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="results-page">
      <Header />
      <main className="pt-32 md:pt-36">
        <div className="container mx-auto px-6">
          <h1 className="results-title text-3xl font-bold text-center mb-8 mt-8">URL Shortened Successfully!</h1>
          {urlData && (
            <>
              <ResultsDisplay originalUrl={urlData.originalUrl} shortUrl={urlData.shortUrl} />
              <AnalyticsDashboard urlData={urlData} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;