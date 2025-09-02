import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/sales-enquiry', label: 'Sales Enquiry', icon: '💼' },
    { path: '/engineer-visit', label: 'Engineer Visit', icon: '🔧' },
    { path: '/support', label: 'Support', icon: '💬' },
    { path: '/contact-us', label: 'Contact Us', icon: '📞' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🏥</span>
            </div>
            <Link 
              to="/" 
              className="text-white text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-300"
            >
              Diagnose<span className="text-blue-200">Med</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-blue-700 to-purple-800">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
              {location.pathname === item.path && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;