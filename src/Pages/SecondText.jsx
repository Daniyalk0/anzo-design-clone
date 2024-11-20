import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";

function SecondText({ textClass }) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".textAnimate2", {
      transform: `rotateX(-80deg) scale(0.8)`,
      duration: 2,
      opacity: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".textAnimate2",
        // markers:true,
        start: "top 75%",
        end: "top -260%",
        scrub: 2,
        once: true,
      },
    });
  });

  return (
    <div className="bg-zinc-100  text-center pt-[2vw] pb-[4vw] ">
      <div
        className=" font-[anzo3] text-[40vw] mt-[5vw] leading-[32vw] "
        id="section2"
      >
        <div className="textAnimate2">
          <h1>HELPING</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-[#0000005f]">MY</h1>
        </div>
        <div className="textAnimate2">
          <h1>CLIENTS</h1>
        </div>
        <div className="textAnimate2">
          <h1>TO ACHIEVE</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-[#0000005f]">THERE</h1>
        </div>
        <div className="textAnimate2">
          <h1>DREAMS!</h1>
        </div>
      </div>
    </div>
  );
}

export default SecondText;
