import PageBanner from '../components/common/PageBanner'
import CtaSection from '../components/home/CtaSection';

import UspSection from '../components/home/UspSection';
import Button from '../components/ui/Button';




export function DoctorSectionV2() {
  return (
    <div className="w-full bg-gradient-to-br from-brand via-brand to-brand/90 relative overflow-hidden">
     

      
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
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-primary text-surface leading-[1.2]">
              Meet the Dermatologist
              <br />
              Dr. Kajal Komalan
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-surface/85 font-secondary">
                Board-certified dermatologist with over 20 years of experience in medical and cosmetic dermatology. Specializes in anti-aging treatments, skin cancer prevention, and advanced laser procedures. Published researcher and frequent speaker at dermatology conferences.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-surface/85 font-secondary">
                Her philosophy is simple: understand the person, treat the skin condition, and enhance natural beauty without compromise. She leads Skinique's clinics across Navi Mumbai, equipped with advanced diagnostic and laser technology for personalized skin and aesthetic care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




function OurStorySection() {
  

  return (
    <div className="w-full relative">
      <div className="w-full max-w-7xl relative z-[11] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-brand/[0.06] w-fit">
                <div className="size-1.5 rounded-full bg-brand"></div>
                <span className="text-[12px] leading-4 font-medium uppercase text-brand font-secondary tracking-wide">
                  our story
                </span>
              </div>
              <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-primary text-brand leading-[1.05]">
                Built on care,
                <br />
                grounded in science
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-brand/60 font-secondary">
                Skinique began with a simple belief  that great skincare shouldn't feel clinical or impersonal. What started as a single consultation room in Navi Mumbai has grown into a trusted destination for medical and cosmetic dermatology.
              </p>
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-brand/60 font-secondary">
                Every treatment plan here is built around the patient first combining advanced technology with a warm, unhurried approach to care that our patients keep coming back for.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex gap-5 items-start relative ">
            <div className="w-1/2 mt-[100px]">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 ">
              <img
                src="https://thedermahouse.com/api/files/466"
                alt="Skinique clinic detail"
                className="w-full h-full object-cover"
              />
            </div>

           
          </div>

        </div>
      </div>
    </div>
  );
}



function TrustMarquee() {
  const items = [
    "Board Certified",
    "Advanced 3D Diagnostics",
    "Certified Specialists",
    "Global Safety Standards",
    "Advanced Diagnostics",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <div className="relative w-full bg-white py-4  overflow-hidden">
      <div
        className="flex w-max animate-marquee"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {[0, 1].map((dupe) => (
          <div
            key={dupe}
            className="flex items-center gap-6  sm:gap-8 px-3 sm:px-4 shrink-0"
          >
            {marqueeItems.map((item, i) => (
              <div key={`${dupe}-${i}`} className="flex  items-center gap-6 sm:gap-8">
                <span className="text-[11px] sm:text-[12px] font-secondary font-medium text-brand/70 uppercase tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  
                >
                  <path
                    d="M11.299 16.517L11.4268 13.0014L8.45455 14.8871L7.6875 13.5447L10.8196 11.9148L7.6875 10.2848L8.45455 8.94247L11.4268 10.8281L11.299 7.3125H12.8331L12.7053 10.8281L15.6776 8.94247L16.4446 10.2848L13.3125 11.9148L16.4446 13.5447L15.6776 14.8871L12.7053 13.0014L12.8331 16.517H11.299Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}


function OurStorySection2() {
  return (
    <div className="w-full relative py-20 sm:py-28">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative">

        <div className="relative grid grid-cols-1 gap-8">

          <div className="relative  flex items-center justify-center">

            <div className="absolute border-6 border-white left-0 top-0 sm:left-[6%] sm:top-[6%]  size-[200px] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute border-6 border-white right-0 size-50 top-0 sm:right-[6%] sm:top-[6%]  rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique treatment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-0 bottom-0 sm:left-[6%] sm:bottom-[6%] border-6 border-white rounded-[20px] size-50 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/468"
                alt="Skinique doctor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0 sm:right-[6%] sm:bottom-[6%] border-6 border-white  size-50 rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/552"
                alt="Skinique consultation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="size-200 flex items-center rounded-full bg-brand/[0.06] overflow-hidden">

              <div className="flex flex-col items-center text-center overflow-hidden gap-5 w-full ">
                <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-surface-light border border-brand/10 w-fit">
                  <div className="size-1.5 rounded-full bg-brand"></div>
                  <span className="text-[12px] leading-4 font-medium uppercase text-brand font-secondary tracking-wide">
                    our story
                  </span>
                </div>

                <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-primary text-brand leading-[1.15]">
                  Built on care,
                  <br />
                  grounded in science
                </h2>

                <p className="text-[13px] sm:text-[14px] max-w-xl leading-[1.75] text-brand/60 font-secondary">
                  Skinique began with a simple belief that great skincare shouldn't feel clinical or impersonal. Every treatment plan here is built around the patient first, combining advanced technology with a warm, unhurried approach to care.
                </p>

                <TrustMarquee />

                <div className="flex items-center gap-3">
                  <Button label="Book a consultation" bgColor="#09292b" textColor="#f7ecdf" />
                  {/* <Button label="Explore treatments"  /> */}
                 
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// export default OurStorySection;



function MeetTheTeamSection() {
 

  return (
    <div className="w-full  relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-16">
         
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-brand leading-none">
            Meet the Team
          </h2>
         
        </div>

        <div className="relative rounded-[32px] overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg"
            alt="Skinique team"
            className=" w-full object-cover"
          />
        </div>

        
      </div>
    </div>
  );
}









const About = () => {
  return (
    <>
      <div className="page-content bg-surface-light relative z-[10]">

        <PageBanner
          title="About us"
          image="/images/about-banner.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About us" },
          ]}
        />

        <div>

          {/* <OurStorySection /> */}
           <OurStorySection2 />

          <UspSection />
         
         

          <DoctorSectionV2 />

          <section id="stats-achievements" className="py-16 bg-surface   text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="">
                  <h4 className="font-primary text-[42px] sm:text-5xl md:text-6xl font-normal text-brand mb-4 tracking-tight">
                    15+
                  </h4>
                  <p className="font-secondary text-brand/60 font-medium tracking-widest uppercase text-[13px] sm:text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="">
                  <h4 className="font-primary text-[42px] sm:text-5xl md:text-6xl font-normal text-brand mb-4 tracking-tight">
                    10k+
                  </h4>
                  <p className="font-secondary text-brand/60 font-medium tracking-widest uppercase text-[13px] sm:text-sm">
                    Happy Patients
                  </p>
                </div>
                <div className="">
                  <h4 className="font-primary text-[42px] sm:text-5xl md:text-6xl font-normal text-brand mb-4 tracking-tight">
                    50+
                  </h4>
                  <p className="font-secondary text-brand/60 font-medium tracking-widest uppercase text-[13px] sm:text-sm">
                    Advanced Treatments
                  </p>
                </div>
                <div className="">
                  <h4 className="font-primary text-[42px] sm:text-5xl md:text-6xl font-normal text-brand mb-4 tracking-tight">
                    20+
                  </h4>
                  <p className="font-secondary text-brand/60 font-medium tracking-widest uppercase text-[13px] sm:text-sm">
                    Industry Awards
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SkinSolutionsSection />


         <MeetTheTeamSection />

        
        </div>
      </div>
    </>
  )
}

export default About
