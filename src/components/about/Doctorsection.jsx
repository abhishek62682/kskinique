// DoctorSection.jsx

export default function DoctorSection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark/90 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 relative lg:grid-cols-12 items-end gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <img
              src="/doctor.png"
              alt="Dr. Kajal Komalan"
              className="h-[500px] object-bottom"
            />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 py-16 sm:py-16 lg:py-28">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-primary text-text-light leading-[1.2]">
              Meet the Dermatologist
              <br />
              Dr. Kajal Komalan
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Board-certified dermatologist with over 20 years of experience in medical and
                cosmetic dermatology. Specializes in anti-aging treatments, skin cancer
                prevention, and advanced laser procedures. Published researcher and frequent
                speaker at dermatology conferences.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Her philosophy is simple: understand the person, treat the skin condition, and
                enhance natural beauty without compromise. She leads Skinique's clinics across
                Navi Mumbai, equipped with advanced diagnostic and laser technology for
                personalized skin and aesthetic care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}