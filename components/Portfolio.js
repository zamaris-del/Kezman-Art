import { projects } from "../data/projects";
export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white border-y border-[#E8E0D3] py-[62px]">
      <div className="max-w-[1180px] mx-auto px-5">
        <p className="tracking-[3px] text-[12px] font-bold text-gold">PORTFOLIO</p>
        <h2 className="font-serif text-[36px] text-navy">Selected Projects</h2>
        <p className="text-muted mb-7">Real work, on real sites. Every project below was completed by the Kezman team.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <article key={p.id} className="bg-white border border-[#E8E0D3] rounded-[18px] overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
              <div className="relative h-[230px]"><span className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase">{p.tag}</span><img src={p.img} alt={p.title} className="w-full h-full object-cover" /></div>
              <div className="p-5">
                <h3 className="font-serif text-[19px] text-navy">{p.title}</h3>
                <div className="text-gold font-bold text-[12px] tracking-wider uppercase my-1">{p.loc}</div>
                <div className="text-[13.5px]"><div className="flex justify-between py-2 border-b border-dashed"><span className="text-muted">Paint</span><b>{p.paint}</b></div><div className="flex justify-between py-2 border-b border-dashed"><span className="text-muted">Colour</span><span>{p.colour}</span></div><div className="flex justify-between py-2"><span className="text-muted">Durability</span><span>{p.years}</span></div></div>
                <p className="text-[14px] text-[#5B6470] mt-2">{p.desc}</p>
                <span className="inline-block mt-3 bg-[#EFF8F0] text-[#147A3A] px-3 py-1.5 rounded-full text-[12px] font-bold">✓ Completed</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  }
