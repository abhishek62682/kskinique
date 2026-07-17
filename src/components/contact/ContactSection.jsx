import { useState } from "react";
import Button from "../ui/Button";

const contactItems = [
  {
    icon: "ri-map-pin-2-line",
    title: "Clinic Address",
    content:
      "Tower, A-216, B Wing, 217, 218, opposite Nimantran Hotel, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614",
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: "(+91) 7777-00-5606",
  },
  {
    icon: "ri-mail-line",
    title: "Email Address",
    content: "skinscienceclinics@gmail.com",
  },
];

const socialLinks = [
  { icon: "ri-instagram-line", href: "#" },
  { icon: "ri-facebook-fill", href: "#" },
  { icon: "ri-whatsapp-line", href: "#" },
  { icon: "ri-linkedin-fill", href: "#" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden">

          {/* left info panel */}
          <div className="lg:col-span-5 bg-brand px-8 sm:px-10 py-12 sm:py-14 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-surface/10 w-fit">
                  <div className="size-1.5 rounded-full bg-surface"></div>
                  <span className="text-[12px] leading-4 font-medium uppercase text-surface font-secondary tracking-wide">
                    get in touch
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[38px] font-primary text-surface leading-none">
                  Contact us
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                {contactItems.map((item, i) => (
                  <div key={item.title} className="relative flex gap-5">
                    {i < contactItems.length - 1 && (
                      <span className="absolute left-[21px] top-[48px] h-[calc(100%+32px-48px)] w-px border-l border-dashed border-surface/25" />
                    )}
                    <div className="relative z-10 size-[44px] rounded-full border border-surface/20 bg-surface/10 flex items-center justify-center shrink-0">
                      <i className={`${item.icon} text-[20px] text-surface`}></i>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[16px] font-medium text-surface font-secondary">
                        {item.title}
                      </h3>
                      <p className="max-w-sm text-[14px] leading-[1.7] text-surface/70 font-secondary">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="size-[40px] rounded-full border border-surface/20 bg-surface/10 flex items-center justify-center hover:bg-surface/20 transition"
                >
                  <i className={`${social.icon} text-[18px] text-surface`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* right form panel */}
          <div className="lg:col-span-7 bg-surface px-8 sm:px-10 py-12 sm:py-14 flex flex-col gap-6">
            <h2 className="text-[28px] sm:text-[32px] font-primary text-brand leading-none">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-brand/[0.06] border border-brand/10 px-4 py-3.5 text-[14px] font-secondary text-brand placeholder:text-brand/50 outline-none focus:border-brand/30 transition"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-brand/[0.06] border border-brand/10 px-4 py-3.5 text-[14px] font-secondary text-brand placeholder:text-brand/50 outline-none focus:border-brand/30 transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-[14px] bg-brand/[0.06] border border-brand/10 px-4 py-3.5 text-[14px] font-secondary text-brand placeholder:text-brand/50 outline-none focus:border-brand/30 transition"
              />

              <textarea
                name="message"
                placeholder="Message.."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-[14px] bg-brand/[0.06] border border-brand/10 px-4 py-3.5 text-[14px] font-secondary text-brand placeholder:text-brand/50 outline-none focus:border-brand/30 transition"
              />

              <label className="flex w-fit items-center gap-3 rounded-[14px] border border-brand/10 bg-brand/[0.06] px-4 py-3.5 text-[14px] font-secondary text-brand">
                <input type="checkbox" className="h-4 w-4 accent-brand" />
                I'm not a robot
              </label>

              <div className="pt-2">
                <Button
                  type="submit"
                  label="Send Your Message"
                  bgColor="#09292b"
                  textColor="#f7ecdf"
                />
              </div>
            </form>
          </div>

        </div>

        {/* full-width google map, grayscale style */}
<div className="mt-8 rounded-[32px] overflow-hidden border border-brand/10">
  <iframe
    src="https://www.google.com/maps?cid=17611080526173218198&output=embed"
    className="w-full h-[420px] sm:h-[480px] "
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Skinique - Dr. Kajal Komalan location"
  ></iframe>
</div>

      </div>
    </div>
  );
}