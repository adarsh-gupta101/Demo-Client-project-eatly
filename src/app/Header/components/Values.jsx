import Image from "next/image";
import React from "react";

function Values() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center h-screen">
      <div className="">
        <Image
          src="/model2.png"
          width={1000}
          height={1000}
          alt="model"
          className="w-4/5 mt-16 m-auto md:w-11/12  rounded-full border-2 border-t-0 border-l-0 border-white shadow-xl"
        />
      </div>
      <div className="md:w-2/4 w-full ">
        <p className="font-bold text-2xl m-4 text-center md:text-start">Our Values to Help You</p>
        <div className="flex flex-wrap">
          <div className="shadow-xl rounded-xl mx-4 border-b-2 border-b-[#420a6c]">
            <div className="md:w-64 m-4 p-2 rounded">
              <h2 className="font-bold text-xl text-[#420a6c]">Become Healthier</h2>
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                vitae?
              </p>
            </div>
          </div>

          <div className="shadow-xl rounded-xl mx-4   border-b-2 border-b-[#420a6c]">
            <div className="md:w-64 m-4 p-2 rounded">
              <h2 className="font-bold text-xl text-[#420a6c]">Become Healthier</h2>
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                vitae?
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-xl mx-4 border-b-2 border-b-[#420a6c]">
            <div className="md:w-64 m-4 p-2 rounded">
              <h2 className="font-bold text-xl text-[#420a6c]">Become Healthier</h2>
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                vitae?
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-xl mx-4 border-b-2 border-b-[#420a6c]">
            <div className="md:w-64 m-4 p-2 rounded">
              <h2 className="font-bold text-xl text-[#420a6c]">Become Healthier</h2>
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                vitae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
