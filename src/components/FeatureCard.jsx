import React from 'react';

const FeatureCard = ({ number, title, description }) => {
  return (
    <div className="feature-card bg-black rounded-lg p-8 text-center transition-transform hover:transform hover:scale-105 hover:shadow-lg">
      <div className="feature-circle w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
        {number}
      </div>
      
      <h3 className="feature-title text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="feature-description text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;