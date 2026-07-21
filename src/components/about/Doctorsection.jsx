// DoctorSection.jsx

export default function DoctorSection() {
  return (
    <section className="w-full bg-linear-to-br from-primary-dark via-primary-dark to-primary-dark/90 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap-reverse lg:flex-nowrap relative items-end gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start pt-2 lg:pt-0">
            <img
              src="/doctor.png"
              alt="Dr. Kajal Komalan"
              className="h-80 sm:h-100 lg:h-125 w-auto max-w-full object-contain object-bottom"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 pb-4 pt-8 sm:pb-14 sm:pt-10 lg:py-28">
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-primary text-text-light leading-[1.2] text-center lg:text-left">
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