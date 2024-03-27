"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from 'react'
const Hero = () => {
    const words = [
        {
          text: "Build",
        },
        {
          text: "your",
        },
        {
          text: "career",
        },
        {
          text: "with",
        },
        {
          text: "Sirohi Computers.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className="h-[60vh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to knowledge starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  </div>

  )
}

export default Hero