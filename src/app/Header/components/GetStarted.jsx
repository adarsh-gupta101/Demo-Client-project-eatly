import React from "react";

function GetStarted() {
  return (
    <div className="bg-[#420a6c] text-white p-16 text-center my-12 m-4 md:m-16 rounded-2xl">
      <h2 className="text-4xl font-bold my-6">Get Started with Easly</h2>
      <p className="md:w-96 m-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        accusamus nostrum praesentium, suscipit iste necessitatibus voluptatum
        eos architecto impedit similique at distinctio sed nulla.
      </p>
      <button className="bg-[#e1a91d] m-6 text-white px-6 md:px-10 py-3 md:py-6 rounded-full shadow-md font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150">
        Get Started{" "}
      </button>
    </div>
  );
}

export default GetStarted;
