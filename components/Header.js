import { WHATSAPP } from "../data/projects";

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 shadow-md"
      style={{ background: "linear-gradient(90deg, #EC008C, #7B2CBF, #1E6FE8, #00B8E6)" }}
    >
      {/* TOP SMALL BAR */}
      <div className="text-center text-[11px] md:text-xs font-semibold text-white/90 py-1.5 px-3">
        ✦ A Subsidiary of Shokotwe Resources Ltd • RC: 2489128
      </div>

      <div className="max-w-[1180px] mx-auto px-4 md:px-5 flex justify-between items-center pb-3 pt-1 gap-3">
        
        {/* LOGO - WHITE BOX SO YOUR LOGO GO SHOW WELL */}
        <a href="/" className="flex items-center shrink-0 bg-white rounded-xl px-2 py-1 shadow-md">
          <img 
            src="/kezman-logo.png" 
            alt="Kezman Art Production - 08064746095" 
            className="h-[56px] md:h-[64px] w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex gap-7 text-sm font-bold text-white">
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#portfolio" className="hover:opacity-70">Portfolio</a>
          <a href="#videos" className="hover:opacity-70">Videos</a>
          <a href="#shop" className="hover:opacity-70">Shop Paint</a>
        </nav>

        {/* BUTTON - NOW WHITE, SO E GO POP FOR COLOURED HEADER */}
        <a 
          href={`https://wa.me/${WHATSAPP}?text=Hello%20Kezman%2C%20I%20want%20a%20free%20quote`} 
          className="bg-white px-4 md:px-5 py-2.5 rounded-full text-[13px] md:text-sm font-bold whitespace-nowrap shadow-md"
          style={{ color: "#7B2CBF" }}
        >
          Get Free Quote →
        </a>
      </div>
    </header>
  );
}
