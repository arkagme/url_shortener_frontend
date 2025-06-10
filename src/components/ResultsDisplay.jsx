import React, { useState } from "react";
import { CopyToClipboard } from "./CopyToClipboard";
import { FaCopy } from "react-icons/fa";

const ResultsDisplay = ({ originalUrl, shortUrl }) => {
  const [copyState, setCopyState] = useState({
    originalCopied: false,
    shortCopied: false
  });

  const handleCopy = (type) => {
    setCopyState({
      ...copyState,
      [type]: true
    });

    // reset copy state after 2 seconds
    setTimeout(() => {
      setCopyState({
        ...copyState,
        [type]: false
      });
    }, 2000); //2 seconds
  };

  return (
    <section className="results-display py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg mb-6">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Original URL</h3>
              <div className="flex items-start">
                <div className="flex-1 break-all">
                  <p className="text-gray-300">{originalUrl}</p>
                </div>
                <div className="ml-4">
                  <CopyToClipboard text={originalUrl} onCopy={() => handleCopy('originalCopied')}>
                    <button 
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md"
                    >
                      <FaCopy />
                      {copyState.originalCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Shortened URL</h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-blue-400 text-lg font-medium">{shortUrl}</p>
                </div>
                <div className="ml-4">
                  <CopyToClipboard text={shortUrl} onCopy={() => handleCopy('shortCopied')}>
                    <button 
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                    >
                      <FaCopy />
                      {copyState.shortCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;