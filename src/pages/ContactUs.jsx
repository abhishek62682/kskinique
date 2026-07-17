// Hero
// Contact Information
// Contact Form
// Location Map
// Frequently Asked Questions (FAQ) (Optional)

import PageBanner from "../components/common/PageBanner"
import ContactSection from "../components/contact/ContactSection"
import FaqSection from "../components/home/FaqSection"
import CtaSection from "../components/home/CtaSection"



const ContactUs = () => {
  return (
     <div className="page-content bg-surface-light relative z-[10] ">

     <PageBanner
      title="Contact Us"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
    />


    <div className="spacer ">

      <ContactSection />

      <FaqSection />

      <CtaSection />

    </div>
   </div>
  )
}

export default ContactUs