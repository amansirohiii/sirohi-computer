import { useRouter } from 'next/router';
import { courseData, CourseContent } from '@/utils/constants'; // Import your course data
import { TracingBeam } from "@/components/ui/tracing-beam";
import CourseSkeleton from '@/components/CourseSkeleton';
// import RootLayout from '@/app/layout';
import Layout from '@/components/Layout';

const CoursePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the course based on the slug
  const course: CourseContent | undefined = courseData.find(
    (item) => item.slug === slug
  );
 if(!course) return <Layout><CourseSkeleton/></Layout>;



  return (

<div>
       <Layout title= {course.name}>
       <div className="max-w-2xl mx-auto antialiased pt-4 relative">

          <div className="mb-10 min-h-screen">
          <div className='m-5 my-16 flex items-center'>
  <span className="mr-4 cursor-pointer" onClick={() => router.back()}>
    ←
  </span>
  <h1 className="text-3xl text-yellow-600 font-bold text-center justify-center mx-auto">{course?.name}</h1>
</div>

            <TracingBeam className="px-6">
            <ul>
              {Object.entries(course?.data).map(([badge, { title, description }], index) => (
  <div key={`content-${course?.slug}-${index}`} className="mb-10">
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

        </Layout>
        </div>

  );
};

export default CoursePage;
