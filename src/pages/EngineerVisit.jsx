import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateEngineerVisit, resetEngineerVisit, setLoading, setSubmitted } from '../store/formsSlice';
import { useGoogleMaps } from '../hooks/useGoogleMaps';
import { sendEngineerVisitEmail } from '../services/emailService';
import { sendEngineerVisitSMS } from '../services/smsService';

const EngineerVisit = () => {
  const dispatch = useDispatch();
  const engineerVisit = useSelector((state) => state.forms.engineerVisit);
  const cityInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const { isLoaded, initializeAutocomplete, initializeAddressAutocomplete } = useGoogleMaps();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      machineName: engineerVisit.machineName,
      hospitalName: engineerVisit.hospitalName,
      userName: engineerVisit.userName,
      city: engineerVisit.city,
      contactNumber: engineerVisit.contactNumber,
      address: engineerVisit.address,
    },
  });

  useEffect(() => {
    if (isLoaded) {
      initializeAutocomplete(cityInputRef, (city) => {
        setValue('city', city);
        dispatch(updateEngineerVisit({ city }));
      });

      initializeAddressAutocomplete(addressInputRef, (address) => {
        setValue('address', address);
        dispatch(updateEngineerVisit({ address }));
      });
    }
  }, [isLoaded, initializeAutocomplete, initializeAddressAutocomplete, setValue, dispatch]);

  const onSubmit = async (data) => {
    dispatch(setLoading({ formType: 'engineerVisit', loading: true }));

    try {
      const emailResult = await sendEngineerVisitEmail(data);
      const smsResult = await sendEngineerVisitSMS(data);

      if (emailResult.success || smsResult.success) {
        dispatch(setSubmitted({ formType: 'engineerVisit', submitted: true }));
        reset();
        dispatch(resetEngineerVisit());
        alert('Engineer visit request submitted successfully! Our technician will contact you soon.');
      } else {
        alert('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      dispatch(setLoading({ formType: 'engineerVisit', loading: false }));
    }
  };

  // Watch specific fields to avoid infinite loops
  const machineName = watch('machineName');
  const hospitalName = watch('hospitalName');
  const userName = watch('userName');
  const city = watch('city');
  const contactNumber = watch('contactNumber');
  const address = watch('address');

  useEffect(() => {
    dispatch(updateEngineerVisit({
      machineName,
      hospitalName,
      userName,
      city,
      contactNumber,
      address
    }));
  }, [machineName, hospitalName, userName, city, contactNumber, address, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full text-sm font-semibold text-green-800 mb-6">
              <span className="text-xl mr-2">🔧</span>
              Technical Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Request Engineer Visit
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Need technical support or maintenance? Fill out the form below and our certified engineer will visit your facility.
            </p>
          </div>

          <div className="card-gradient animate-slide-up">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="machineName" className="block text-sm font-medium text-gray-700 mb-2">
              Machine Name *
            </label>
            <input
              type="text"
              id="machineName"
              {...register('machineName', { required: 'Machine name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter the diagnostic machine name"
            />
            {errors.machineName && (
              <p className="mt-1 text-sm text-red-600">{errors.machineName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-2">
              Hospital/Clinic Name *
            </label>
            <input
              type="text"
              id="hospitalName"
              {...register('hospitalName', { required: 'Hospital/Clinic name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter hospital or clinic name"
            />
            {errors.hospitalName && (
              <p className="mt-1 text-sm text-red-600">{errors.hospitalName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Person Name *
            </label>
            <input
              type="text"
              id="userName"
              {...register('userName', { required: 'Contact person name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter contact person's full name"
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              id="city"
              ref={cityInputRef}
              {...register('city', { required: 'City is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Start typing your city name..."
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Google Maps autocomplete will help you select the correct city
            </p>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Complete Address *
            </label>
            <input
              type="text"
              id="address"
              ref={addressInputRef}
              {...register('address', { required: 'Complete address is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Start typing your complete address..."
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Google Maps autocomplete will help you select the correct address
            </p>
          </div>

          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number *
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your 10-digit contact number"
            />
            {errors.contactNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.contactNumber.message}</p>
            )}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Please ensure that the machine issue is clearly described when our engineer contacts you. 
                    Service charges may apply based on the type of service required.
                  </p>
                </div>
              </div>
            </div>
          </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={engineerVisit.loading}
                  className="btn-success w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  {engineerVisit.loading ? (
                    <span className="flex items-center justify-center">
                      <div className="loading-spinner mr-3"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="text-xl mr-2">🔧</span>
                      Request Engineer Visit
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-700 font-medium mb-4">
                  Our certified engineers typically respond within 24 hours during business days. 
                  For urgent issues, please call our emergency support line.
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <span className="mr-1">🏆</span>
                    Certified Engineers
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">⏱️</span>
                    Quick Response
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">🔧</span>
                    Expert Service
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

export default EngineerVisit;