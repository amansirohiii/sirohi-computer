import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function CourseSkeleton() {
  return (
  <div className="max-w-2xl mx-auto antialiased pt-4 relative text-center h-screen">
    <Skeleton className="h-8 w-2/5 mx-auto rounded-lg my-16 items-center"/>
    <div className=" w-full flex items-center gap-3 mb-5">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
    <div className=" w-full flex items-center gap-3 mb-5">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div><div className=" w-full flex items-center gap-3 mb-5">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
    </div>
  );
}
