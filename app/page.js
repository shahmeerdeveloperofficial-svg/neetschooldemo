import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import About from "@/components/About";
import Programmes from "@/components/Programmes";
import CurriculumSkills from "@/components/CurriculumSkills";
import CharacterStudentLife from "@/components/CharacterStudentLife";
import LeadershipSection from "@/components/LeadershipSection";
import AdmissionSteps from "@/components/AdmissionSteps";

const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const VideoSec = dynamic(() => import("../components/VideoSec"));
const Stats2 = dynamic(() => import("../components/Stats2"));

export default function Home() {
  return (
    <main className="bg-white text-dark overflow-x-hidden">
      <HeroHeader
        title={
          <>
            NEET School <br /> System
          </>
        }
        subtitle="Admissions open for Play Group to Matric · Gujranwala"
        tagline="Learn today. Lead tomorrow."
        description="NEET School System nurtures knowledge, character, discipline, creativity and leadership in every student — from their first day of Play Group to their final year of Matric, here in Gujranwala."
      />

      <Marquee
        direction={"right"}
        speed={0.25}
        List={[
          "🌟 Admissions Open for Play Group to Matric in Gujranwala",
          "🎓 Where Learning Becomes Leadership",
          "✨ Knowledge · Character · Discipline · Creativity · Leadership · Excellence",
          "📞 Admissions & Information: 0300-7441617 · 055-3201617",
        ]}
      />

      <Bento />

      <About />

      <Programmes />

      <CurriculumSkills />

      <CharacterStudentLife />

      <LeadershipSection />

      <AdmissionSteps />

      <VideoSec />

      <Stats2 />
    </main>
  );
}

