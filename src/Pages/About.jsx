import React from "react";

const About = () => {
  return (
    <div className=" h-screen bg-zinc-100 py-2 px-4 ">
      <div
        className="overflow-hidden  bg-black w-full h-full xl:rounded-3xl shadow-lg shadow-zinc-400 flex items-center justify-center relative "
      >
        <video src="/src/assets/file (4).mp4" autoPlay="true" muted loop></video>
        <h1 className="text-white font-[anzo3] text-[41vw] tracking-wide absolute left-[5%] bottom-[-32%]">ABOUT</h1>
      </div>
    </div>
  );
};

export default About;
