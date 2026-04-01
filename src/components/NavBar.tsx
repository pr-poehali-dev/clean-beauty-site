import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Услуги", "Работы", "О нас", "Контакты"];

interface NavBarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function NavBar({ menuOpen, setMenuOpen }: NavBarProps) {
  return (
    <>
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
    </>
  );
}

export { NAV_LINKS };
