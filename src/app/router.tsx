import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <header className="bg-white text-customgreen font-average body-font shadow w-full">
      <div className="flex w-full p-10 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="text-4xl text-customgreen font-average">Meleck Eldahshoury</span>
        </a>
        <nav className="">
          <button onClick={() => navigate('/')} className="mr-5 hover:text-gray-900 text-2xl">Home</button>
          <a className="mr-5 hover:text-gray-900 text-2xl">About</a>
          <a className="mr-5 hover:text-gray-900 text-2xl">Services</a>
          <a className="mr-5 hover:text-gray-900 text-2xl">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
