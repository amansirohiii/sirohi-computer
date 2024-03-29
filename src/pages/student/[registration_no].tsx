import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import StudentSkeleton from "@/components/StudentSkeleton";
import Image from "next/image";
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
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `https://sirohi-computer-backend.vercel.app:5000/student/${registration_no}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }
        const foundStudent = await response.json();
        setStudent(foundStudent);
        console.log(student)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    if (registration_no) {
      fetchStudentData();
    }

    return () => setLoading(true); // Reset loading state when unmounting or changing registration_no
  }, [registration_no]);

  useEffect(() => {
    // Redirect if no student found after search
    if (!loading && !student) {
      router.push("/verify");
    }
  }, [loading, student, router]);

  if (loading) {
    // Render loading state while searching
    return (
      <Layout>
        <StudentSkeleton />
      </Layout>
    );
  }

  if (!student) {
    // Render an error message if student not found
    return (
      <Layout>
        <div className="h-screen text-3xl text-center">
          Student not found, Redirecting...
        </div>
      </Layout>
    );
  }

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-black">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">
          Student Profile
        </h1>
        <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-lg p-8">
          <Image
            priority
            width={150}
            height={150}
            src={student.image_url}
            alt={student.name}
            className=" mx-auto rounded-full mb-4"
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
            <span className="font-bold">Father&apos;s Name:</span>{" "}
            {student.father_name}
          </p>
          <p>
            <span className="font-bold">Mother&apos;s Name:</span>{" "}
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
          <div className="w-full items-center flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 "
              onClick={handlePrint}
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
