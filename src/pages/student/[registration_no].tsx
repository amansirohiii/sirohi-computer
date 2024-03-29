import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import StudentSkeleton from "@/components/StudentSkeleton";

// Define interface for student data
interface Student {
  _id: { $oid: string };
  registration_no: string;
  name: string;
  course_name: string;
  date_of_birth: string;
  gender: string;
  father_name: string;
  mother_name: string;
  address: string;
  admission_date: string;
  course_completion_date: string;
  image_url: string;
}

const StudentProfile: React.FC = () => {
  const router = useRouter();
  const { registration_no } = router.query;
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate asynchronous student search
    const timer = setTimeout(() => {
      // Find student by registration number
      const foundStudent = studentData.find(
        (student) => student.registration_no === registration_no
      );
      if (foundStudent) {
        setStudent(foundStudent);
      }
      setLoading(false);
    }, 1000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [registration_no]);

  useEffect(() => {
    // Redirect if no student found after search
    if (!loading && !student) {
      router.push("/verify");
    }
  }, [loading, student, router]);

  if (loading) {
    // Render loading state while searching
    return <Layout><StudentSkeleton/></Layout>;
  }

  if (!student) {
    // Render an error message if student not found
    return <Layout>Student not found</Layout>;
  }

  return (
    <Layout>
      <div className="w-full h-screen flex flex-col items-center justify-center text-black">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">
          Student Profile
        </h1>
        <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-lg p-8">
          <img
            className="w-40 h-40 mx-auto rounded-full mb-4"
            src={student.image_url}
            alt={student.name}
          />
          <h2 className="text-xl font-bold text-center mb-2">{student.name}</h2>
          <p>
            <span className="font-bold">Registration Number:</span>{" "}
            {student.registration_no}
          </p>
          <p>
            <span className="font-bold">Course Name:</span>{" "}
            {student.course_name}
          </p>
          <p>
            <span className="font-bold">Date of Birth:</span>{" "}
            {student.date_of_birth}
          </p>
          <p>
            <span className="font-bold">Gender:</span> {student.gender}
          </p>
          <p>
            <span className="font-bold">Father's Name:</span>{" "}
            {student.father_name}
          </p>
          <p>
            <span className="font-bold">Mother's Name:</span>{" "}
            {student.mother_name}
          </p>
          <p>
            <span className="font-bold">Address:</span> {student.address}
          </p>
          <p>
            <span className="font-bold">Admission Date:</span>{" "}
            {student.admission_date}
          </p>
          <p>
            <span className="font-bold">Course Completion Date:</span>{" "}
            {student.course_completion_date}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;

// Mock student data
const studentData: Student[] = [
  {
    _id: { $oid: "660665a0095f9cbafaaed31e" },
    registration_no: "001",
    name: "Aman Sirohi",
    course_name: "CCC",
    date_of_birth: "01-01-01",
    gender: "Male",
    father_name: "A",
    mother_name: "B",
    address: "C",
    admission_date: "01-01-23",
    course_completion_date: "01-07-23",
    image_url: "https://avatars.githubusercontent.com/u/91265420?v=4",
  },
  {
    _id: { $oid: "660665a0095f9cbafaaed31f" },
    registration_no: "002",
    name: "Aman",
    course_name: "ECC",
    date_of_birth: "01-01-01",
    gender: "Male",
    father_name: "A",
    mother_name: "B",
    address: "C",
    admission_date: "01-01-23",
    course_completion_date: "01-07-23",
    image_url: "https://avatars.githubusercontent.com/u/91265420?v=4",
  },
];
