"use client";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, GitBranch, Link2 } from "lucide-react";

const contacts = [
  { icon: <Mail size={20} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <GitBranch size={20} />, label: "GitHub", value: "MAgSAsli", href: profile.github },
  { icon: <Link2 size={20} />, label: "LinkedIn", value: "mochamad-agil-sugiarto", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="kontak" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Hubungi <span className="text-red-500">Saya</span>
          </h2>
          <p className="text-zinc-500">Terbuka untuk kolaborasi, diskusi, atau sekadar ngobrol!</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center transition-all">
                {c.icon}
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-zinc-300 font-medium text-sm">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
