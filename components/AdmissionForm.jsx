"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import FormField from "./ui/FormField";
import { motion } from "framer-motion";

const AdmissionForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    referral: "",
    grade: "",
    city: "",
    query: "",
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // After form submission, set submission status to true
    setIsSubmitted(true);

    // Optionally clear form after submission
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      referral: "",
      grade: "",
      city: "",
      query: "",
    });
  };

  return (
    <section className="maxWSec px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex gap-8 sm:gap-12 flex-col">
      <h2 className="h2 text-center">
        Admission <span className="text-main">Form</span>
      </h2>

      {/* Admission form */}
      <form
        onSubmit={handleSubmit}
        className="relative text-dark grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      >
        {/* Success message */}
        {isSubmitted && (
          <motion.div
            className="absolute z-10 inset-[-1px] bg-light p-6 flex items-center justify-center rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-100 text-center text-green-800 p-6 rounded-xl border border-green-300 max-w-md">
              <h4 className="font-semibold text-lg mb-2">Thank You!</h4>
              <p>
                Your admission request has been submitted successfully. Our team
                will contact you soon.
              </p>
            </div>
          </motion.div>
        )}

        {/* Full Name */}
        <FormField
          label={"Full Name"}
          name={"fullName"}
          placeholder={"e.g Abdullah Malik"}
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Mobile Number */}
        <FormField
          label={"Mobile Number"}
          name={"mobile"}
          placeholder={"e.g +92 300 1234567"}
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <FormField
          label={"Email"}
          name={"email"}
          placeholder={"e.g abdullah@example.com"}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Where did you find us? (select) */}
        <FormField
          label={"Where did you find us?"}
          name={"referral"}
          select
          placeholder={"Select an option"}
          options={[
            { label: "Google", value: "google" },
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Friend / Family", value: "friend" },
          ]}
          value={formData.referral}
          onChange={handleChange}
        />

        {/* Grade (select) */}
        <FormField
          label={"Grade"}
          name={"grade"}
          select
          placeholder={"Select a grade"}
          options={[
            { label: "Play Group (Preschool)", value: "play-group" },
            { label: "Nursery (Preschool)", value: "nursery" },
            { label: "Prep (Preschool)", value: "prep" },
            { label: "Class 1 (Primary)", value: "class-1" },
            { label: "Class 2 (Primary)", value: "class-2" },
            { label: "Class 3 (Primary)", value: "class-3" },
            { label: "Class 4 (Primary)", value: "class-4" },
            { label: "Class 5 (Primary)", value: "class-5" },
            { label: "Class 6 (Middle)", value: "class-6" },
            { label: "Class 7 (Middle)", value: "class-7" },
            { label: "Class 8 (Middle)", value: "class-8" },
            { label: "Classes 9–10 (Matric)", value: "matric" },
          ]}
          value={formData.grade}
          onChange={handleChange}
        />

        {/* City (select) */}
        <FormField
          label={"City"}
          name={"city"}
          select
          placeholder={"Select a city"}
          options={[
            { label: "Gujranwala", value: "gujranwala" },
            { label: "Sialkot", value: "sialkot" },
            { label: "Wazirabad", value: "wazirabad" },
            { label: "Daska", value: "daska" },
            { label: "Kamoke", value: "kamoke" },
            { label: "Other", value: "other" },
          ]}
          value={formData.city}
          onChange={handleChange}
        />

        {/* Your query (textarea) */}
        <div className="col-span-full">
          <FormField
            label={"Your Query"}
            name={"query"}
            placeholder={"Write your question or requirements here..."}
            textarea
            value={formData.query}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-full text-center pt-2">
          <Button type="submit">Submit Admission Form</Button>
        </div>
      </form>
    </section>
  );
};

export default AdmissionForm;
