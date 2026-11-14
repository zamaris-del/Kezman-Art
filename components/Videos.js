import { videos } from "../data/projects";
export default function Videos() {
  return (
    <section id="videos" className="py-[62px]">
      <div className="max-w-[1180px] mx-auto px-5">
        <p className="tracking-[3px] text-[12px] font-bold text-gold">VIDEO GALLERY</p>
        <h2 className="font-serif text-[36px] text-navy">Watch Our Work On Site</h2>
        <p className="text-muted mb-7">Press play. Real Kezman work, no filter.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map(v => (
            <article key={v.id} className="bg-white border border-[#E8E0D3] rounded-[18px] overflow-hidden">
              <video src={v.src} controls poster={v.poster} className="w-full h-[260px] object-cover" />
              <div className="p-5"><h3 className="font-serif text-[18px] text-navy">{v.title}</h3><div className="text-gold font-bold text-[12px] uppercase mt-1">{v.loc}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  }
