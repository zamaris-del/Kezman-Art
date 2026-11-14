import { WHATSAPP } from "../data/projects";
export function Services() {
  const list = [
    ["🏛️","Exterior Painting","Houses, duplexes, bungalows, estates & fences."],
    ["✨","Luxury Interiors","Offices, apartments, marble & gold walls, mirror walls."],
    ["⛪","Churches, Mosques & Schools","Community & religious buildings with respect."],
    ["🧱","Stamped Floors","Strong, shiny compound floors — black, red & custom."],
    ["🍸","Lounges, Bars & Clubs","Glossy floor coating, mural art & premium finishes."],
    ["🎨","Kezman Emulsion Paint","Our own production. All colours. Buy direct."],
    ["🔧","Wall Preparation","Machine sanding, priming & smoothing."],
    ["🔄","Before & After Repainting","Old buildings restored to look brand new."],
  ];
  return (
    <section id="services" className="py-[62px]"><div className="max-w-[1180px] mx-auto px-5">
      <p className="tracking-[3px] text-[12px] font-bold text-gold">WHAT WE DO</p><h2 className="font-serif text-[36px] text-navy mb-7">Services, Done To A High Standard</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{list.map(([e,t,d]) => (
        <div key={t} className="bg-white border border-[#E8E0D3] rounded-2xl p-6"><span className="text-[28px]">{e}</span><h3 className="font-serif text-[18px] text-navy my-2">{t}</h3><p className="text-[14px] text-muted">{d}</p></div>
      ))}</div>
    </div></section>
  );
}
export function Shop() {
  return (
    <section id="shop" className="pb-[62px]"><div className="max-w-[1180px] mx-auto px-5"><div className="bg-navy text-white rounded-[22px] p-10 grid md:grid-cols-2 gap-8 items-center">
      <div><p className="tracking-[3px] text-[12px] font-bold text-gold">SHOP — KEZMAN PAINT</p><h2 className="font-serif text-[36px] text-white mt-2">Buy Kezman Emulsion Paint, Direct From Us.</h2><p className="text-[#D9D0BF] my-3">Fresh production. All colours. Smooth, bright, long-lasting — 10 years durability.</p><a href={`https://wa.me/${WHATSAPP}?text=Hello Kezman, I want to buy Kezman Emulsion Paint`} className="inline-block bg-gold text-white px-6 py-3.5 rounded-full font-bold text-sm">Order Paint on WhatsApp →</a><p className="text-[13px] mt-3">RC: 2489128 • A Subsidiary of Shokotwe Resources Ltd</p></div>
      <div className="rounded-2xl overflow-hidden h-[260px]"><img src="/images/project27.jpg" className="w-full h-full object-cover" /></div>
    </div></div></section>
  );
}
export function Footer() {
  return (
    <footer className="bg-navy text-[#CBD5E1] pt-10 pb-6"><div className="max-w-[1180px] mx-auto px-5 grid md:grid-cols-3 gap-6">
      <div><div className="font-serif text-[24px] text-white">KEZMAN <span className="text-gold">PAINTS</span></div><p className="text-sm mt-2">Premium painting, interiors, stamped floors & Kezman Emulsion Paint.</p><p className="text-sm">© 2026 Kezman Paints — RC: 2489128</p></div>
      <div><h4 className="text-white mb-2">Services</h4><p className="text-sm">Exterior Painting • Luxury Interiors • Stamped Floors • Churches & Schools</p></div>
      <div><h4 className="text-white mb-2">Contact</h4><a href={`https://wa.me/${WHATSAPP}`} className="text-sm block text-gold font-bold">WhatsApp Us →</a><p className="text-sm mt-2">Lagos • Abeokuta • Nationwide</p></div>
    </div></footer>
  );
    }
