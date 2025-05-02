import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import activity1 from '../assets/activity1.png';
import activity2 from '../assets/activity2.png';
const VolunteerProgramsCalling = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Programs are <span className="text-green-600">calling</span> for volunteers and sponsors
        </h2>

        {/* Programs Container */}
        <div className="flex justify-between gap-4 md:gap-12 items-start w-full">
          {/* Arrow left */}
          <button className="text-gray-400 hover:text-black text-2xl md:text-4xl">
            <IoIosArrowBack />
          </button>

          {/* Program Cards Container */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 flex-1">
            {/* Program Card 1 */}
            <div className="w-full">
              <h3 className="text-lg font-bold mb-2">Teaching English for kids in the village</h3>
              <div className="text-sm text-gray-500 mb-1">Time: 5/2023</div>
              <div className="text-sm text-gray-500 mb-2">Place: Làng Pà-Ong</div>
              <div className="flex items-center justify-end gap-2 text-gray-700 font-semibold mb-2">
                2000 <FaHeart className="text-red-500" /> <FaShareAlt />
              </div>

              {/* Image with Play Button */}
              <div className="relative rounded-lg overflow-hidden">
                <img src={activity1} alt="Program 1" className="w-full h-56 object-cover" />
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
                This is a program under our charitable project that aims to provide English language education to children in rural areas.
                The program is designed to equip children with the necessary skills to communicate effectively in English.
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">80%</div>
              </div>

              {/* Files and Button */}
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

            {/* Program Card 2 */}
            <div className="w-full">
              <h3 className="text-lg font-bold mb-2">Educate people to protect their health</h3>
              <div className="text-sm text-gray-500 mb-1">Time: 5/2023</div>
              <div className="text-sm text-gray-500 mb-2">Place: Làng Pà-Ong</div>
              <div className="flex items-center justify-end gap-2 text-gray-700 font-semibold mb-2">
                2000 <FaHeart className="text-red-500" /> <FaShareAlt />
              </div>

              {/* Image with Play Button */}
              <div className="relative rounded-lg overflow-hidden">
                <img src={activity2} alt="Program 2" className="w-full h-56 object-cover" />
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
                This program aims to educate people about healthy eating habits, physical activity, mental health, hygiene, and preventive measures against illnesses.
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">80%</div>
              </div>

              {/* Files and Button */}
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
          </div>

          {/* Arrow right */}
          <button className="text-gray-400 hover:text-black text-2xl md:text-4xl">
            <IoIosArrowForward />
          </button>
        </div>
    </div>
  );
};

export default VolunteerProgramsCalling;
