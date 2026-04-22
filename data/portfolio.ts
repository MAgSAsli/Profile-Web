export const profile = {
  name: "Moch. Agil Sugiarto",
  role: "Full Stack Developer",
  bio: "Mahasiswa Teknik Informatika semester 7 yang hampir menyelesaikan studi S1, dengan fokus pada pengembangan web Full Stack. Berpengalaman membangun aplikasi web menggunakan React, Next.js, TypeScript di sisi frontend, serta Node.js, Express, NestJS, dan MongoDB/MySQL di sisi backend. Aktif membangun proyek portfolio nyata dan memiliki pengalaman organisasi sebagai Wakil Ketua UKM Coders.",
  email: "mochamadagils@gmail.com",
  github: "https://github.com/MAgSAsli",
  linkedin: "https://www.linkedin.com/in/mochamad-agil-sugiarto",
  location: "Sidoarjo, Jawa Timur",
  phone: "0812-3506-9383",
};

export const skills = {
  current: [
    { name: "JavaScript", level: 80, icon: "SiJavascript" },
    { name: "TypeScript", level: 75, icon: "SiTypescript" },
    { name: "React.js", level: 75, icon: "SiReact" },
    { name: "Next.js", level: 75, icon: "SiNextdotjs" },
    { name: "Tailwind CSS", level: 80, icon: "SiTailwindcss" },
    { name: "Node.js", level: 75, icon: "SiNodedotjs" },
    { name: "Express.js", level: 80, icon: "SiExpress" },
    { name: "NestJS", level: 70, icon: "SiNestjs" },
    { name: "MongoDB", level: 65, icon: "SiMongodb" },
    { name: "MySQL", level: 75, icon: "SiMysql" },
    { name: "Supabase (PostgreSQL)", level: 70, icon: "SiSupabase" },
    { name: "PHP", level: 70, icon: "SiPhp" },
    { name: "Laravel", level: 70, icon: "SiLaravel" },
    { name: "JWT & bcrypt", level: 75, icon: "SiJsonwebtokens" },
  ],
  learning: [
    { name: "Docker", icon: "SiDocker" },
    { name: "Redis", icon: "SiRedis" },
    { name: "CI/CD", icon: "SiGithubactions" },
  ],
};

export const education = [
  {
    school: "Universitas Maarif Hasyim Latief Sidoarjo",
    degree: "S1 Teknik Informatika",
    year: "2023 - Sekarang",
    description: "Semester 7 — hampir menyelesaikan studi S1. Fokus studi: Pengembangan Perangkat Lunak, Web Development, Rekayasa Sistem.",
  },
  {
    school: "SMK Negeri 3 Surabaya",
    degree: "Teknik Audio Video / Elektronika",
    year: "2017 - 2020",
    description: "Mempelajari dasar-dasar elektronika, teknik audio video, dan pemrograman.",
  },
];

export const experiences = [
  {
    role: "Packer – Freelance Gudang",
    company: "Lazada",
    location: "Sidoarjo",
    year: "Des 2023 – Okt 2024",
    points: [
      "Mengelola alur kerja packing dengan ketelitian tinggi dalam lingkungan logistik skala besar.",
      "Melatih kemampuan kerja di bawah tekanan, disiplin waktu, dan koordinasi tim.",
    ],
  },
  {
    role: "Intern Production – Gudang",
    company: "PT Panggung Electric Citrabuana",
    location: "Sidoarjo",
    year: "Nov 2018 – Jan 2019",
    points: [
      "Mendukung proses produksi dan manajemen inventaris dalam lingkungan manufaktur elektronik.",
    ],
  },
];

export const organizations = [
  {
    role: "Wakil Ketua",
    name: "UKM Umaha Coders Community",
    place: "Universitas Maarif Hasyim Latif · Sidoarjo",
    points: [
      "Memimpin dan mengkoordinasikan kegiatan komunitas coding kampus dengan anggota aktif.",
      "Menginisiasi workshop, sharing session, dan hackathon internal untuk peningkatan skill anggota.",
      "Mendorong budaya kolaborasi dan pengembangan proyek berbasis teknologi web.",
    ],
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
    description: "Aplikasi e-commerce full stack dengan dua peran pengguna: penjual dan pembeli. Fitur manajemen produk, keranjang belanja, dan proses checkout.",
    tech: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS", "Supabase"],
    github: "https://github.com/MAgSAsli/mini-ecommerce",
    demo: "https://mini-ecommerce-mu-ten.vercel.app",
  },
  {
    title: "Cashier-Learn",
    description: "Aplikasi kasir berbasis web dengan fitur manajemen produk, transaksi, laporan penjualan, manajemen user, dan cetak struk.",
    tech: ["Laravel", "Blade", "Bootstrap 5", "PostgreSQL", "Supabase"],
    github: "https://github.com/MAgSAsli/Cashier-App",
  },
  {
    title: "Node-Auth-MongoDB",
    description: "RESTful backend API untuk sistem autentikasi pengguna. Implementasi registrasi & login dengan bcrypt hashing, JWT authentication, dan protected routes.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/MAgSAsli/Authentication-with-MongoDB",
  },
];
