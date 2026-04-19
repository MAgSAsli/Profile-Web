"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Tech <span className="text-red-500">Stack</span>
          </h2>
          <p className="text-zinc-500">Teknologi yang saya kuasai dan sedang dipelajari.</p>
        </motion.div>

        <div className="space-y-6 mb-14">
          {skills.current.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-zinc-300 font-medium text-sm">{s.name}</span>
                <span className="text-red-400 font-mono text-sm">{s.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm mb-4 font-mono tracking-wider uppercase">Currently Learning</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.learning.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-lg border border-red-500/30 text-red-400 text-sm font-medium bg-red-500/5"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
