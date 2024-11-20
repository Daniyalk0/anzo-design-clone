import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


function GlobalBtn() {

  return (
    <button  className="btn py-[0.8vw] text-[1vw] px-8 font-[anzo6] bg-black text-white rounded-tl-3xl rounded-br-3xl rounded-bl-sm rounded-tr-sm  border-[0.33vw] border-white hover:bg-[#707070] transition-all duration-300 cursor-pointer shadow-md shadow-zinc-700">
      GlobalBtn
    </button>
  );
}

export default GlobalBtn;
