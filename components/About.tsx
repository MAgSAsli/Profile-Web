"use client";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Code2, Rocket, GraduationCap } from "lucide-react";

const cards = [
  { icon: <Code2 size={22} />, title: "Clean Code", desc: "Menulis kode yang mudah dibaca dan di-maintain." },
  { icon: <Rocket size={22} />, title: "Fast Learner", desc: "Selalu antusias mempelajari teknologi baru." },
  { icon: <GraduationCap size={22} />, title: "Mahasiswa Aktif", desc: "S1 Teknik Informatika, angkatan 2023." },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tentang <span className="text-red-500">Saya</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">{profile.bio}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center mb-4 transition-all">
                {c.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
