import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Videos from "../components/Videos";
import { Services, Shop, Footer } from "../components/Sections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <section className="py-[62px]"><div className="max-w-[1180px] mx-auto px-5"><p className="tracking-[3px] text-[12px] font-bold text-gold">HOW WE WORK</p><h2 className="font-serif text-[36px] text-navy mb-6">A Process Clients Can Trust</h2><div className="grid md:grid-cols-4 gap-4">{[["01","Inspection & Quote","We visit, measure, advise on colours and give a clear quote."],["02","Preparation","Machine sanding, filling, priming. This is why our work lasts."],["03","Painting & Finishing","Neat coats with Kezman Paint - Matt Emulsion, Satin, Gloss, Grafitex, Marble Effect, Marble Trowel, Stucco, Textured & Floor Paint. Clean lines, no mess."],["04","Handover & Aftercare","We walk through with you, clean up, and stay available after."]].map(([n,t,d]) => (<div key={n} className="bg-white border border-[#E8E0D3] rounded-2xl p-6"><b className="font-serif text-[32px] text-gold">{n}</b><h3 className="font-serif text-[18px] text-navy">{t}</h3><p className="text-sm text-muted">{d}</p></div>))}</div></div></section>
      <Videos />
      <Shop />
      <Footer />
    </main>
  );
    }
