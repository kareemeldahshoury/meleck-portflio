import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-custom-blue text-white font-average body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* Adjust the text size for smaller screens using responsive prefixes */}
            <span className="text-xl md:text-2xl text-white font-average">Meleck Eldahshoury</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* Consider hiding or changing the layout of these links on smaller screens */}
          <Link href="/" className="mr-5 hover:text-gray-900 text-lg md:text-xl">Home</Link>
          <Link href="/contemporary" className="mr-5 hover:text-gray-900 text-lg md:text-xl">Contemporary</Link>
          <Link href="/portraits" className="mr-5 hover:text-gray-900 text-lg md:text-xl">Portrait</Link>
          <Link href="/sports" className="mr-5 hover:text-gray-900 text-lg md:text-xl">Sports</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 text-lg md:text-xl">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
