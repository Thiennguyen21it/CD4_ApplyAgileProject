import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-10 flex justify-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="SmileEye Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-black">SmileEye</span>
          </div>
          <p className="text-gray-600 mb-4">
            Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways
          </p>
          <div className="flex gap-4 text-green-700 text-2xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/achievement">Achievement</Link></li>
            <li><Link to="/contributors">Contributors</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About us</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/how-it-works">How it work?</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>

        {/* Contacts Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contacts Info</h3>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-green-700 p-2 rounded-full text-white">
              <FiPhoneCall />
            </div>
            <div>
              <p className="font-bold text-black">Call us</p>
              <p className="text-gray-600">0123 456 789</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-green-700 p-2 rounded-full text-white">
              <FiMail />
            </div>
            <div>
              <p className="font-bold text-black">Mail Us</p>
              <a href="mailto:dinhdongphuong@gmail.com" className="text-gray-600 underline">
              smile@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-700 p-2 rounded-full text-white">
              <FiMapPin />
            </div>
            <div>
              <p className="font-bold text-black">Visit Us</p>
              <p className="text-gray-600">Thôn Pà-Ong, Cà Dy, Nam Giang, tỉnh Quảng Nam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom green line */}
      <div className="bg-green-700 h-3 mt-10"></div>
    </footer>
  );
};

export default Footer;
