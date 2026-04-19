"use client";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";

const socials = [
  { href: profile.github, icon: <GitBranch size={18} />, label: "GitHub" },
  { href: profile.linkedin, icon: <Link2 size={18} />, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: <Mail size={18} />, label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0a0a0a] overflow-hidden">
      {/* subtle grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl z-10"
      >
        {/* avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-red-900/40"
        >
          MA
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-red-400 font-mono text-sm tracking-[0.2em] uppercase mb-3"
        >
          {profile.role}
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight tracking-tight">
          {profile.name}
        </h1>

        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          {profile.bio}
        </p>

        <div className="flex justify-center gap-3 mb-10">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all text-sm font-medium"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>

        <a
          href="#kontak"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
        >
          Hubungi Saya
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 text-zinc-600"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
