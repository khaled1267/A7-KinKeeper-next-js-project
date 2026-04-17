import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" bg-white border border-dashed border-gray-300 py-5 w-10/12 mx-auto flex flex-col  items-center gap-8 mt-[80px]">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="text-lg text-[#64748B] text-center ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br  />
        relationships that matter most.
      </p>
      <button  className="btn bg-[#244D3F] text-white "> <IoMdAdd /> Get Started</button>
    </div>
  );
};

export default Banner;
