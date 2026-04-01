import Icon from "@/components/ui/icon";
import { SERVICES } from "@/components/ServicesWorksSection";
import { NAV_LINKS } from "@/components/NavBar";

interface FormData {
  name: string;
  phone: string;
  service: string;
  msg: string;
}

interface AboutContactFooterProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  submitted: boolean;
  setSubmitted: (val: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function AboutContactFooter({
  formData,
  setFormData,
  submitted,
  setSubmitted,
  handleSubmit,
}: AboutContactFooterProps) {
  return (
    <>
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
    </>
  );
}
