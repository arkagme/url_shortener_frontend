import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    // simulating an API call with timeout
    setTimeout(() => {
      try {
        // implement API call here
        console.log('Form submitted:', data);
        setSubmitSuccess(true);
        reset(); //form reset after successful submission
        
        // hiding success msg after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setSubmitError('An error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="max-w-2xl mx-auto">
          {submitSuccess && (
            <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 px-4 py-3 rounded mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          {submitError && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 px-4 py-3 rounded mb-6">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                }`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                }`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                }`}
                {...register('message', { 
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters'
                  }
                })}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;