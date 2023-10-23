import React from "react";

function Try() {
  return (
    <div className="m-16 h-1/2 mt-48 md:mt-16">
      <h2 className="text-[#41056e] text-2xl font-bold">Try Our Health menu</h2>

      <div className="flex md:flex-row flex-col justify-around items-center">
        <div>
          <div className="flex flex-col justify-start items-start md:h-72 overflow-scroll w-fit p-4 mt-16">
            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍈</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>
            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍑</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>
            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍒</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>

            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍒</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>

            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍒</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>

            <div className="flex flex-row justify-around items-center  border-2 bg-[#cbace4] shadow-xl my-4 px-16 py-2 rounded-2xl">
              <p className="shadow rounded-full text-5xl p-2">🍒</p>
              <h3 className="text-[#41056e] text-xl mx-4">Healthy Food</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" shadow-2xl rounded-t-full bg-[#fff] mx-6 border-2">
            <p className="text-6xl p-16">🍋</p>
            <p className="text-center p-2 text-[#41056e]">Try out Favourite</p>
            <div className="flex justify-center items-center">
              <button className="bg-[#9d47ff] text-white rounded-full px-4 py-2 my-4">
                Order Now
              </button>
            </div>
          </div>

          <div className=" shadow-2xl rounded-t-full bg-[#fff] mx-6 mt-4 border-2">
            <p className="text-6xl  p-16">🍑</p>
            <p className="text-center p-2 text-[#41056e]">Try out Favourite</p>
            {/* button */}
            <div className="flex justify-center items-center">
              <button className="bg-[#9d47ff] text-white rounded-full px-4 py-2 my-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Try;
