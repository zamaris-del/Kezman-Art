import { WHATSAPP } from "../data/projects";
export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(90deg, rgba(15,30,46,.92), rgba(15,30,46,.65)), url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-[1180px] mx-auto px-5 py-[78px]">
        <p className="tracking-[3px] text-[12px] font-bold text-gold">PREMIUM PAINTING • INTERIORS • STAMPED FLOORS</p>
        <h1 className="font-serif text-[42px] md:text-[52px] leading-[1.1] max-w-[700px] my-4 text-white">We Make Buildings Look <span className="text-gold">Expensive, Clean & Timeless.</span></h1>
        <p className="max-w-[620px] text-[#E8DDC9] text-[17px]">From luxury duplexes to churches, schools, estates and lounges — Kezman delivers neat, durable and beautiful finishes. We also manufacture our own Kezman Emulsion Paint.</p>
        <div className="flex gap-3 flex-wrap mt-7">
          <a href="#portfolio" className="bg-gold text-white px-6 py-3.5 rounded-full font-bold text-sm">View Our Work</a>
          <a href={`https://wa.me/${WHATSAPP}`} className="bg-white text-navy px-6 py-3.5 rounded-full font-bold text-sm">Book Inspection</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E0D3] border rounded-2xl overflow-hidden mt-10">
          {[["27+","Projects Completed"],["18","Site Videos"],["10-20 Yrs","Paint Durability"],["100%","Client Satisfaction"]].map(([a,b]) => (
            <div key={b} className="bg-white text-center py-5"><b className="font-serif text-[28px] text-navy block">{a}</b><span className="text-[13px] text-muted">{b}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
  }
