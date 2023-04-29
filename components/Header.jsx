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
    <div className="container mx-auto px-10 mb-5">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
          <div class="flex items-start h-20 mb-[-30px]">
            <img src="/vector.png" alt="sumz_logo" class="object-contain max-w-full sm:h-20 sm:w-20 h-14 w-14 mr-1 sm:mr-4" />
            <span class="blue_gradient pt-5s font-bold text-4xl sm:text-6xl leading-tight" style={{ lineHeight: "1.2" }}>Kamalogue</span>
          </div>


          </Link>   
        </div> 
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer  px-3 py-3 rounded-full hover:bg-gray-200 ">{category.name}</span></Link>
          ))}
        </div>
        <div className="md:float-right block md:mt-2 text-center">
          {/* <p className="text-lg font-semibold text-gray-700">Tired of reading long blogs?</p> */}
          {/* <p className="text-lg font-semibold text-gray-700 mb-4">Introducing our latest AI-powered feature - blog summarization!</p>
          <Link href="https://kamalogue-summerizer.vercel.app/">
            <button  className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
           Try it now!
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
