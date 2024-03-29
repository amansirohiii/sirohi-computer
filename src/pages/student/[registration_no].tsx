// pages/student/[registration_no].tsx
import React from "react";
import { useRouter } from "next/router";

// Mock student data
const studentData = [{
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
}];

const StudentProfile: React.FC = () => {
  const router = useRouter();
  const { registration_no } = router.query;

  // Find student by registration number
  const student = studentData.find(student => student.registration_no === registration_no);

  if (!student) {
    // Render a loading state or error message if student not found
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h1>Student Profile</h1>
      <div>
        <img src={student.image_url} alt={student.name} />
        <h2>{student.name}</h2>
        <p>Registration Number: {student.registration_no}</p>
        <p>Course Name: {student.course_name}</p>
        <p>Date of Birth: {student.date_of_birth}</p>
        <p>Gender: {student.gender}</p>
        <p>Father's Name: {student.father_name}</p>
        <p>Mother's Name: {student.mother_name}</p>
        <p>Address: {student.address}</p>
        <p>Admission Date: {student.admission_date}</p>
        <p>Course Completion Date: {student.course_completion_date}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
