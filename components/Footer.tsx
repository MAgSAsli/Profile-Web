export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/[0.06] bg-[#0a0a0a]">
      <p className="text-zinc-600 text-sm font-mono">
        © {new Date().getFullYear()} <span className="text-zinc-400">Moch. Agil Sugiarto</span> — Built with Next.js
      </p>
    </footer>
  );
}
