import { Link } from 'react-router-dom';

const Support = () => {
  const faqData = [
    {
      question: "What types of diagnostic machines do you sell?",
      answer: "We offer a comprehensive range of diagnostic equipment including X-ray machines, ultrasound systems, MRI scanners, CT scanners, blood analyzers, ECG machines, and various laboratory diagnostic equipment from leading manufacturers."
    },
    {
      question: "Do you provide installation and training services?",
      answer: "Yes, we provide complete installation services by certified technicians and comprehensive training for your staff to ensure optimal use of the equipment. Training includes operation, maintenance, and safety protocols."
    },
    {
      question: "What is your warranty policy?",
      answer: "All our diagnostic machines come with manufacturer warranty ranging from 1-3 years depending on the equipment. We also offer extended warranty options and comprehensive maintenance contracts."
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "We guarantee response within 24 hours for normal service requests and within 4 hours for emergency calls during business days. Our engineers are available 24/7 for critical equipment failures."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with leading financial institutions to offer flexible financing options including leasing, EMI plans, and special schemes for startups and small clinics."
    },
    {
      question: "Can you provide equipment demonstrations?",
      answer: "Absolutely! We can arrange on-site demonstrations at your facility or you can visit our showroom to see the equipment in action before making a purchase decision."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions and get the support you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 mb-4">
              Browse through our comprehensive FAQ section to find quick answers to common questions.
            </p>
            <a href="#faq" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              View FAQs
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Technical Support
            </h3>
            <p className="text-gray-600 mb-4">
              Need immediate technical assistance? Request an engineer visit for on-site support.
            </p>
            <Link
              to="/engineer-visit"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Request Engineer
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Support
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Send us a message and we'll get back to you quickly.
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Critical Equipment Failure</h3>
                <p className="text-gray-600 mt-1">
                  For life-critical equipment failures that require immediate attention, 
                  call our 24/7 emergency hotline.
                </p>
                <p className="text-red-600 font-semibold mt-2">Emergency: +91 98765 43212</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Remote Support</h3>
                <p className="text-gray-600 mt-1">
                  Many issues can be resolved remotely. Our technicians can guide you through 
                  troubleshooting steps via phone or video call.
                </p>
                <p className="text-blue-600 font-semibold mt-2">Support: +91 98765 43211</p>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is committed to providing you with the best possible service. 
            Don't hesitate to reach out if you need any assistance.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact-us"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </Link>
            <a
              href="tel:+919876543211"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;