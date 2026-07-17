import { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={`relative w-full z-300 transition-all duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-4 bg-surface/70 backdrop-blur-lg">

          {/* LEFT */}
          <div className="flex items-center flex-1">
            <div className="flex md:hidden items-center gap-2 font-primary text-[20px] text-primary-dark">
              <img
                src="/logo.png"
                alt="Skinique"
                className="w-20"
              />
              {/* <span>Skinique</span> */}
            </div>

            <div className="hidden md:flex gap-6 font-secondary">
              {[["/", "Home"], ["/about", "About"], ["#services", "Services"], ["/contact", "Contact"]].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-text transition-all duration-300 hover:opacity-60"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-2 font-primary text-[22px] text-text whitespace-nowrap pointer-events-none">
            <img
              src="/logo.png"
              alt="Skinique"
              className="w-25"
            />
            {/* <span>Skinique</span> */}
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-3 flex-1">
            <div className="hidden md:block">
              <Button label="Book Appointment" bgColor="#F7ECDF" textColor="#261813" />
            </div>

            {/* mobile: only the hamburger, no crowded button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex md:hidden items-center justify-center size-12 rounded-full bg-primary-05 text-primary-dark text-[24px] shrink-0"
            >
              <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden mx-4 mt-2 rounded-[20px] backdrop-blur-lg bg-surface/90 border border-border overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[400px] py-5" : "max-h-0 py-0"}`}
        >
          <div className="flex flex-col font-secondary px-6 gap-4">
            {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/contact", "Contact"]].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text transition-all duration-300 hover:opacity-60"
              >
                {label}
              </a>
            ))}

            <div className="pt-2">
              <Button label="Book Appointment" bgColor="#261813" textColor="#F7ECDF" />
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}