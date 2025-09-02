import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SalesEnquiry from './pages/SalesEnquiry';
import EngineerVisit from './pages/EngineerVisit';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-enquiry" element={<SalesEnquiry />} />
            <Route path="/engineer-visit" element={<EngineerVisit />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
