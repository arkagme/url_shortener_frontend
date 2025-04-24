import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      number: '1',
      title: 'Paste Your Link',
      description: 'Enter your long link and transform it into a short link'
    },
    {
      number: '2',
      title: 'Share Anywhere',
      description: 'Use your short link in messages, posts, or anywhere you want'
    },
    {
      number: '3',
      title: 'Track Performance',
      description: 'Monitor clicks and engagement to optimize your short links'
    }
  ];

  return (
    <section id="features" className="features-section py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;