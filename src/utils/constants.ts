export const mobileMenuItems = [
  { name: "Home", slug: "/" },
  { name: "Our Courses", slug: "/courses" },
  { name: "About Us", slug: "/about" },
  { name: "Contact Us", slug: "/contact" },
  { name: "Log Out", slug: "/logout" },
];
export const courseMenuItems = [
  { name: "Web Development", slug: "/courses/web-development" },
  { name: "O Level", slug: "/courses/o-level" },
  { name: "Tally", slug: "/courses/tally" },
  { name: "CCC", slug: "/courses/ccc" },
  { name: "ECC", slug: "/courses/ecc" },
  { name: "MS Office", slug: "/courses/ms-office" },
];
export const heroImages = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const courseDataa = [
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
  {
    title: "ADCA",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/adca",
  },
  {
    title: "DCA-A",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/dca-a",
  },
  {
    title: "DOAP",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/doap",
  },
  {
    title: "PGDCA",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/pgdca",
  },
  {
    title: "DTP",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/dtp",
  },
  {
    title: "Python",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "/courses/python",
  },
];
// data/courseData.ts

export interface CourseContent {
  id: number;
  slug: string;
  name: string;
  description: string;
  slug2: string;
  data: {
    [badge: string]: {
      title: string;
      description: string;
      badge: string;
    };
  };
}

export const courseData: CourseContent[] = [
  {
    id: 1,
    slug: "web-development",
    name: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    slug2: "/courses/web-development",
    data: {
      "Week 1": {
        title: "Introduction to Web Development",
        description: "Description for Week 1 of Web Development course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with HTML",
        description: "Description for Week 2 of Web Development course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to CSS",
        description: "Description for Week 3 of Web Development course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 2,
    slug: "o-level",
    name: "O Level",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    slug2: "/courses/o-level",
    data: {
      "Week 1": {
        title: "Introduction to O Level",
        description: "Description for Week 1 of O Level course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with Physics",
        description: "Description for Week 2 of O Level course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to Chemistry",
        description: "Description for Week 3 of O Level course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 3,
    slug: "tally",
    name: "Tally",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug2: "/courses/tally",
    data: {
      "Week 1": {
        title: "Introduction to Tally",
        description: "Description for Week 1 of Tally course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with Tally",
        description: "Description for Week 2 of Tally course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to Tally ERP",
        description: "Description for Week 3 of Tally course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 4,
    slug: "ccc",
    name: "Course on Computer Concepts CCC",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/ccc",
    data: {
      "Week 1": {
        title: "Introduction to CCC",
        description: "Description for Week 1 of CCC course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with CCC",
        description: "Description for Week 2 of CCC course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to CCC Course",
        description: "Description for Week 3 of CCC course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 5,
    slug: "ecc",
    name: "ECC",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/ecc",
    data: {
      "Week 1": {
        title: "Introduction to ECC",
        description: "Description for Week 1 of ECC course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with ECC",
        description: "Description for Week 2 of ECC course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to ECC Course",
        description: "Description for Week 3 of ECC course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 6,
    slug: "ms-office",
    name: "MS Office",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/ms-office",
    data: {
      "Week 1": {
        title: "Introduction to MS Office",
        description: "Description for Week 1 of MS Office course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with MS Word",
        description: "Description for Week 2 of MS Office course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to MS Excel",
        description: "Description for Week 3 of MS Office course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 7,
    slug: "adca",
    name: "ADCA",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/adca",
    data: {
      "Week 1": {
        title: "Introduction to ADCA",
        description: "Description for Week 1 of ADCA course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with ADCA",
        description: "Description for Week 2 of ADCA course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to ADCA Course",
        description: "Description for Week 3 of ADCA course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 8,
    slug: "dca-a",
    name: "DCA-A",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/dca-a",
    data: {
      "Week 1": {
        title: "Introduction to DCA-A",
        description: "Description for Week 1 of DCA-A course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with DCA-A",
        description: "Description for Week 2 of DCA-A course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to DCA-A Course",
        description: "Description for Week 3 of DCA-A course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 9,
    slug: "doap",
    name: "DOAP",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/doap",
    data: {
      "Week 1": {
        title: "Introduction to DOAP",
        description: "Description for Week 1 of DOAP course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with DOAP",
        description: "Description for Week 2 of DOAP course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to DOAP Course",
        description: "Description for Week 3 of DOAP course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 10,
    slug: "pgdca",
    name: "PGDCA",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/pgdca",
    data: {
      "Week 1": {
        title: "Introduction to PGDCA",
        description: "Description for Week 1 of PGDCA course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with PGDCA",
        description: "Description for Week 2 of PGDCA course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to PGDCA Course",
        description: "Description for Week 3 of PGDCA course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 11,
    slug: "dtp",
    name: "DTP",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/dtp",
    data: {
      "Week 1": {
        title: "Introduction to DTP",
        description: "Description for Week 1 of DTP course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with DTP",
        description: "Description for Week 2 of DTP course",
        badge: "Week 2",
      },
      "Week 3": {
        title: "Introduction to DTP Course",
        description: "Description for Week 3 of DTP course",
        badge: "Week 3",
      },
    },
  },
  {
    id: 12,
    slug: "python",
    name: "Python",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug2: "/courses/python",
    data: {
      "Week 1": {
        title: "Introduction to Python",
        description: "Description for Week 1 of Python course",
        badge: "Week 1",
      },
      "Week 2": {
        title: "Getting Started with Python",
        description: "Description for Week",
        badge: "Week 2",
      },
    },
  },
];
