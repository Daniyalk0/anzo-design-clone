import React, { useRef, useState } from "react";
import DesktopNav from "./Nav/DesktopNav";
import dkImage from "../assets/okLast.jpg";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Page1 = () => {

  const [xValue, setXValue] = useState(null)
  const [yValue, setYValue] = useState(null)
  const titleTextRef = useRef()

  const onChange = (e)=>{
    setXValue((e.clientX - titleTextRef.current.getBoundingClientRect().x - titleTextRef.current.getBoundingClientRect().width/2)/20)
    setYValue(-(e.clientY - titleTextRef.current.getBoundingClientRect().y - titleTextRef.current.getBoundingClientRect().height/2)/15)
  }

  useGSAP(() =>{
    gsap.to(titleTextRef.current, {
      transform: `rotateX(${yValue}deg) rotateY(${xValue}deg)`,
      duration: 2,

    })
  },[xValue, yValue])


  return (
    <div className=" h-screen py-4 px-4 bg-zinc-100"     onMouseMove={(e) => onChange(e)}>
      <div
  
        className="overflow-hidden bg-black w-full h-full xl:rounded-3xl  bg-[url(dk.jpg)] bg-cover shadow-lg shadow-zinc-400" id="page-1"
        style={{ backgroundImage: `url(${dkImage})` }}
      >
        <DesktopNav />
        <div className="titleText capitalize text-white font-[anzo4] 
        leading-[4.7vw] ml-[5vw] mt-[7vw] "  id="tiltDiv" ref={titleTextRef}>
          <div className="flex items-center gap-1 text-[3vw] ml-1">
            <h1>I AM A</h1>
            <h1 className="text-zinc-800">FRONTEND WEB</h1>
          </div>
          <h1 className="text-[7vw]">DEVELOPER</h1>
            <h1 className="text-[3vw] ml-1">TO HIRE</h1>
        </div> 
      <div className="bottomText ml-[5.5vw] font-[anzo5] text-white mt-[8.4vw] flex items-center gap-1" id="">
        <h2>BRAND DESIGN</h2>
        <h2 className="font-[anzo2] text-[2vw]">|</h2>
        <h2 className="">WEBSITE DESIGN</h2>
      </div>
      </div>
    </div>
  );
};

export default Page1;
