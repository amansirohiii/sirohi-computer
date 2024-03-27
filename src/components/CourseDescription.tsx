"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface CourseContent {
    badge: string;
    title: string;
    description: JSX.Element;
  }


  export function CourseDescription({ dummyContent }: { dummyContent: CourseContent[] }) {
    return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

