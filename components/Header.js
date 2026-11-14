import { WHATSAPP } from "../data/projects";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E8E0D3]">
      <div className="max-w-[1180px] mx-auto px-5 flex justify-between items-center py-4">
        <div>
          <div className="font-serif text-[26px] font-bold leading-none">KEZMAN <span className="text-gold">PAINTS</span></div>
          <div className="text-[11px] tracking-[3px] font-bold text-gold">EST. NIGERIA • RC: 2489128</div>
        </div>
        <nav className="hidden md:flex gap-7 text-sm font-semibold">
          <a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#videos">Videos</a><a href="#shop">Shop Paint</a>
        </nav>
        <a href={`https://wa.me/${WHATSAPP}`} className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-bold">Get Free Quote →</a>
      </div>
    </header>
  );
    }
