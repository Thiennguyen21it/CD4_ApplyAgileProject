import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import enflag from '../assets/en-flag.png';

const Navigation = () => {
  return (
    <div className="w-full">
      {/* Thanh màu xanh phía trên */}
      <div className="bg-green-700 h-12 flex items-center justify-between px-8 text-white">
        <div className="flex items-center gap-4 pl-4">
          <img src={logo} className="h-8 my-2" />
        </div>

        <div className="flex items-center gap-2">
          <img src={enflag} className="h-5" />
          <span>English</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Thanh menu trắng */}
      <nav className="bg-white shadow-md flex items-center justify-between px-12 py-6 h-15">
        <Link to="/" className="text-3xl font-bold text-black flex items-center gap-2">
          SmileEye
        </Link>

        <div className="flex items-center gap-16 mx-auto p-5">
          <Link to="/" className="text-lg text-gray-700 hover:text-green-700 font-medium">Home</Link>
          <Link to="/activities" className="text-lg text-gray-700 hover:text-green-700 font-medium">Activities</Link>
          <Link to="/achievement" className="text-lg text-gray-700 hover:text-green-700 font-medium">Achievement</Link>
          <Link to="/contributors" className="text-lg text-gray-700 hover:text-green-700 font-medium">Contributors</Link>
          <Link to="/blog" className="text-lg text-gray-700 hover:text-green-700 font-medium">Blog</Link>
          <Link to="/qa-contact" className="text-lg text-gray-700 hover:text-green-700 font-medium">QA & Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
