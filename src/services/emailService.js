import emailjs from 'emailjs-com';
import { config } from '../config';

const { serviceId: SERVICE_ID, templateId: TEMPLATE_ID, userId: USER_ID } = config.emailjs;

export const sendEmail = async (templateParams) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    console.log('Email sent successfully:', result.text);
    return { success: true, result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

export const sendSalesEnquiryEmail = async (formData) => {
  const templateParams = {
    to_email: config.owner.email,
    subject: 'New Sales Enquiry',
    machine_name: formData.machineName,
    user_name: formData.userName,
    user_email: formData.email,
    city: formData.city,
    contact_number: formData.contactNumber,
    message: `New sales enquiry for ${formData.machineName} from ${formData.userName} in ${formData.city}.`,
  };

  return await sendEmail(templateParams);
};

export const sendEngineerVisitEmail = async (formData) => {
  const templateParams = {
    to_email: config.owner.email,
    subject: 'Engineer Visit Request',
    machine_name: formData.machineName,
    hospital_name: formData.hospitalName,
    user_name: formData.userName,
    city: formData.city,
    contact_number: formData.contactNumber,
    address: formData.address,
    message: `Engineer visit requested for ${formData.machineName} at ${formData.hospitalName} in ${formData.city}.`,
  };

  return await sendEmail(templateParams);
};

export const sendContactUsEmail = async (formData) => {
  const templateParams = {
    to_email: config.owner.email,
    subject: 'Contact Us Message',
    user_name: formData.userName,
    contact_number: formData.contactNumber,
    message: formData.message,
  };

  return await sendEmail(templateParams);
};