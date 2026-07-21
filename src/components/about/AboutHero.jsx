// AboutHero.jsx

export default function AboutHero() {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-14 flex flex-col items-center gap-6 text-center">

        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
          <div className="size-1.5 rounded-full bg-primary-label" />
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            About Us
          </span>
        </div>

        <h1 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
          Where science meets <span className="text-primary-label">genuine</span> care.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-text-soft max-w-140 leading-[1.6] font-secondary">
          Skinique was built on a simple belief  great skincare shouldn't feel clinical.
          Meet the team, philosophy, and expertise behind every treatment we offer.
        </p>

      </div>
    </section>
  );
}