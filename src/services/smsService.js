import { config } from '../config';

export const sendSMS = async (message, toNumber) => {
  try {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${config.twilio.accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${config.twilio.accountSid}:${config.twilio.authToken}`),
      },
      body: new URLSearchParams({
        From: config.twilio.phoneNumber,
        To: toNumber,
        Body: message,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('SMS sent successfully:', result.sid);
      return { success: true, result };
    } else {
      const error = await response.json();
      console.error('SMS sending failed:', error);
      return { success: false, error };
    }
  } catch (error) {
    console.error('SMS service error:', error);
    return { success: false, error };
  }
};

export const sendSalesEnquirySMS = async (formData) => {
  const message = `New sales enquiry: ${formData.machineName} from ${formData.userName} (${formData.contactNumber}) in ${formData.city}`;
  return await sendSMS(message, config.owner.phoneNumber);
};

export const sendEngineerVisitSMS = async (formData) => {
  const message = `Engineer visit request: ${formData.machineName} at ${formData.hospitalName} by ${formData.userName} (${formData.contactNumber})`;
  return await sendSMS(message, config.owner.phoneNumber);
};

export const sendContactUsSMS = async (formData) => {
  const message = `Contact message from ${formData.userName} (${formData.contactNumber}): ${formData.message.substring(0, 100)}...`;
  return await sendSMS(message, config.owner.phoneNumber);
};