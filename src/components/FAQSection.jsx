import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white text-left">{question}</span>
        <span className="text-blue-400 ml-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      
      {isOpen && (
        <div className="py-4 px-6 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a URL shortener?",
      answer: "A URL shortener is a tool that converts a long URL into a shorter, more manageable link. When someone clicks on the shortened link, they are automatically redirected to the original URL. This makes sharing links easier, especially on platforms with character limits like X/Twitter."
    },
    {
      question: "How long do shortened links remain active?",
      answer: "Our shortened links remain active indefinitely. However, if a link is found to be malicious or violates our terms of service, it may be deactivated."
    },
    {
      question: "Are there any limitations on the types of URLs I can shorten?",
      answer: "We do not allow shortening of URLs that lead to malicious content, phishing sites, or any content that violates our terms of service or applicable laws."
    },
    {
      question: "Can I track how many people click on my shortened links?",
      answer: "Yes, you can look at analytics that show how many times your shortened link has been clicked."
    }
  ];

  return (
    <section id="faq" className="faq-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;