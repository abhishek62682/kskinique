import  { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

const testimonials = [
  {
    quote:
      "Dr. Kajal cleared up acne I'd struggled with for years. She actually listened, explained every option, and never pushed unnecessary treatments.",
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXjJRaPtAHqavR_kvY46i-C5QbUqfi4EubHGTYE_6eHx51ssedG=w72-h72-p-rp-mo-br100',
    name: 'Riya',
    concern: 'Acne Treatment',
  },
  {
    quote:
      'My skin finally feels even-toned after the pigmentation therapy. The clinic is spotless and the staff made me feel comfortable from day one.',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWFU_SKrxF1OVifAN6C5PfuBjwq5PuSfsifeXDbvrDP-fG_ZJiP=w72-h72-p-rp-mo-br100',
    name: 'Karan',
    concern: 'Pigmentation Care',
  },
  {
    quote:
      'The chemical peel consultation was thorough and honest about what to expect. Three sessions in, the results already speak for themselves.',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVhTd50oCMlMDUZkv0UiGH-hIgFYV2ZRJLN5LIHGrgf4wQ0aBF2=w72-h72-p-rp-mo-ba2-br100',
    name: 'Priya',
    concern: 'Chemical Peel',
  },
  {
    quote:
      "They diagnosed my eczema flare-ups correctly on the first visit, after two other clinics couldn't. Genuinely grateful for the care I got here.",
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWl1J7UF2Ungdpix-RnhIaevqCa4tAoIGJqD0mF3HMYR49a1F2E=w72-h72-p-rp-mo-br100',
    name: 'Ananya',
    concern: 'Eczema Management',
  },
]

const TestimonialSection = () => {
 
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  return (
    <section
      id="testimonials"
      className="relative bg-surface pb-16 sm:pb-20 lg:pb-50 px-4 sm:px-6 lg:px-8  z-10 overflow-hidden"
      data-scroll-section=""
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-2/3 min-w-0 overflow-hidden">
          <div className="flex items-start sm:items-end justify-between gap-4 flex-wrap">
            <div>
              <h2
                id="testiominal-heading"
                className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none"
                aria-label="What Our Patients Say"
              >
                What Our <br /> Patients Say
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div
                ref={setPrevEl}
                className="carousel-left w-10 h-10 bg-white text-primary-dark rounded-full flex items-center justify-center cursor-pointer   transition-colors duration-300"
                role="button"
                aria-label="Previous slide"
                tabIndex={0}
              >
                <i className="ri-arrow-left-line text-base font-semibold"></i>
              </div>
              <div
                ref={setNextEl}
                className="carousel-right w-10 h-10 bg-white text-primary-dark rounded-full flex items-center justify-center cursor-pointer  transition-colors duration-300"
                role="button"
                aria-label="Next slide"
                tabIndex={0}
              >
                <i className="ri-arrow-right-line text-base font-semibold"></i>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation, FreeMode]}
            freeMode
            observer
            observeParents
            resizeObserver
            updateOnWindowResize
            navigation={{ prevEl, nextEl }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevEl
                swiper.params.navigation.nextEl = nextEl
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="mySwiper testimonial-swiper !overflow-hidden !items-stretch"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={t.name}
                className="!h-auto"
                role="group"
                aria-label={`${i + 1} / ${testimonials.length}`}
              >
                <div className="bg-white rounded-3xl p-7 flex flex-col justify-between gap-6 h-full min-h-56">
                  <div className="flex flex-col gap-3">
                    <img
                      src="https://framerusercontent.com/images/nBmS1U8s92WIveVNePAFLYYFODo.svg?width=60&height=12"
                      alt="stars"
                      className="w-14"
                    />
                    <p className="text-[#7a685d] text-base leading-relaxed">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-[#7a685d] text-sm font-semibold">
                        {t.name}
                      </h5>
                      <p className="text-[#7a685d] text-xs font-normal">
                        {t.concern}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/3 rounded-[28px] overflow-hidden relative ">
          <img
            src="https://framerusercontent.com/images/ipAbYHifCDoQsFyitpmqxk7yTIQ.jpg?width=600&height=799"
            alt="Dermatologist with patient"
            className="w-full h-full object-cover "
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-2 bg-gradient-to-b from-white/0 to-[#986a3e]/50 backdrop-blur-3xl">
              <h4 className="text-white text-5xl leading-tight font-normal font-primary">
                5.0
              </h4>
              <img
                src="https://framerusercontent.com/images/Acl1ppgvFjpXDaMWy2sV8Mlbvc.svg?width=70&height=13"
                alt="5 stars"
                className="w-16"
              />
              <p className="text-white text-xs font-medium tracking-wide">
                patient rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection