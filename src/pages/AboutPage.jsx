// AboutPage.jsx

import UspSection from "../components/home/UspSection";

import OurStorySection from "../components/about/OurStorySection";
import DoctorSection from "../components/about/DoctorSection";
import StatsSection from "../components/about/StatsSection";
import MeetTheTeamSection from "../components/about/MeetTheTeamSection";

import PageHero from "../components/common/PageHero";

export default function AboutPage() {
  return (
    <div className="page-content bg-surface-light relative z-[10]">

     <PageHero
  badgeText="About Us"
  heading={
    <>
      Where science meets <span className="text-primary-label">genuine</span> care.
    </>
  }
  description="Skinique was built on a simple belief  great skincare shouldn't feel clinical. Meet the team, philosophy, and expertise behind every treatment we offer."
/>

      <OurStorySection />
      <UspSection />
      <DoctorSection />
      <StatsSection />
      <MeetTheTeamSection />

    </div>
  );
}