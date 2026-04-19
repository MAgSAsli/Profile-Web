"use client";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="pendidikan" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Riwayat <span className="text-red-500">Pendidikan</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 space-y-8">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.75rem] w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/40">
                <GraduationCap size={15} />
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-all">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2">
                  <Calendar size={12} />
                  {e.year}
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{e.school}</h3>
                <p className="text-red-400 font-medium text-sm mb-3">{e.degree}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
