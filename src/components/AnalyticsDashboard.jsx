import React, { useState, useEffect } from 'react';
import { FaLink, FaMousePointer } from 'react-icons/fa';
import { getAnalytics } from '../services/LocalStorageService';

const AnalyticsDashboard = ({ urlData }) => {
  const [analytics, setAnalytics] = useState({
    totalUrls: 0,
    currentUrlClicks: 0
  });

  useEffect(() => {
    // fetch analytics data
    const fetchAnalytics = () => {
      try {
        // get analytics data
        const analyticsData = getAnalytics();
        
        // get current url clicks
        const currentUrlClicks = urlData ? urlData.clicks || 0 : 0;
        
        setAnalytics({
          totalUrls: analyticsData.totalUrls,
          currentUrlClicks
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };
    
    fetchAnalytics();
    
    // listen for storage events to update url analytics
    const handleStorageChange = () => {
      fetchAnalytics();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [urlData]);

  const StatCard = ({ icon, value, label }) => (
    <div className="stat-card bg-gray-800 bg-opacity-50 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2">
        {value.toLocaleString()}
      </div>
      <div className="text-gray-400">
        {label}
      </div>
    </div>
  );

  return (
    <section className="analytics-dashboard py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Analytics Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <StatCard 
            icon={<FaLink size={32} />}
            value={analytics.totalUrls}
            label="URLs Shortened"
          />
          
          <StatCard 
            icon={<FaMousePointer size={32} />}
            value={analytics.currentUrlClicks}
            label="Current URL Clicks"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;