"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

import { courseMenuItems } from "@/utils/constants";
export default function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    twitterpassword: "",
    selectedCourse: "", // Added selectedCourse field
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    twitterpassword: "",
    selectedCourse: "", // Added selectedCourse field
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Client-side validation logic
    const newErrors = {};

    let isValid = true;

    // First name validation
    if (!formData.firstname) {
      newErrors.firstname = "Please enter your first name";
      isValid = false;
    }

    // Last name validation
    if (!formData.lastname) {
      newErrors.lastname = "Please enter your last name";
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Please enter your email address";
      isValid = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Mobile validation
    if (!formData.mobile) {
      newErrors.mobile = "Please enter your mobile number";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
      isValid = false;
    }

    // Twitter password validation
    if (!formData.twitterpassword) {
      newErrors.twitterpassword = "Please enter your Twitter password";
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted successfully");
      // You can perform further actions like API calls here
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e, fieldName) => {
    const value = e.target.value;

    // If the field is mobile number, ensure only numeric characters are allowed
    const numericValue = fieldName === "mobile" ? value.replace(/\D/g, '') : value;

    // Update the form data with the modified value
    setFormData({ ...formData, [fieldName]: numericValue });

    // Clear the error message if the user starts typing again
    if (errors[fieldName]) {
      setErrors({ ...errors, [fieldName]: "" });
    }
  };



  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-center font-bold text-3xl text-neutral-800 dark:text-yellow-600">
Register Now!      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {/* Fill in your details to register for the course */}
      </p>

      <form className="my-8" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Aman"
              type="text"
              value={formData.firstname}
              onChange={(e) => handleChange(e, "firstname")}
            />
            {errors.firstname && (
              <span className="text-red-500 text-sm">{errors.firstname}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Sirohi"
              type="text"
              value={formData.lastname}
              onChange={(e) => handleChange(e, "lastname")}
            />
            {errors.lastname && (
              <span className="text-red-500 text-sm">{errors.lastname}</span>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="hello@sirohi.com"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
  <Label htmlFor="text">Mobile</Label>
  <Input
    id="number"
    placeholder="1234567890"
    type="text"
    inputMode="numeric" // Set inputMode to "numeric" to enforce numeric input
    pattern="[0-9]*" // Use pattern attribute to specify a regex pattern for numeric input
    value={formData.mobile}
    onChange={(e) => handleChange(e, "mobile")}
  />
  {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
</LabelInputContainer>


        <LabelInputContainer className="mb-8">
          <Label htmlFor="course">Select a Course</Label>
          <select
            id="course"
            className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text            -black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400"
            value={formData.selectedCourse}
            onChange={(e) => handleChange(e, "selectedCourse")}
          >
            <option value="">Choose a course...</option>
            {courseMenuItems.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
          {errors.selectedCourse && (
            <span className="text-red-500 text-sm">
              {errors.selectedCourse}
            </span>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1 px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Register Now &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
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

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

