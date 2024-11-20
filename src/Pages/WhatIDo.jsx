import React from "react";

function WhatIDo() {
  return (
    <div className=" h-screen py-4 px-4 bg-zinc-100">
      <div
        className="overflow-hidden  bg-black w-full h-full xl:rounded-3xl shadow-lg shadow-zinc-400 flex items-center justify-center relative gap-[14vw]"
        id="whatIDo"
      >
        <div>
          <div className="text-[20vw] text-white relative z-[6] font-[anzo3] leading-[15.7vw] tracking-wide  w-fit ">
            <h1 className="">WHAT</h1>
            <h1 className="">I DO</h1>
          </div>
          <div className=" text-white leading-5 text-[1.3vw] mt-[1vw]" >
            <p className="uppercase font-[anzo2]">i design and develop</p>
            <p className="uppercase font-[anzo5] text-[#ffffff8b]">
              MODERN, IMPACTFUL AND LUXURIOUS
            </p>
            <p className="font-[anzo2]">
              websites that seamlessly bridge your goals with needs of your
              clients.
            </p>
          </div>
        </div>
        <video src="/src/assets/asliEarth.mp4" autoPlay="true" loop muted class="filter grayscale w-[30vw]  relative top-[47%] right-[19vw] z-[5] "></video>
        <video src="/src/assets/chandBhai.mp4" autoPlay="true" loop muted class="filter grayscale w-[12vw]  absolute z-[0] right-[12vw]  top-[13%]"></video>
      </div>
    </div>
  );
}

export default WhatIDo;
