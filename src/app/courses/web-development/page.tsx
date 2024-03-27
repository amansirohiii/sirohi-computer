import React from "react";
import { CourseDescription } from "@/components/CourseDescription";

interface CourseContent {
  badge: string;
  title: string;
  description: JSX.Element;
}

const dummyContent: CourseContent[] = [
  {
    title: "Introduction to Web Development",
    description: (
      <>


1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development

      </>
    ),
    badge: "Week 1",
  },
  {
    title: "Getting Started with HTML",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 2",
  },
  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },  {
    title: "Introduction to CSS",
    description: (
      <>

1) What is web development?
<br />
2) Where should I start as a beginner?
<br />
3) HTML: Building Your First Website
<br />
4) What you can do as a web developer
<br />
5) Frontend vs Backend development
      </>
    ),
    badge: "Week 3",
  },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl m-5 my-16 text-center text-yellow-600 font-bold">Web Development</h1>
      <CourseDescription dummyContent={dummyContent} />
    </div>
  );
};

export default WebDevelopment;
