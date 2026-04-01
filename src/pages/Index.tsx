import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesWorksSection from "@/components/ServicesWorksSection";
import AboutContactFooter from "@/components/AboutContactFooter";

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
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection visible={visible} heroRef={heroRef} />
      <ServicesWorksSection activeWork={activeWork} setActiveWork={setActiveWork} />
      <AboutContactFooter
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        setSubmitted={setSubmitted}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
