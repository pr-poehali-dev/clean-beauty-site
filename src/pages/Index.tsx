import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Молниеносно быстро",
    desc: "Запускаем проекты в разы быстрее, чем традиционные агентства. Без лишних согласований.",
  },
  {
    icon: "Gem",
    title: "Премиальное качество",
    desc: "Каждый пиксель выверен. Каждая деталь — на своём месте. Эстетика без компромиссов.",
  },
  {
    icon: "Shield",
    title: "Надёжно и безопасно",
    desc: "Современный стек технологий, SSL, оптимизация производительности и SEO из коробки.",
  },
  {
    icon: "Layers",
    title: "Масштабируется легко",
    desc: "Архитектура, которая растёт вместе с вашим бизнесом — от лендинга до платформы.",
  },
  {
    icon: "Palette",
    title: "Уникальный дизайн",
    desc: "Никаких шаблонов и заготовок. Только оригинальный дизайн под вашу задачу.",
  },
  {
    icon: "HeartHandshake",
    title: "Поддержка 24/7",
    desc: "Всегда на связи. Быстрые правки, обновления и ответы на вопросы в любое время.",
  },
];

const stats = [
  { value: "300+", label: "проектов запущено" },
  { value: "48ч", label: "среднее время старта" },
  { value: "98%", label: "клиентов рекомендуют" },
];

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backdropFilter: "blur(20px)", background: "hsl(220 16% 8% / 0.85)", borderBottom: "1px solid hsl(var(--border) / 0.5)" }}>
        <div className="font-display text-2xl font-semibold tracking-wide text-gold-gradient">
          Студия
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Услуги", "Работы", "О нас", "Контакты"].map((item) => (
            <a key={item} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase">
              {item}
            </a>
          ))}
        </div>
        <button className="btn-gold px-5 py-2.5 rounded-sm text-sm font-body font-semibold tracking-wide uppercase hidden md:block">
          <span>Обсудить проект</span>
        </button>
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backdropFilter: "blur(20px)" }}>
          {["Услуги", "Работы", "О нас", "Контакты"].map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light tracking-wide text-foreground hover:text-gold-gradient transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-gold px-8 py-3 rounded-sm text-sm font-body font-semibold tracking-widest uppercase mt-4">
            <span>Обсудить проект</span>
          </button>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden grid-bg noise-overlay">
        {/* Ambient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 animate-float"
          style={{ background: "radial-gradient(circle, hsl(var(--gold-dark)) 0%, transparent 70%)", filter: "blur(80px)", animationDelay: "3s" }} />

        {/* Decorative lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 opacity-30"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold)))" }} />

        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
            style={{ borderColor: "hsl(var(--gold) / 0.3)", background: "hsl(var(--gold) / 0.05)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-gradient">Доступно к запуску</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-light leading-[1.05] mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}>
            <span className="block text-foreground opacity-90">Сайты, которые</span>
            <span className="block shimmer-gold">работают за вас</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="divider-gold animate-line-expand" style={{ width: visible ? "200px" : "0px", transition: "width 1.2s ease 0.6s" }} />
          </div>

          {/* Sub */}
          <p className={`font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Создаём цифровые продукты, которые приносят результат. Лендинги, порталы, приложения — от идеи до запуска за рекордные сроки.
          </p>

          {/* CTA group */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <button className="btn-gold px-10 py-4 rounded-sm text-base font-body font-semibold tracking-widest uppercase w-full sm:w-auto">
              <span className="flex items-center gap-2 justify-center">
                Начать проект
                <Icon name="ArrowRight" size={16} />
              </span>
            </button>
            <button className="px-10 py-4 rounded-sm text-base font-body font-medium tracking-wide uppercase w-full sm:w-auto border transition-all duration-300 hover:border-gold/50 hover:text-foreground text-muted-foreground"
              style={{ borderColor: "hsl(var(--border))" }}>
              Посмотреть работы
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Прокрутить</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: "hsl(var(--border))" }}>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 divide-x divide-border">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="font-display text-5xl md:text-6xl font-light text-gold-gradient mb-2">{s.value}</div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-gradient mb-4">Почему мы</p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-foreground leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Всё, что нужно<br />
              <em className="not-italic text-muted-foreground">для роста</em>
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-glow rounded-sm p-8 bg-card group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "hsl(var(--gold) / 0.1)", border: "1px solid hsl(var(--gold) / 0.2)" }}>
                  <Icon name={f.icon} size={20} className="text-gold" style={{ color: "hsl(var(--gold))" }} />
                </div>
                <h3 className="font-display text-xl font-normal text-foreground mb-3 group-hover:text-gold-gradient transition-all duration-300">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 px-6 relative overflow-hidden"
        style={{ background: "hsl(220 14% 10%)", borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-gradient mb-4">Как мы работаем</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-foreground" style={{ letterSpacing: "-0.02em" }}>
              Просто и прозрачно
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* connector line */}
            <div className="absolute top-8 left-0 right-0 h-px hidden md:block"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3) 20%, hsl(var(--gold) / 0.3) 80%, transparent)" }} />

            {[
              { n: "01", title: "Бриф", desc: "Обсуждаем цели, аудиторию и задачи проекта" },
              { n: "02", title: "Дизайн", desc: "Создаём уникальный визуальный образ за 1–2 дня" },
              { n: "03", title: "Разработка", desc: "Строим на современном стеке, быстро и чисто" },
              { n: "04", title: "Запуск", desc: "Деплой, настройка аналитики и передача проекта" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 pt-2 pb-8 relative group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "hsl(220 16% 8%)", border: "1px solid hsl(var(--gold) / 0.4)" }}>
                  <span className="font-display text-lg text-gold-gradient font-semibold">{step.n}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 px-6 relative overflow-hidden noise-overlay">
        {/* bg glow */}
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 65%)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
            style={{ borderColor: "hsl(var(--gold) / 0.3)", background: "hsl(var(--gold) / 0.05)" }}>
            <Icon name="Sparkles" size={12} style={{ color: "hsl(var(--gold))" }} />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-gradient">Открыты к новым проектам</span>
          </div>

          <h2 className="font-display font-light text-4xl md:text-6xl text-foreground mb-6" style={{ letterSpacing: "-0.02em" }}>
            Готовы обсудить<br />
            <span className="shimmer-gold">ваш проект?</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg mb-12 leading-relaxed">
            Оставьте email — и мы свяжемся с вами в течение часа для короткого бесплатного консультирования.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 w-full sm:w-auto px-5 py-4 rounded-sm font-body text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300"
              style={{ border: "1px solid hsl(var(--border))", focus: undefined }}
              onFocus={(e) => e.currentTarget.style.borderColor = "hsl(var(--gold) / 0.5)"}
              onBlur={(e) => e.currentTarget.style.borderColor = "hsl(var(--border))"}
            />
            <button className="btn-gold px-8 py-4 rounded-sm text-sm font-body font-semibold tracking-widest uppercase w-full sm:w-auto whitespace-nowrap">
              <span>Отправить</span>
            </button>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-4 opacity-60">
            Без спама. Данные под защитой.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 px-8" style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-semibold text-gold-gradient tracking-wide">Студия</div>
          <div className="flex items-center gap-6">
            {["Telegram", "ВКонтакте", "Behance"].map((s) => (
              <a key={s} href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">
                {s}
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground opacity-50 tracking-wide">
            © 2025 — Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
