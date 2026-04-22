"use client";
import { motion } from "framer-motion";
import { organizations } from "@/data/portfolio";
import { Users } from "lucide-react";

export default function Organization() {
  return (
    <section id="organisasi" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Organization</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pengalaman <span className="text-red-500">Organisasi</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {organizations.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/40 flex-shrink-0">
                  <Users size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{o.role}</h3>
                  <p className="text-red-400 font-medium text-sm mb-1">{o.name}</p>
                  <p className="text-zinc-500 text-xs mb-4">{o.place}</p>
                  <ul className="space-y-1">
                    {o.points.map((p, j) => (
                      <li key={j} className="text-zinc-500 text-sm leading-relaxed flex gap-2">
                        <span className="text-red-500 mt-1">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
