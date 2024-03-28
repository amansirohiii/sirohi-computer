// data/courseData.ts

export interface CourseContent {
  id: number;
  slug: string;
  data: {
    [badge: string]: {
      title: string;
      description: string;
      badge: string;
    };
  };
}

export const courseDescription: CourseContent[] = [
  {
    id: 1,
    slug: 'web-development',
    data: {
      'Week 1': {
        title: 'Introduction to Web Development',
        description: 'Description for Week 1 of Web Development course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with HTML',
        description: 'Description for Week 2 of Web Development course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to CSS',
        description: 'Description for Week 3 of Web Development course',
        badge: 'Week 3',
      },
    },
  },
  {
    id: 2,
    slug: 'o-level',
    data: {
      'Week 1': {
        title: 'Introduction to O Level',
        description: 'Description for Week 1 of O Level course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with Physics',
        description: 'Description for Week 2 of O Level course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to Chemistry',
        description: 'Description for Week 3 of O Level course',
        badge: 'Week 3',
      },
    },
  },
  {
    id: 3,
    slug: 'tally',
    data: {
      'Week 1': {
        title: 'Introduction to Tally',
        description: 'Description for Week 1 of Tally course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with Tally',
        description: 'Description for Week 2 of Tally course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to Tally ERP',
        description: 'Description for Week 3 of Tally course',
        badge: 'Week 3',
      },
    },
  },
  {
    id: 4,
    slug: 'ccc',
    data: {
      'Week 1': {
        title: 'Introduction to CCC',
        description: 'Description for Week 1 of CCC course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with CCC',
        description: 'Description for Week 2 of CCC course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to CCC Course',
        description: 'Description for Week 3 of CCC course',
        badge: 'Week 3',
      },
    },
  },
  {
    id: 5,
    slug: 'ecc',
    data: {
      'Week 1': {
        title: 'Introduction to ECC',
        description: 'Description for Week 1 of ECC course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with ECC',
        description: 'Description for Week 2 of ECC course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to ECC Course',
        description: 'Description for Week 3 of ECC course',
        badge: 'Week 3',
      },
    },
  },
  {
    id: 6,
    slug: 'ms-office',
    data: {
      'Week 1': {
        title: 'Introduction to MS Office',
        description: 'Description for Week 1 of MS Office course',
        badge: 'Week 1',
      },
      'Week 2': {
        title: 'Getting Started with MS Word',
        description: 'Description for Week 2 of MS Office course',
        badge: 'Week 2',
      },
      'Week 3': {
        title: 'Introduction to MS Excel',
        description: 'Description for Week 3 of MS Office course',
        badge: 'Week 3',
      },
    },
  },

  // Add more courses as needed
];
