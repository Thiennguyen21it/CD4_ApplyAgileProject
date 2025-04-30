import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import activity3 from '../assets/activity3.png';
import activity4 from '../assets/activity4.png';
const VolunteerProgramsRunning = () => {
  return (
    <div className="py-12 px-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Volunteer Programs are <span className="text-green-600">running</span>
      </h2>

      {/* Program Cards */}
      <div className="flex justify-center gap-12 items-start">
        {/* Left arrow */}
        <button className="text-gray-400 hover:text-black text-4xl">
          <IoIosArrowBack />
        </button>

        {/* Card 1 */}
        <div className="max-w-sm w-full">
          <h3 className="text-lg font-bold mb-2">Vietnamese training for people</h3>
          <div className="text-sm text-gray-500 mb-1">Time: 5/2023</div>
          <div className="text-sm text-gray-500 mb-2">Place: Làng Pà-Ong</div>
          <div className="flex items-center justify-end gap-2 text-gray-700 font-semibold mb-2">
            2000 <FaHeart className="text-red-500" /> <FaShareAlt />
          </div>

          {/* Image with play icon */}
          <div className="relative rounded-lg overflow-hidden">
            <img src={activity3} alt="Vietnamese training" className="w-full h-56 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex justify-center items-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-sm">
            The program is designed to improve their language skills and communication abilities in the Vietnamese language. Our experienced trainers will conduct the training through interactive and engaging sessions, covering basic conversation, vocabulary, grammar and writing skills.
          </p>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-1">80%</div>
          </div>

          {/* Links and button */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 text-sm underline">
              <a href="#">Pitch File</a>
              <a href="#">Plan File</a>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full">
              Be a contributor or sponsor
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm w-full">
          <h3 className="text-lg font-bold mb-2">Instructions for growing crops and raising livestock</h3>
          <div className="text-sm text-gray-500 mb-1">Time: 5/2023</div>
          <div className="text-sm text-gray-500 mb-2">Place: Làng Pà-Ong</div>
          <div className="flex items-center justify-end gap-2 text-gray-700 font-semibold mb-2">
            2000 <FaHeart className="text-red-500" /> <FaShareAlt />
          </div>

          {/* Image with play icon */}
          <div className="relative rounded-lg overflow-hidden">
            <img src={activity4} alt="Farming instructions" className="w-full h-56 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex justify-center items-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-sm">
            The program includes training sessions on various topics such as soil preparation, pest control, irrigation, animal nutrition, and animal health. Our team will provide step-by-step guidance to help the farmers achieve higher crop yields and better livestock production.
          </p>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-1">80%</div>
          </div>

          {/* Links and button */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 text-sm underline">
              <a href="#">Pitch File</a>
              <a href="#">Plan File</a>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full">
              Be a contributor or sponsor
            </button>
          </div>
        </div>

        {/* Right arrow */}
        <button className="text-gray-400 hover:text-black text-4xl">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default VolunteerProgramsRunning;
