import { useRouter } from 'next/router';
import { courseDescription, CourseContent } from '@/utils/courseDescription'; // Import your course data

const CoursePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the course based on the slug
  const course: CourseContent | undefined = courseDescription.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.data['Week 1'].title}</h1>
      <p>{course.data['Week 1'].description}</p>
      <ul>
        {Object.entries(course.data).map(([badge, { title, description }]) => (
          <li key={badge}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
