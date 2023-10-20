import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="md:w-10/12 md:text-start text-center m-auto flex flex-col-reverse md:flex-row justify-evenly items-center">
      <div className="flex-col items-center justify-evenly md:p-16 md:h-1/4">
        <h1 className="text-3xl md:text-7xl text-white font-bold p-6">
          Change your Eating Habbits
        </h1>
        <p className="text-white md:text-2xl p-2 md:p-6">
          Always have Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde sunt magni distinctio architecto? Officiis{" "}
        </p>
        {/* explore menu button */}

        <button className="bg-white m-6 text-black px-6 md:px-10 py-3 md:py-6 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Explore Menu
        </button>
      </div>
      <Image
        alt="mm"
        src="/model.png"
        width={1000}
        height={500}
        className="w-1/2 md:w-2/4 rounded-full border-2 border-t-0 border-l-0 border-white shadow-xl"
      />
    </div>
  );
}

export default Banner;
