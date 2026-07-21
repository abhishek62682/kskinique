// MeetTheTeamSection.jsx

export default function MeetTheTeamSection() {
  return (
    <section className="w-full bg-surface relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-16">
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
            Meet the Team
          </h2>
        </div>

        <div className="relative rounded-[32px] overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg"
            alt="Skinique team"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}