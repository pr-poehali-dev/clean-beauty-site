import Icon from "@/components/ui/icon";

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

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={12} className="fill-[hsl(var(--rose))] text-[hsl(var(--rose))]" />
      ))}
    </div>
  );
}

interface ServicesWorksSectionProps {
  activeWork: number | null;
  setActiveWork: (index: number | null) => void;
}

export default function ServicesWorksSection({ activeWork, setActiveWork }: ServicesWorksSectionProps) {
  return (
    <>
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
    </>
  );
}

export { SERVICES };
