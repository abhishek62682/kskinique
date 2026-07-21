// TreatmentsPage.jsx
import { useState, useMemo } from "react";

import TreatmentsGrid from "../components/service/TreatmentsGrid";
import { SERVICES_CONFIG } from "../config/servicesConfig";
import PageHero from "../components/common/PageHero";
import ProcessSection from "../components/service/ProcessSection";
import CtaSection from "../components/home/CtaSection";
import BenefitsCards from "../components/service/BenefitsCards";

export default function TreatmentsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // returns the same { skin: [...], hair: [...] } shape, filtered by
  // active category pill and by treatment name search
  const groupedServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    const categoriesToShow =
      activeFilter === "all" ? Object.keys(SERVICES_CONFIG) : [activeFilter];

    return categoriesToShow.reduce((acc, cat) => {
      const items = SERVICES_CONFIG[cat] || [];
      acc[cat] = q ? items.filter((s) => s.title.toLowerCase().includes(q)) : items;
      return acc;
    }, {});
  }, [query, activeFilter]);

  return (
    <main className="w-full">
      <PageHero
  badgeText="Our Services"
  heading="Treatments Designed Around You"
  description="Explore our comprehensive range of dermatological and aesthetic services, tailored to
          enhance your natural beauty and address your unique skin concerns."
/>

      {/* <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} /> */}
      <TreatmentsGrid groupedServices={groupedServices} />
<BenefitsCards />
      <ProcessSection />


       <CtaSection />
    </main>
  );
}