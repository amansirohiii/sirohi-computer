"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Courses from "@/components/Courses";

export default function CoursesPage() {
  return (
    <div className="min-h-fit w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Courses/>

      <BackgroundBeams />
    </div>
  );
}