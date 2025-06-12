import React from 'react';
import Header from '../components/Header';
import UserDashboard from '../components/UserDashboard';
import Footer from '../components/Footer';

const HistoryPage = () => {
  return (
    <div className="history-page min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 md:pt-36 flex-grow">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-8 mt-8">URL History</h1>
          <UserDashboard showAnalyticsLink={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage; 