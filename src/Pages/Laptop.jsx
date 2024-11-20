import React from "react";

const Laptop = () => {
  return (
    <div className="flex w-full items-center justify-center py-10 relative min-h-fit ">
      <div className="z-10 relative w-full flex items-center justify-center">
        <img
          loading="lazy"
          src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_706,h_406,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/try.png"
          alt="Elegant"
          data-ssr-src-done="true"
          fetchpriority="high"
          className="w-[65vw] z-[11] "
        ></img>
        <video
          autoPlay="true"
          muted
          loop
          src="/src/assets/file.mp4"
          className=" h-[31vw]  w-[50%] top-[7%] absolute object-cover left-[25%]"
        ></video>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-[8vw] absolute z-0 mt-8">
        <div className="w-[60%] h-[2px] bg-zinc-400"></div>
        <div className="w-[80%] h-[2px] bg-zinc-400"></div>
        <div className="w-[100%] h-[2px] bg-zinc-400"></div>
      </div>
    </div>
  );
};

export default Laptop;
