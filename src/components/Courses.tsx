"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { courseData } from "@/utils/constants";

export default function Courses() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
        <h1 className="text-3xl sm:text-5xl items-center justify-center my-5 sm:mt-12">Our Courses </h1>
      <HoverEffect items = {...courseData} />
    </div>
  );
}

