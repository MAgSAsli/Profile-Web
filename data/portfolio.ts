export const profile = {
  name: "Moch. Agil Sugiarto",
  role: "Full Stack Developer",
  bio: "Mahasiswa Teknik Informatika yang passionate di bidang web development. Suka membangun aplikasi yang clean, scalable, dan user-friendly.",
  email: "mochamadagils@gmail.com",
  github: "https://github.com/MAgSAsli",
  linkedin: "https://www.linkedin.com/in/mochamad-agil-sugiarto",
};

export const skills = {
  current: [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 65 },
    { name: "MySQL", level: 75 },
  ],
  learning: ["Next.js", "TypeScript", "Nest.js", "PHP", "Laravel"],
};

export const education = [
  {
    school: "Universitas Maarif Hasyim Latief Sidoarjo",
    degree: "S1 Teknik Informatika",
    year: "2023 - Sekarang",
    description: "Fokus pada pengembangan perangkat lunak dan teknologi web modern.",
  },
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}[] = [
  {
    title: "Mini E-Commerce",
    description: "Aplikasi e-commerce dengan fitur pembeli & penjual. Penjual bisa tambah/edit/hapus produk, pembeli bisa belanja dan checkout.",
    tech: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS"],
    github: "https://github.com/MAgSAsli/mini-ecommerce",
    demo: "https://mini-ecommerce-mu-ten.vercel.app",
  },
];
