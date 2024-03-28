import { useRouter } from 'next/router';
import { courseDescription, CourseContent } from '@/utils/courseDescription'; // Import your course data
import { TracingBeam } from "@/components/ui/tracing-beam";
import "@/app/globals.css";
import CourseSkeleton from '@/components/CourseSkeleton';

const CoursePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the course based on the slug
  const course: CourseContent | undefined = courseDescription.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return <CourseSkeleton/>;
  }

  return (

        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10 min-h-screen">
            <h1 className="text-3xl m-5 my-16 text-center text-yellow-600 font-bold">{course.name}</h1>
            <TracingBeam className="px-6">
            <ul>
              {Object.entries(course.data).map(([badge, { title, description }]) => (
                <div key={`content-${course.slug}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {badge}
                </h2>

                <p className="text-xl mb-4">
                  {title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {description}
                </div>
              </div>
              ))}
            </ul>
            </TracingBeam>
          </div>
        </div>
  );
};

export default CoursePage;