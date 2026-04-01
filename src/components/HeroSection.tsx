import { useRef } from "react";
import Icon from "@/components/ui/icon";

const STATS = [
  { value: "2 000+", label: "довольных клиентов" },
  { value: "7 лет", label: "в индустрии красоты" },
  { value: "98%", label: "возвращаются снова" },
];

interface HeroSectionProps {
  visible: boolean;
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({ visible, heroRef }: HeroSectionProps) {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(340 40% 97%) 0%, hsl(30 35% 96%) 40%, hsl(150 20% 96%) 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />

        {/* Blobs */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] petal-blob opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--rose-light)) 0%, hsl(var(--blush)) 50%, transparent 75%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-16 w-[420px] h-[420px] petal-blob opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--sage-light)) 0%, transparent 70%)", filter: "blur(60px)", animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(var(--rose-pale)) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* Content */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Label pill */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full"
            style={{ background: "hsl(var(--rose-pale))", border: "1px solid hsl(var(--rose-light) / 0.5)" }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsl(var(--rose))" }} />
            <span className="section-label">Студия натуральной красоты · Москва</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-light leading-[1.08] mb-7"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)", letterSpacing: "-0.025em" }}>
            <span className="block text-foreground">Раскройте вашу</span>
            <span className="block shimmer-rose">естественную красоту</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center mb-7">
            <div className="divider-rose animate-[line-expand_1.2s_ease_0.6s_both]" style={{ width: "160px" }} />
          </div>

          {/* Sub */}
          <p className={`font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Уходовые процедуры, макияж и SPA на основе чистых ингредиентов — для тех, кто ценит себя.
          </p>

          {/* CTA */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <button className="btn-rose px-10 py-4 rounded-full text-base font-body font-semibold tracking-wide w-full sm:w-auto shadow-lg shadow-[hsl(var(--rose)/0.25)]">
              <span className="flex items-center gap-2 justify-center">
                Записаться на процедуру
                <Icon name="ArrowRight" size={16} />
              </span>
            </button>
            <button className="btn-outline-rose px-10 py-4 rounded-full text-base font-body font-medium tracking-wide w-full sm:w-auto">
              Наши услуги
            </button>
          </div>

          {/* Trust badges */}
          <div className={`mt-14 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { icon: "Leaf", text: "Натуральный состав" },
              { icon: "ShieldCheck", text: "Безопасные методы" },
              { icon: "Clock", text: "Удобное время" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name={b.icon as "Leaf"} size={15} className="text-[hsl(var(--rose))]" />
                <span className="font-body">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Листайте</span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: "hsl(var(--border))" }}>
            <div className="absolute top-0 left-0 w-full h-1/2 animate-bounce"
              style={{ background: "hsl(var(--rose))" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="py-14 px-6" style={{ borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))", background: "hsl(0 0% 100%)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 divide-x divide-border">
          {STATS.map((s, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-display text-4xl md:text-5xl font-light text-rose-gradient mb-1">{s.value}</div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
