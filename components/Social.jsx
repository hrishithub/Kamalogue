import React from 'react';
import Image from 'next/image';

const Social = () => {
  return (
    <div className="flex flex-col mt: -50 items-center justify-center h-screen">
      <div className="flex flex-row md:flex-row 
  .image-container:hover ">
        <a href="https://twitter.com/hrishistwt" className="w-full md:w-1/4 p-4 
  .image-container:hover">
          <Image src="/twitter.png" alt="Image 1" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/hrishikesh-gawde-512993244/" className="w-full md:w-1/4 p-4 
  .image-container:hover">
          <Image src="/linkedin.png" alt="Image 2" width={30} height={30} />
        </a>
        <a href="https://www.instagram.com/hrishinstagrm/" className="w-full md:w-1/4 p-4 
  .image-container:hover">
          <Image src="/instagram.png" alt="Image 3" width={30} height={30} />
        </a>
        <a href="https://discord.gg/ErkuvUrj" className="w-full md:w-1/4 p-4 
  .image-container:hover">
          <Image src="/discord.png" alt="Image 4" width={30} height={30} />
        </a>
      </div>
    </div>
  );
};

export default Social;
