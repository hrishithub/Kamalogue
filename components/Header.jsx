import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <img src="/logo_bgremove.png" alt="sumz_logo" className="object-contain mt-[-40px] mx-auto text-center max-w-full sm:h-500 sm:w-500" height="500" width="500" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
        <div className="md:float-right block md:mt-2 text-center">
          {/* <p className="text-lg font-semibold text-gray-700">Tired of reading long blogs?</p> */}
          <p className="text-lg font-semibold text-gray-700 mb-4">Try our latest AI-powered feature - blog summarization!</p>
          <Link href="https://kamalogue-summerizer.vercel.app/">
            <button  className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Get AI Summaries!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
