import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Logging for debugging purposes
      console.log("Current scrollY:", window.scrollY);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex justify-between items-center w-full  transition-all duration-500 ease-in-out ${scrolled ? 'bg-primary bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'
          }`}
      >
        <h1 className="text-white text-lg font-semibold">
          Ferdi
          <span className="text-second text-base font-normal">  Creative and Innovative</span>
        </h1>
        <ul
          id="nav-menu"
          className="hidden xl:flex flex-row gap-4 items-center text-second text-base font-light  absolute xl:static right-0 top-14 rounded-md"
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="xl:hidden" onClick={toggleMenu} aria-label="Menu">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M5 17H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div
        id="fullscreen-menu"
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 flex flex-col w-full `}
      >
        <div className="flex flex-row justify-between items-center w-full px-4 absolute top-4">
          <h1 className='text-white font-medium text-lg'>Menus</h1>
          <button onClick={toggleMenu} aria-label="Close Menu" className=" text-white">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 3L3 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 3L14 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </div>
        <ul className="text-white  font-light px-4 mt-20 text-base space-y-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>


    </>
  )
}

export default Navbar