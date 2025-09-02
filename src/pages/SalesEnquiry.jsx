import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateSalesEnquiry, resetSalesEnquiry, setLoading, setSubmitted } from '../store/formsSlice';
import { useGoogleMaps } from '../hooks/useGoogleMaps';
import { sendSalesEnquiryEmail } from '../services/emailService';
import { sendSalesEnquirySMS } from '../services/smsService';

const SalesEnquiry = () => {
  const dispatch = useDispatch();
  const salesEnquiry = useSelector((state) => state.forms.salesEnquiry);
  const [imagePreview, setImagePreview] = useState(null);
  const cityInputRef = useRef(null);
  const { isLoaded, initializeAutocomplete } = useGoogleMaps();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      machineName: salesEnquiry.machineName,
      userName: salesEnquiry.userName,
      email: salesEnquiry.email,
      city: salesEnquiry.city,
      contactNumber: salesEnquiry.contactNumber,
    },
  });

  useEffect(() => {
    if (isLoaded) {
      initializeAutocomplete(cityInputRef, (city) => {
        setValue('city', city);
        dispatch(updateSalesEnquiry({ city }));
      });
    }
  }, [isLoaded, initializeAutocomplete, setValue, dispatch]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        dispatch(updateSalesEnquiry({ machineImage: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    dispatch(setLoading({ formType: 'salesEnquiry', loading: true }));

    try {
      const formData = {
        ...data,
        machineImage: salesEnquiry.machineImage,
      };

      const emailResult = await sendSalesEnquiryEmail(formData);
      const smsResult = await sendSalesEnquirySMS(formData);

      if (emailResult.success || smsResult.success) {
        dispatch(setSubmitted({ formType: 'salesEnquiry', submitted: true }));
        reset();
        setImagePreview(null);
        dispatch(resetSalesEnquiry());
        alert('Sales enquiry submitted successfully! We will contact you soon.');
      } else {
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      dispatch(setLoading({ formType: 'salesEnquiry', loading: false }));
    }
  };

  // Watch specific fields to avoid infinite loops
  const machineName = watch('machineName');
  const userName = watch('userName');
  const email = watch('email');
  const city = watch('city');
  const contactNumber = watch('contactNumber');

  useEffect(() => {
    dispatch(updateSalesEnquiry({
      machineName,
      userName,
      email,
      city,
      contactNumber
    }));
  }, [machineName, userName, email, city, contactNumber, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-800 mb-6">
              <span className="text-xl mr-2">💼</span>
              Sales Department
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Sales Enquiry
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Interested in purchasing diagnostic equipment? Fill out the form below and our sales team will contact you with detailed information.
            </p>
          </div>

          <div className="card-gradient animate-slide-up">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="machineName" className="form-label">
                  <span className="flex items-center">
                    <span className="text-lg mr-2">🔬</span>
                    Machine Name *
                  </span>
                </label>
                <input
                  type="text"
                  id="machineName"
                  {...register('machineName', { required: 'Machine name is required' })}
                  className={`form-input ${errors.machineName ? 'error' : ''}`}
                  placeholder="Enter the diagnostic machine name"
                />
                {errors.machineName && (
                  <p className="text-sm text-red-500 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.machineName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="machineImage" className="form-label">
                  <span className="flex items-center">
                    <span className="text-lg mr-2">📷</span>
                    Machine Image (Optional)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="machineImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {imagePreview && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <img
                      src={imagePreview}
                      alt="Machine preview"
                      className="max-w-xs h-32 object-cover rounded-xl border-2 border-blue-200 shadow-md mx-auto"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2">Image uploaded successfully</p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="userName" className="form-label">
                    <span className="flex items-center">
                      <span className="text-lg mr-2">👤</span>
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
                    <p className="text-sm text-red-500 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.userName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="form-label">
                    <span className="flex items-center">
                      <span className="text-lg mr-2">📧</span>
                      Email Address *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="form-label">
                  <span className="flex items-center">
                    <span className="text-lg mr-2">🌍</span>
                    City *
                  </span>
                </label>
                <input
                  type="text"
                  id="city"
                  ref={cityInputRef}
                  {...register('city', { required: 'City is required' })}
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  placeholder="Start typing your city name..."
                />
                {errors.city && (
                  <p className="text-sm text-red-500 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.city.message}
                  </p>
                )}
                <p className="text-sm text-blue-600 flex items-center">
                  <span className="mr-1">💡</span>
                  Google Maps autocomplete will help you select the correct city
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="contactNumber" className="form-label">
                  <span className="flex items-center">
                    <span className="text-lg mr-2">📱</span>
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
                  <p className="text-sm text-red-500 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={salesEnquiry.loading}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  {salesEnquiry.loading ? (
                    <span className="flex items-center justify-center">
                      <div className="loading-spinner mr-3"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="text-xl mr-2">📨</span>
                      Submit Sales Enquiry
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-sm text-gray-700 font-medium">
                  By submitting this form, you agree to be contacted by our sales team 
                  regarding your enquiry for diagnostic equipment.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <span className="mr-1">🔒</span>
                    Secure & Private
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">⚡</span>
                    Quick Response
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">💼</span>
                    Professional Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesEnquiry;