"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pengalaman <span className="text-red-500">Kerja</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 space-y-8">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.75rem] w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/40">
                <Briefcase size={15} />
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-all">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2">
                  <Calendar size={12} />
                  {e.year}
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{e.role}</h3>
                <p className="text-red-400 font-medium text-sm mb-3">{e.company} · {e.location}</p>
                <ul className="space-y-1">
                  {e.points.map((p, j) => (
                    <li key={j} className="text-zinc-500 text-sm leading-relaxed flex gap-2">
                      <span className="text-red-500 mt-1">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
