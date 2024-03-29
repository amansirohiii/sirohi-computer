"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

const studentData = [
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

export default function Verify() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Find student with provided registration number
    const student = studentData.find(
      (student) => student.registration_no === registrationNumber
    );
    if (student) {
      // Redirect to student profile page with enrollment number
      router.push(`/student/${student.registration_no}`);
    } else {
      console.error("Student not found");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationNumber(e.target.value);
  };

  return (
    <div className="dark flex items-center min-h-screen">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="text-center font-bold text-3xl text-neutral-800 dark:text-yellow-600">
          Verify Student
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {/* Login to aceternity if you can because we don&apos;t have a login flow
        yet */}
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="registration-number">Registration Number</Label>
            <Input
              id="registration-number"
              placeholder="Enter your Registration Number"
              type="text"
              value={registrationNumber}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
