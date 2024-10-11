import { useState } from 'react';
import heroSvg from './assets/svg/hero.svg';
import herroSvg from './assets/svg/herro.svg';
import iconTwSvg from './assets/svg/icontw.svg';
import iconLnSvg from './assets/svg/iconln.svg';
import iconGitSvg from './assets/svg/icongit.svg';
import hereSvg from './assets/svg/here.svg';
import segitSvg from './assets/svg/segit.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="font-inter mx-6 xl:mx-16">
      <header id="main-header" className="flex justify-between items-center w-full sticky top-0 pt-6 z-50 transition-all duration-500 ease-in-out">
        <h1 className="text-white text-lg font-semibold">Ferdi
          <span className="text-second text-base font-normal">Creative and Innovative</span>
        </h1>
        <ul id="nav-menu" className="hidden xl:flex flex-row gap-4 items-center text-second text-base font-light  bg-white xl:bg-transparent absolute xl:static right-0 top-14 rounded-md">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="xl:hidden" id="menu-toggle" aria-label="Menu">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M5 17H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div id="fullscreen-menu" className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 flex justify-center items-center">
        <button id="close-menu" aria-label="Close Menu" className="absolute top-6 right-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="text-white text-center text-2xl space-y-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 mt-8">
        <div className="relative bg-gradient-to-br from-[#2e2e2e] to-[#0a0a0a] xl:w-3/5 w-full rounded-one p-6 text-white shadow-2xl">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#525252] via-[#0e0e0e] to-[#0a0a0a] rounded-xl blur-lg opacity-70"></div>
          <div className="relative z-10">
            <div className="flex flex-col xl:flex-row justify-between gap-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full">
                  <img className="w-10 h-10 rounded-full" src={heroSvg} alt="Profile picture" />
                </div>
                <div className="ml-4">
                  <h2 className="text-base font-bold">Hi, I'm Ferdi</h2>
                  <p className="text-sm text-gray-400">Creative and Innovative</p>
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src={iconTwSvg} alt="Twitter" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src={iconLnSvg} alt="LinkedIn" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src={iconGitSvg} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-[32px] xl:text-6xl font-medium mb-2">Passionate to pursue technology</h3>
              <p className="text-base font-light text-text">Hi! I'm a web developer and designer focused on innovation and user experience. Through creativity and technology, I turn ideas into functional and aesthetic digital solutions. Welcome, and explore my work.</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/5 bg-[#FFD952] flex justify-center items-center rounded-two">
          <img className="w-full h-full" src={herroSvg} alt="Illustration" />
        </div>
      </div>

      <div className="bg-white w-full rounded-two mt-6 flex flex-col xl:flex-row justify-between">
        <div className="p-8 w-1/2 relative">
          <h1 className="font-medium text-4xl">Here.stockroomm</h1>
          <img className="absolute bottom-0 right-0" src={segitSvg} alt="Decoration" />
        </div>
        <div className="w-1/2">
          <img src={hereSvg} alt="Here Illustration" />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
