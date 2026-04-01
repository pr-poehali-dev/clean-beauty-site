import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ─── DATA ─── */

const NAV_LINKS = ["Услуги", "Работы", "О нас", "Контакты"];

const SERVICES = [
  {
    icon: "Sparkles",
    title: "Уход за лицом",
    desc: "Глубокое очищение, увлажнение и питание кожи с использованием только натуральных компонентов.",
    badge: "Хит",
    price: "от 3 500 ₽",
  },
  {
    icon: "Flower2",
    title: "Массаж тела",
    desc: "Расслабляющий и лимфодренажный массаж — возвращает лёгкость и снимает напряжение.",
    badge: null,
    price: "от 4 200 ₽",
  },
  {
    icon: "Brush",
    title: "Макияж",
    desc: "Дневной, вечерний и свадебный — подчёркиваем вашу естественную красоту без лишних слоёв.",
    badge: null,
    price: "от 2 800 ₽",
  },
  {
    icon: "Scissors",
    title: "Брови и ресницы",
    desc: "Коррекция, покраска, ламинирование и наращивание. Взгляд, который говорит сам за себя.",
    badge: "Новинка",
    price: "от 1 200 ₽",
  },
  {
    icon: "Droplets",
    title: "SPA-программы",
    desc: "Комплексный уход с обёртываниями, пилингами и ароматерапией — полное погружение в релаксацию.",
    badge: null,
    price: "от 6 000 ₽",
  },
  {
    icon: "Heart",
    title: "Консультация",
    desc: "Персональный разбор состояния кожи и составление индивидуального плана ухода.",
    badge: "Бесплатно",
    price: "0 ₽",
  },
];

const WORKS = [
  { label: "До / После", tag: "Уход за лицом", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop" },
  { label: "Натуральный макияж", tag: "Макияж", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop" },
  { label: "Оформление бровей", tag: "Брови", img: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?w=600&q=80&auto=format&fit=crop" },
  { label: "SPA-день", tag: "SPA", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop" },
  { label: "Вечерний образ", tag: "Макияж", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80&auto=format&fit=crop" },
  { label: "Уход за кожей", tag: "Уход", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80&auto=format&fit=crop" },
];

const REVIEWS = [
  {
    name: "Алина М.",
    text: "Впервые за долгое время кожа чувствует себя действительно живой. Мастера — профессионалы высшего класса, а атмосфера невероятно расслабляющая.",
    rate: 5,
    service: "Уход за лицом",
    avatar: "AM",
  },
  {
    name: "Дарья К.",
    text: "Пришла на макияж к свадьбе и осталась в полном восторге. Всё выглядело натурально и продержалось весь день. Рекомендую всем!",
    rate: 5,
    service: "Свадебный макияж",
    avatar: "ДК",
  },
  {
    name: "Ирина В.",
    text: "Брови мечты! Коррекция и окрашивание — результат превзошёл все ожидания. Теперь хожу только сюда.",
    rate: 5,
    service: "Брови и ресницы",
    avatar: "ИВ",
  },
];

const STATS = [
  { value: "2 000+", label: "довольных клиентов" },
  { value: "7 лет", label: "в индустрии красоты" },
  { value: "98%", label: "возвращаются снова" },
];

const TEAM = [
  {
    name: "Анастасия",
    role: "Косметолог-эстетист",
    spec: "Уход за лицом · SPA",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Мария",
    role: "Визажист",
    spec: "Дневной · Вечерний · Свадебный",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Екатерина",
    role: "Мастер бровей и ресниц",
    spec: "Коррекция · Ламинирование",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80&auto=format&fit=crop&crop=face",
  },
];

/* ─── HELPERS ─── */

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={12} className="fill-[hsl(var(--rose))] text-[hsl(var(--rose))]" />
      ))}
    </div>
  );
}

/* ─── PAGE ─── */

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════ NAV ═══════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{
          backdropFilter: "blur(18px)",
          background: "hsl(30 20% 98% / 0.9)",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full petal-blob flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(var(--rose)), hsl(var(--rose-light)))" }}>
            <Icon name="Flower2" size={15} className="text-white" />
          </div>
          <span className="font-display text-xl font-semibold text-rose-gradient tracking-wide">
            Clean Beauty
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-rose hidden md:block px-5 py-2.5 rounded-full text-sm font-body font-semibold tracking-wide">
          <span>Записаться</span>
        </button>

        {/* Burger */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backdropFilter: "blur(24px)", background: "hsl(30 20% 98% / 0.97)" }}>
          {NAV_LINKS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light text-foreground hover:text-rose-gradient transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-rose px-10 py-3.5 rounded-full text-sm font-body font-semibold tracking-wide mt-2">
            <span>Записаться</span>
          </button>
        </div>
      )}

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

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="услуги" className="py-28 px-6 relative"
        style={{ background: "linear-gradient(180deg, hsl(30 25% 97%) 0%, hsl(340 30% 97%) 100%)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">Что мы предлагаем</p>
            <h2 className="font-display font-light text-foreground mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Наши <em className="not-italic text-rose-gradient">услуги</em>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Каждая процедура — это ритуал заботы о себе. Только проверенные методики и чистые ингредиенты.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-soft bg-white rounded-2xl p-7 flex flex-col gap-4 cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(var(--rose-pale))" }}>
                    <Icon name={s.icon as "Sparkles"} size={20} className="text-[hsl(var(--rose))]" />
                  </div>
                  {s.badge && <span className="tag-rose">{s.badge}</span>}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid hsl(var(--border))" }}>
                  <span className="font-display text-base font-semibold text-rose-gradient">{s.price}</span>
                  <button className="flex items-center gap-1.5 text-xs font-body text-[hsl(var(--rose))] hover:gap-2.5 transition-all">
                    Узнать больше <Icon name="ArrowRight" size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <button className="btn-rose px-10 py-4 rounded-full text-sm font-body font-semibold tracking-wide shadow-lg shadow-[hsl(var(--rose)/0.2)]">
              <span>Записаться на процедуру</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WORKS ═══════════════════ */}
      <section id="работы" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">Примеры работ</p>
            <h2 className="font-display font-light text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Говорят <em className="not-italic text-rose-gradient">результаты</em>
            </h2>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKS.map((w, i) => (
              <div key={i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/5" }}
                onMouseEnter={() => setActiveWork(i)}
                onMouseLeave={() => setActiveWork(null)}>
                <img src={w.img} alt={w.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, hsl(20 15% 8% / 0.7) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="tag-rose mb-2 inline-block"
                    style={{ background: "hsl(var(--rose-pale) / 0.9)", backdropFilter: "blur(8px)" }}>
                    {w.tag}
                  </span>
                  <p className="font-display text-lg font-light text-white">{w.label}</p>
                </div>
                {/* Hover overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeWork === i ? "opacity-100" : "opacity-0"}`}
                  style={{ background: "hsl(var(--rose) / 0.12)", backdropFilter: "blur(1px)" }}>
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Icon name="Expand" size={20} className="text-[hsl(var(--rose))]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="py-28 px-6"
        style={{ background: "linear-gradient(160deg, hsl(340 30% 97%) 0%, hsl(150 20% 97%) 100%)" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">Наша команда</p>
            <h2 className="font-display font-light text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Мастера, которым <em className="not-italic text-rose-gradient">доверяют</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                  style={{ boxShadow: "0 0 0 3px hsl(var(--rose-light) / 0.4), 0 16px 48px -10px hsl(var(--rose) / 0.2)" }}>
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{m.name}</h3>
                <p className="font-body text-sm font-medium text-[hsl(var(--rose))] mb-1">{m.role}</p>
                <p className="font-body text-xs text-muted-foreground">{m.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ REVIEWS ═══════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-3">Отзывы клиентов</p>
            <h2 className="font-display font-light text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
              Они уже <em className="not-italic text-rose-gradient">влюблены</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-soft bg-[hsl(30_20%_98%)] rounded-2xl p-7 flex flex-col gap-4">
                <StarRow count={r.rate} />
                <p className="font-body text-sm text-foreground/80 leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid hsl(var(--border))" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, hsl(var(--rose)), hsl(var(--rose-light)))" }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{r.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="о нас" className="py-28 px-6"
        style={{ background: "linear-gradient(160deg, hsl(30 35% 96%) 0%, hsl(340 30% 96%) 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <div className="relative h-[480px]">
            <div className="absolute top-0 left-0 w-2/3 h-3/4 rounded-2xl overflow-hidden shadow-xl shadow-[hsl(var(--rose)/0.1)]">
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80&auto=format&fit=crop"
                alt="Студия" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl shadow-[hsl(var(--rose)/0.15)]"
              style={{ outline: "4px solid hsl(var(--background))" }}>
              <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&q=80&auto=format&fit=crop"
                alt="Уход" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute top-8 right-4 rounded-2xl px-5 py-4 shadow-lg"
              style={{ background: "hsl(0 0% 100% / 0.9)", backdropFilter: "blur(10px)", border: "1px solid hsl(var(--border))" }}>
              <div className="font-display text-3xl font-semibold text-rose-gradient">7+</div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-0.5">лет опыта</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-4">О студии</p>
            <h2 className="font-display font-light text-foreground mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Красота без компромиссов — это наш <em className="not-italic text-rose-gradient">принцип</em>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Clean Beauty — это пространство, где каждая процедура создана с заботой о вас и природе. Мы работаем только с сертифицированными органическими составами и применяем передовые методики, проверенные годами практики.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Наша миссия — помочь каждой женщине раскрыть её истинную красоту, не прибегая к агрессивным химическим воздействиям. Мы верим, что настоящая красота — это здоровье, сияние и уверенность в себе.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "Leaf", label: "Eco-friendly формулы" },
                { icon: "Award", label: "Сертифицированные мастера" },
                { icon: "Smile", label: "Индивидуальный подход" },
                { icon: "MapPin", label: "В центре Москвы" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--rose-pale))" }}>
                    <Icon name={f.icon as "Leaf"} size={15} className="text-[hsl(var(--rose))]" />
                  </div>
                  <span className="font-body text-sm text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="контакты" className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left info */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Запись</p>
              <h2 className="font-display font-light text-foreground mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Запишитесь <em className="not-italic text-rose-gradient">сегодня</em>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Оставьте заявку — мы свяжемся с вами в течение 30 минут и подберём удобное время.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "hello@cleanbeauty.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Пречистенка, 15" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Вс 09:00 – 21:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "hsl(var(--rose-pale))" }}>
                      <Icon name={c.icon as "Phone"} size={15} className="text-[hsl(var(--rose))]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{c.label}</p>
                      <p className="font-body text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6 rounded-2xl p-10"
                  style={{ border: "1.5px solid hsl(var(--rose-light) / 0.5)", background: "hsl(var(--rose-pale) / 0.4)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "hsl(var(--rose-pale))" }}>
                    <Icon name="CheckCircle2" size={32} className="text-[hsl(var(--rose))]" />
                  </div>
                  <h3 className="font-display text-2xl font-light text-foreground">Спасибо за заявку!</h3>
                  <p className="font-body text-muted-foreground">Мы получили ваше сообщение и свяжемся с вами в течение 30 минут.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="btn-outline-rose px-7 py-3 rounded-full text-sm font-body font-medium">
                    Отправить ещё раз
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}
                  className="rounded-2xl p-8 flex flex-col gap-5"
                  style={{ border: "1px solid hsl(var(--border))", background: "hsl(30 20% 98%)" }}>
                  <h3 className="font-display text-xl font-semibold text-foreground">Оставить заявку</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider">Имя</label>
                      <input required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ваше имя"
                        className="rounded-xl px-4 py-3 font-body text-sm bg-white outline-none transition-all"
                        style={{ border: "1px solid hsl(var(--border))" }}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--rose-light))")}
                        onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-xs text-muted-foreground uppercase tracking-wider">Телефон</label>
                      <input required value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="rounded-xl px-4 py-3 font-body text-sm bg-white outline-none transition-all"
                        style={{ border: "1px solid hsl(var(--border))" }}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--rose-light))")}
                        onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider">Услуга</label>
                    <select value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="rounded-xl px-4 py-3 font-body text-sm bg-white outline-none transition-all"
                      style={{ border: "1px solid hsl(var(--border))" }}>
                      <option value="">Выберите услугу</option>
                      {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider">Пожелания</label>
                    <textarea value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      placeholder="Расскажите о своей задаче..."
                      rows={3}
                      className="rounded-xl px-4 py-3 font-body text-sm bg-white outline-none transition-all resize-none"
                      style={{ border: "1px solid hsl(var(--border))" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--rose-light))")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")} />
                  </div>

                  <button type="submit"
                    className="btn-rose px-8 py-4 rounded-xl text-sm font-body font-semibold tracking-wide shadow-md shadow-[hsl(var(--rose)/0.2)]">
                    <span className="flex items-center gap-2 justify-center">
                      Отправить заявку
                      <Icon name="Send" size={15} />
                    </span>
                  </button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="px-6 py-10"
        style={{ borderTop: "1px solid hsl(var(--border))", background: "hsl(30 20% 97%)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full petal-blob flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(var(--rose)), hsl(var(--rose-light)))" }}>
              <Icon name="Flower2" size={13} className="text-white" />
            </div>
            <span className="font-display text-lg font-semibold text-rose-gradient">Clean Beauty</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: "Instagram", href: "#" },
              { icon: "MessageCircle", href: "#" },
              { icon: "Phone", href: "#" },
            ].map((s) => (
              <a key={s.icon} href={s.href}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-[hsl(var(--rose))] transition-colors"
                style={{ border: "1px solid hsl(var(--border))" }}>
                <Icon name={s.icon as "Phone"} size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <p className="font-body text-xs text-muted-foreground">© 2025 Clean Beauty. Все права защищены.</p>
          <p className="font-body text-xs text-muted-foreground">Политика конфиденциальности · Оферта</p>
        </div>
      </footer>
    </div>
  );
}
