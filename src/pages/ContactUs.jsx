import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateContactUs, resetContactUs, setLoading, setSubmitted } from '../store/formsSlice';
import { sendContactUsEmail } from '../services/emailService';
import { sendContactUsSMS } from '../services/smsService';

const ContactUs = () => {
  const dispatch = useDispatch();
  const contactUs = useSelector((state) => state.forms.contactUs);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      userName: contactUs.userName,
      contactNumber: contactUs.contactNumber,
      message: contactUs.message,
    },
  });

  const onSubmit = async (data) => {
    dispatch(setLoading({ formType: 'contactUs', loading: true }));

    try {
      const emailResult = await sendContactUsEmail(data);
      const smsResult = await sendContactUsSMS(data);

      if (emailResult.success || smsResult.success) {
        dispatch(setSubmitted({ formType: 'contactUs', submitted: true }));
        reset();
        dispatch(resetContactUs());
        setSubmitStatus('success');
        // Auto hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      dispatch(setLoading({ formType: 'contactUs', loading: false }));
    }
  };

  // Watch specific fields to avoid infinite loops
  const userName = watch('userName');
  const contactNumber = watch('contactNumber');
  const message = watch('message');

  useEffect(() => {
    dispatch(updateContactUs({
      userName,
      contactNumber,
      message
    }));
  }, [userName, contactNumber, message, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-modern relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400/40 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-primary-400/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-accent-400/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-base font-semibold text-secondary-700 mb-8 shadow-glass">
              <span className="text-2xl mr-3 animate-bounce">📞</span>
              Customer Support
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold gradient-text mb-8 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
              Have questions or need support? We're here to help you with all your 
              <span className="text-gradient-primary font-semibold"> medical equipment needs!</span>
            </p>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="max-w-4xl mx-auto mb-12 animate-slide-down">
              <div className="card-glass border-2 border-accent-300/50 bg-gradient-to-r from-accent-50/80 to-accent-100/60 backdrop-blur-xl">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-6 animate-bounce">
                    <span className="text-3xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent-800 mb-2">Message sent successfully!</h3>
                    <p className="text-lg text-accent-700">We will get back to you within 2 business hours.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="max-w-4xl mx-auto mb-12 animate-slide-down">
              <div className="card-glass border-2 border-red-300/50 bg-gradient-to-r from-red-50/80 to-red-100/60 backdrop-blur-xl">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 animate-bounce">
                    <span className="text-3xl">❌</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-2">Failed to send message</h3>
                    <p className="text-lg text-red-700">Please try again or contact us directly at support@diagnosemed.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="card-glass animate-slide-right" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mr-4 animate-float">
                  <span className="text-3xl">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-800 gradient-text">
                  Get in Touch
                </h2>
              </div>
            
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="userName" className="form-label">
                    <span className="flex items-center text-lg">
                      <span className="text-2xl mr-3">👤</span>
                      Your Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="userName"
                    {...register('userName', { required: 'Name is required' })}
                    className={`form-input ${errors.userName ? 'error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.userName && (
                    <p className="text-base text-red-600 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.userName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <label htmlFor="contactNumber" className="form-label">
                    <span className="flex items-center text-lg">
                      <span className="text-2xl mr-3">📱</span>
                      Contact Number *
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    {...register('contactNumber', {
                      required: 'Contact number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number',
                      },
                    })}
                    className={`form-input ${errors.contactNumber ? 'error' : ''}`}
                    placeholder="Enter your 10-digit contact number"
                  />
                  {errors.contactNumber && (
                    <p className="text-base text-red-600 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="form-label">
                    <span className="flex items-center text-lg">
                      <span className="text-2xl mr-3">💬</span>
                      Message *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long',
                      },
                    })}
                    className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                    placeholder="Please describe your query or message in detail..."
                  />
                  {errors.message && (
                    <p className="text-base text-red-600 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={contactUs.loading}
                    className="btn-primary w-full text-xl py-5 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {contactUs.loading ? (
                      <span className="flex items-center justify-center relative z-10">
                        <div className="loading-spinner mr-4"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center relative z-10">
                        <span className="text-2xl mr-3">📨</span>
                        Send Message
                        <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="card-glass animate-slide-left" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4 animate-float" style={{animationDelay: '0.5s'}}>
                  <span className="text-3xl">📍</span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-800 gradient-text">
                  Contact Information
                </h2>
              </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Office Address</h3>
                  <p className="text-gray-600">
                    123 Medical Equipment Street<br />
                    Healthcare District<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Phone Numbers</h3>
                  <p className="text-gray-600">
                    Sales: +91 98765 43210<br />
                    Support: +91 98765 43211<br />
                    Emergency: +91 98765 43212
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Email Addresses</h3>
                  <p className="text-gray-600">
                    General: info@diagnosemed.com<br />
                    Sales: sales@diagnosemed.com<br />
                    Support: support@diagnosemed.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed<br />
                    Emergency Support: 24/7
                  </p>
                </div>
              </div>
            </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-medium text-purple-900 mb-2">Quick Response Promise</h4>
                  <p className="text-sm text-purple-800 mb-4">
                    We guarantee a response to all enquiries within 2 business hours during 
                    our operating hours. For urgent technical support, our emergency line 
                    is available 24/7.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                    <span className="flex items-center">
                      <span className="mr-1">📞</span>
                      24/7 Emergency
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      2 Hour Response
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">🏆</span>
                      Expert Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;