"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Tentang", id: "tentang" },
  { label: "Skills", id: "skills" },
  { label: "Proyek", id: "proyek" },
  { label: "Pendidikan", id: "pendidikan" },
  { label: "Kontak", id: "kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-white font-mono">agil<span className="text-red-500">.dev</span></span>
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-zinc-400 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
