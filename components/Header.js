import { WHATSAPP } from "../data/projects";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E8E0D3]">
      <div className="max-w-[1180px] mx-auto px-5 flex justify-between items-center py-2">
        
        {/* LOGO - YOUR REAL LOGO PICTURE */}
        <a href="/" className="flex items-center shrink-0">
          <img 
            src="/kezman-logo.png" 
            alt="Kezman Art Production - 08064746095" 
            className="h-[64px] md:h-[72px] w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex gap-7 text-sm font-semibold text-[#0A1628]">
          <a href="#services" className="hover:text-[#EC008C]">Services</a>
          <a href="#portfolio" className="hover:text-[#7B2CBF]">Portfolio</a>
          <a href="#videos" className="hover:text-[#1E6FE8]">Videos</a>
          <a href="#shop" className="hover:text-[#00B8E6]">Shop Paint</a>
        </nav>

        {/* BUTTON - SAME GRADIENT AS YOUR K LOGO */}
        <a 
          href={`https://wa.me/${WHATSAPP}?text=Hello%20Kezman%2C%20I%20want%20a%20free%20quote`} 
          className="text-white px-4 md:px-5 py-2.5 rounded-full text-[13px] md:text-sm font-bold whitespace-nowrap shadow-md"
          style={{ background: "linear-gradient(90deg, #EC008C, #7B2CBF, #1E6FE8, #00B8E6)" }}
        >
          Get Free Quote →
        </a>
      </div>
    </header>
  );
              }
