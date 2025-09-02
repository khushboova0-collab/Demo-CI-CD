import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '🔬',
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art medical equipment for accurate diagnosis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Fast Service',
      description: '24/7 emergency support and rapid response times',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🏆',
      title: 'Certified Quality',
      description: 'ISO certified equipment with international standards',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '💡',
      title: 'Expert Training',
      description: 'Comprehensive training programs for your staff',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Hospitals Served', icon: '🏥' },
    { number: '1000+', label: 'Equipment Installed', icon: '⚙️' },
    { number: '24/7', label: 'Support Available', icon: '🕒' },
    { number: '15+', label: 'Years Experience', icon: '📈' }
  ];

  return (
    <div className="min-h-screen bg-gradient-modern relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-secondary-400/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-accent-400/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-base font-semibold text-primary-700 mb-12 animate-fade-in shadow-glass">
              <span className="text-2xl mr-3 animate-bounce">🚀</span>
              Leading Medical Equipment Solutions
            </div>
            
            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 animate-slide-up">
              <span className="gradient-text">Welcome to</span>
              <br />
              <span className="text-gradient-primary">DiagnoseMed</span>
            </h1>
            
            {/* Hero Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in font-light" style={{animationDelay: '0.2s'}}>
              Your trusted partner for <span className="text-gradient-primary font-semibold">diagnostic equipment</span> sales and service. 
              We provide high-quality medical diagnostic machines and comprehensive 
              support services to hospitals and healthcare facilities worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20 animate-bounce-in" style={{animationDelay: '0.4s'}}>
              <Link
                to="/sales-enquiry"
                className="btn-primary text-xl px-12 py-5 group relative z-10"
              >
                <span className="flex items-center relative z-10">
                  <span className="text-2xl mr-3">💼</span>
                  Get Started
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/support"
                className="btn-glass text-xl px-12 py-5 group"
              >
                <span className="flex items-center">
                  <span className="text-2xl mr-3">📚</span>
                  Learn More
                  <svg className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Floating Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-glass text-center py-6 px-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl mb-2 animate-float">⚡</div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">24/7 Support</h3>
                <p className="text-neutral-600 text-sm">Round the clock assistance</p>
              </div>
              
              <div className="card-glass text-center py-6 px-4 animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="text-3xl mb-2 animate-float" style={{animationDelay: '0.5s'}}>🏆</div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">ISO Certified</h3>
                <p className="text-neutral-600 text-sm">International quality standards</p>
              </div>
              
              <div className="card-glass text-center py-6 px-4 animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="text-3xl mb-2 animate-float" style={{animationDelay: '1s'}}>🔬</div>
                <h3 className="text-lg font-semibold text-neutral-700 mb-2">Advanced Tech</h3>
                <p className="text-neutral-600 text-sm">Cutting-edge equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-secondary-600/90 to-accent-600/90"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-slide-down">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Our proven track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-glass py-8 px-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-4 animate-float" style={{animationDelay: `${index * 0.2}s`}}>{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">{stat.number}</div>
                  <div className="text-white/90 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-6 animate-slide-up">
              Why Choose DiagnoseMed?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              We combine cutting-edge technology with exceptional service to deliver 
              <span className="text-gradient-primary font-semibold"> unmatched value</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-gradient group cursor-pointer animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft`}>
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-gradient-primary transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-6 animate-slide-up">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Comprehensive solutions for all your 
              <span className="text-gradient-primary font-semibold"> medical equipment needs</span>
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Sales Enquiry Card */}
            <div className="card-glass group h-full animate-slide-right" style={{animationDelay: '0.3s'}}>
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-8 flex-1">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-700 rounded-4xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow">
                    <span className="text-4xl">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-6 group-hover:text-gradient-primary transition-all duration-300">
                      Sales Enquiry
                    </h3>
                    <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                      Interested in purchasing diagnostic equipment? Submit your enquiry 
                      and our sales team will contact you with detailed information, 
                      competitive pricing, and personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    to="/sales-enquiry"
                    className="btn-primary w-full justify-center group/btn inline-flex text-lg"
                  >
                    <span className="flex items-center relative z-10">
                      <span className="text-xl mr-3">💼</span>
                      Make Sales Enquiry
                      <svg className="w-6 h-6 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Engineer Visit Card */}
            <div className="card-glass group h-full animate-slide-left" style={{animationDelay: '0.5s'}}>
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-8 flex-1">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent-500 to-accent-700 rounded-4xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-accent">
                    <span className="text-4xl">🔧</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-6 group-hover:text-gradient-primary transition-all duration-300">
                      Engineer Visit
                    </h3>
                    <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                      Need technical support or maintenance? Request an engineer visit 
                      and our certified technicians will assist you promptly with 
                      installations, repairs, and preventive maintenance.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    to="/engineer-visit"
                    className="btn-success w-full justify-center group/btn inline-flex text-lg"
                  >
                    <span className="flex items-center relative z-10">
                      <span className="text-xl mr-3">🔧</span>
                      Request Engineer Visit
                      <svg className="w-6 h-6 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 animate-slide-up">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Our expert support team is here to assist you with any questions or concerns. 
              Get <span className="font-bold text-white">personalized guidance</span> and solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center animate-bounce-in" style={{animationDelay: '0.4s'}}>
              <Link
                to="/support"
                className="btn-glass text-xl px-12 py-5 group border-2 border-white/30 hover:border-white/50"
              >
                <span className="flex items-center">
                  <span className="text-2xl mr-3">💬</span>
                  Visit Support Center
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/contact-us"
                className="bg-white/20 backdrop-blur-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 text-white font-semibold text-xl px-12 py-5 rounded-2xl shadow-glass hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  Contact Us Now
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;