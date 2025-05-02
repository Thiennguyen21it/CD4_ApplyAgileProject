import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="md:flex md:justify-between">
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center justify-center md:justify-start">
            <img src={logo} alt="SmileEye Logo" className="mr-4 h-10" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SmileEye</span>
          </a>
          <p className="text-gray-600 text-sm sm:text-base mt-4 text-center md:text-left dark:text-gray-400">
            Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          {/* Menu */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/achievement" className="hover:underline">Achievement</Link>
              </li>
              <li className="mb-4">
                <Link to="/contributors" className="hover:underline">Contributors</Link>
              </li>
              <li className="mb-4">
                <Link to="/volunteer" className="hover:underline">Volunteer</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About us</h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/how-it-works" className="hover:underline">How it works?</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">Contact us</Link>
              </li>
              <li className="mb-4">
                <Link to="/faq" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="/help" className="hover:underline">Help</Link>
              </li>
            </ul>
          </div>

          {/* Contacts Info */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacts Info</h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4 flex items-center gap-3">
                <FiPhoneCall className="w-5 h-5" />
                <div>
                  <p className="font-bold text-black dark:text-white">Call us</p>
                  <p>0962 414 125</p>
                </div>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <FiMail className="w-5 h-5" />
                <div>
                  <p className="font-bold text-black dark:text-white">Mail Us</p>
                  <a href="mailto:dinhdongphuong@gmail.com" className="underline hover:text-gray-900 dark:hover:text-white">
                    dinhdongphuong@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5" />
                <div>
                  <p className="font-bold text-black dark:text-white">Visit Us</p>
                  <p>Thôn Pà-Ong, Cà Dy, Nam Giang, tỉnh Quảng Nam</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <a href="#" className="hover:underline">SmileEye™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Twitter">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Instagram">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Facebook">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="YouTube">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;