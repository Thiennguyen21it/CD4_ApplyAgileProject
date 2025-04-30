import { Link } from 'react-router-dom';
import home_project from '../assets/home-project.jpg';
const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md mx-8 mt-8">
      {/* Left: Image with Play Button */}
      <div className="relative flex-shrink-0 w-full md:w-1/2">
        <img
          src={home_project} // <-- update this path accordingly
          alt="Pa-Ong village project"
          className="rounded-xl object-cover w-full h-full"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-2 rounded-full shadow-md">
            <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Right: Project Info */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 className="text-3xl font-bold mb-4">Pa-Ong village development project</h2>
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Time:</strong> 5/2023</span>
            <span><strong>Place:</strong> Làng Pa-Ong</span>
            <span className="flex items-center gap-1">
              2000
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343 3.172 11.515a4 4 0 010-5.656z" />
              </svg>
            </span>
            <svg className="w-4 h-4 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v-1a4 4 0 014-4h12M4 12v1a4 4 0 004 4h12m-6-5h6m-6 2h6" />
            </svg>
          </div>

          <p className="text-gray-700 mb-6">
            Charity project for the sustainable development of Co tu minority people in Pà-Ong Village aims to provide clean water, healthcare, education, and livelihood opportunities to improve the quality of life for the community. The project is focused on creating a sustainable future and making a difference in the lives of those who are less fortunate.
          </p>

          <div className="flex gap-8 text-green-700 font-medium mb-4">
            <Link to="#" className="underline">Plan File</Link>
            <Link to="#" className="underline">Pitch File</Link>
          </div>

          {/* Funding Progress */}
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-gray-600">
              <span>Funding</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800 font-semibold">
          Be a contributor or sponsor
        </button>
      </div>
    </div>
  );
};

export default Intro;
