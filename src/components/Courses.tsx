"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Courses() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
        <h1 className="text-3xl sm:text-5xl items-center justify-center my-5 sm:mt-12">Our Courses </h1>
      <HoverEffect items = {items} />
    </div>
  );
}
export const items = [
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    slug: "/courses/web-development",
  },
  {
    title: "O Level",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    slug: "/courses/o-level",
  },
  {
    title: "Tally",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/tally",
  },
  {
    title: "CCC",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug: "/courses/ccc",
  },
  {
    title: "ECC",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    slug: "/courses/ecc",
  },
  {
    title: "MS Office",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    slug: "/courses/ms-office",
  },
];
