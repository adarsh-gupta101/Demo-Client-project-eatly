import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 md:mx-6">
      <div className="text-yellow-100 text-2xl sm:text-3xl lg:text-4xl font-bold">Eatly</div>

      <nav>
        <ul className="hidden sm:flex justify-evenly w-3/4 lg:w-[50vw]">
          <li className="text-white text-sm sm:text-base lg:text-lg">Program</li>
          <li className="text-white text-sm sm:text-base lg:text-lg">Services</li>
          <li className="text-white text-sm sm:text-base lg:text-lg">Blog</li>
          <li className="text-white text-sm sm:text-base lg:text-lg">About Us</li>
        </ul>
      </nav>

      <button className="bg-white m-6 text-black px-6 md:px-10 py-3 md:py-3 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Explore Menu
        </button>
    </div>
  );
}

export default Header;
