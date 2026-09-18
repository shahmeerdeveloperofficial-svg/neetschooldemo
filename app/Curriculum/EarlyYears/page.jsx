import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Programmes from "@/components/Programmes";
import CurriculumSkills from "@/components/CurriculumSkills";

const SyllabusAndAffiliations = () => {
  return (
    <main>
      <HeroHeader
        title={"Curriculum & Programmes"}
        subtitle="Play Group to Matric · Gujranwala"
        tagline="Learning for Understanding, Not Just Memorization"
        description="Our curriculum builds strong foundations in core subjects while giving students room to communicate, create, question, collaborate and apply what they learn."
      />

      <div className="py-6">
        <Programmes />
        <CurriculumSkills />
      </div>
    </main>
  );
};

export default SyllabusAndAffiliations;

