"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { GitBranch, ExternalLink, FolderOpen } from "lucide-react";

export default function Projects() {
  return (
    <section id="proyek" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            My <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-zinc-500">Kumpulan proyek yang pernah saya kerjakan.</p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-4 text-zinc-600">
              <FolderOpen size={28} />
            </div>
            <h3 className="text-lg font-bold text-zinc-400 mb-2">Belum ada proyek</h3>
            <p className="text-zinc-600 text-sm max-w-sm">Proyek akan segera hadir. Stay tuned!</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
              >
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-red-500/10 text-red-400 rounded-lg font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-red-400 transition-colors">
                      <GitBranch size={17} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-red-400 transition-colors">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
