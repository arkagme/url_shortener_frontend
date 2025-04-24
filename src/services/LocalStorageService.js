/**
 * Service for managing URL data in local storage
 */

const STORAGE_KEY = 'shortenedUrls';

/**
 * Get all shortened URLs from local storage
 * @returns {Array} Array of URL objects
 */
export const getAllUrls = () => {
  try {
    const urls = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return urls;
  } catch (error) {
    console.error('Error retrieving URLs from localStorage:', error);
    return [];
  }
};

/**
 * Get a specific URL by ID
 * @param {string} id - The URL ID
 * @returns {Object|null} URL object or null if not found
 */
export const getUrlById = (id) => {
  try {
    const urls = getAllUrls();
    return urls.find(url => url.id === id) || null;
  } catch (error) {
    console.error('Error retrieving URL by ID:', error);
    return null;
  }
};

/**
 * Save a new shortened URL
 * @param {Object} urlData - URL data object
 * @returns {boolean} Success status
 */
export const saveUrl = (urlData) => {
  try {
    const urls = getAllUrls();
    const updatedUrls = [urlData, ...urls];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUrls));
    
    // Dispatch storage event for other components to detect
    window.dispatchEvent(new Event('storage'));
    
    return true;
  } catch (error) {
    console.error('Error saving URL to localStorage:', error);
    return false;
  }
};

/**
 * Update click count for a URL
 * @param {string} id - The URL ID
 * @returns {boolean} Success status
 */
export const incrementClickCount = (id) => {
  try {
    const urls = getAllUrls();
    const updatedUrls = urls.map(url => {
      if (url.id === id) {
        return {
          ...url,
          clicks: (url.clicks || 0) + 1
        };
      }
      return url;
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUrls));
    
    // Dispatch storage event for other components to detect
    window.dispatchEvent(new Event('storage'));
    
    return true;
  } catch (error) {
    console.error('Error updating click count:', error);
    return false;
  }
};

/**
 * Get analytics data
 * @returns {Object} Analytics data
 */
export const getAnalytics = () => {
  try {
    const urls = getAllUrls();
    
    // Calculate total URLs
    const totalUrls = urls.length;
    
    // Calculate total clicks
    const totalClicks = urls.reduce((sum, url) => sum + (url.clicks || 0), 0);
    
    // Mock total users (would come from backend in real app)
    const mockTotalUsers = 1234;
    
    return {
      totalUrls,
      totalClicks,
      totalUsers: mockTotalUsers
    };
  } catch (error) {
    console.error('Error calculating analytics:', error);
    return {
      totalUrls: 0,
      totalClicks: 0,
      totalUsers: 0
    };
  }
};

/**
 * Generate a unique ID for a URL
 * @returns {string} Unique ID
 */
export const generateUrlId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

/**
 * Generate a short URL from an ID
 * @param {string} id - The URL ID
 * @returns {string} Short URL
 */
export const generateShortUrl = (id) => {
  return `short.url/${id.substr(0, 6)}`;
};

export default {
  getAllUrls,
  getUrlById,
  saveUrl,
  incrementClickCount,
  getAnalytics,
  generateUrlId,
  generateShortUrl
};