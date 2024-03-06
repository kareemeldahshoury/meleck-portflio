import React from 'react';
import Link from 'next/link'; 

const Header = () => {
  return (
    <header className="bg-custom-blue text-white font-average body-font shadow w-full">
      <div className="flex w-full p-10 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="text-4xl text-white  font-average">Meleck Eldahshoury</span>
        </Link>
        <nav className="text-white ">
          <Link href="/"className="mr-5 hover:text-gray-900 text-2xl">Home</Link>
          <Link href="/contemporary" className="mr-5 hover:text-gray-900 text-2xl">Contemporary</Link>
          <Link href="/portraits" className="mr-5 hover:text-gray-900 text-2xl">Portrait</Link>
          <Link href="/sports" className="mr-5 hover:text-gray-900 text-2xl">Sports</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 text-2xl">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
