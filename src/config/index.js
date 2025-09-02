export const config = {
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
  },
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
    userId: import.meta.env.VITE_EMAILJS_USER_ID || 'your_user_id',
  },
  twilio: {
    accountSid: import.meta.env.VITE_TWILIO_ACCOUNT_SID || 'YOUR_ACCOUNT_SID',
    authToken: import.meta.env.VITE_TWILIO_AUTH_TOKEN || 'YOUR_AUTH_TOKEN',
    phoneNumber: import.meta.env.VITE_TWILIO_PHONE_NUMBER || 'YOUR_TWILIO_PHONE_NUMBER',
  },
  owner: {
    email: import.meta.env.VITE_OWNER_EMAIL || 'owner@diagnosemed.com',
    phoneNumber: import.meta.env.VITE_OWNER_PHONE || 'OWNER_PHONE_NUMBER',
  },
};