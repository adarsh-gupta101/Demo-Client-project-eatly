import React from "react";

function Header() {
  return (
    <div
      className="flex md:flex-row flex-col justify-evenly text-center md:text-start items-center md:items-start md:p-16 py-16 md:m-16 shadow rounded-xl text-[#420a6c] h-screen md:h-fit"
    >
      <div className=" text-2xl sm:text-3xl lg:text-4xl font-bold  md:w-1/3">
        <p className=
        " md:text-start text-center">Eatly</p>
        <p className="text-sm font-medium mt-2 text-black">
          We have a mission Lorem ipsum dolor sit.
        </p>
      </div>

      <div className="">
        <p className="font-bold text-2xl my-2">About Us</p>
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-2xl my-2">Movement</p>
        <ul>
          <li>
            <a href="">What Eatly</a>
          </li>
          <li>
            <a href="">Support Us</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-2xl my-2">Company</p>
        <ul>
          <li>
            <a href="">Why eatly</a>
          </li>
          <li>
            <a href="">Capital</a>
          </li>
          <li>
            <a href="">Security</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold text-2xl my-2">Support</p>
        <ul>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Support Center</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
