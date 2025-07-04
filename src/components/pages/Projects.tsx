import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const projects = [
  {
    title: "Ulak",
    description:
      "Yabancı haber sitelerinden haberleri toplayıp Türkçeye çevirerek tek çatı altında sunan bir platform.",
    technologies: ["Django", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "",
    live: "",
    type: "takım",
  },
  {
    title: "Portfolyo Takip",
    description:
      "Kullanıcının kripto, döviz ve altın yatırımlarını takip edip, kar ve zarar durumunu gösteren simülasyon projesi.",
    technologies: ["Django", "HTML", "CSS", "Sass", "jQuery", "JavaScript"],
    github: "",
    live: "",
    type: "bireysel",
  },

  {
    title: "Blog REST API",
    description:
      "Node.js ve TypeScript kullanılarak geliştirilen MongoDB tabanlı REST API projesi.",
    technologies: ["Node.js", "TypeScript", "MongoDB"],
    github: "",
    live: "",
    type: "bireysel",
  },
  {
    title: "Kütüphane Otomasyonu",
    description:
      "Okul kütüphanesi için C# Windows Forms ile geliştirilen, kitap ekleme, yazar ve kategori yönetimi, ödünç verme takip sistemi.",
    technologies: ["C#", "Windows Forms"],
    github: "",
    live: "",
    type: "bireysel",
  },
  {
    title: "ATM Otomasyonu",
    description:
      "C# Windows Forms ile geliştirilen ATM simülasyonu. Para yatırma, çekme, fatura ödeme ve işlem sonrası mail gönderme özellikleri içerir.",
    technologies: ["C#", "Windows Forms"],
    github: "",
    live: "",
    type: "bireysel",
  },
  {
    title: "Üniversite Demirbaş Takip Sistemi",
    description:
      "Üniversite bünyesindeki demirbaş eşyaların (bilgisayar, projeksiyon, masa, sandalye vb.) takibini sağlayan; ekleme, güncelleme, silme ve raporlama işlemlerini içeren C# Windows Forms tabanlı masaüstü uygulama.",
    technologies: ["C#", "Windows Forms", "SQL Server"],
    github: "",
    live: "",
    type: "bireysel",
  },
  {
    title: "Üniversite Randevu Takip Sistemi",
    description:
      "Öğrencilerin öğretim üyelerinden randevu almasını sağlayan; öğretim üyelerinin randevu oluşturma ve takip yapabildiği Django tabanlı sistem.",
    technologies: ["Django", "Sass", "HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
    type: "bireysel",
  },
];

const getBadgeStyle = (type: string) => {
  switch (type) {
    case "bireysel":
      return "bg-indigo-500/10 text-indigo-300 border-indigo-400/30";
    case "takım":
      return "bg-teal-500/10 text-teal-300 border-teal-400/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
        Projelerim
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(
          ({ title, description, technologies, github, live, type }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden border border-neutral-800 bg-[#121212] hover:border-primary/50 transition-all duration-300 rounded-2xl shadow hover:shadow-lg hover:shadow-primary/10 p-6 flex flex-col justify-between h-full">
        
                <span
                  className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full border ${getBadgeStyle(
                    type
                  )}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>


                <div className="mb-6">
                  <CardTitle className="text-white lg:text-xl text-lg font-semibold mb-2">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {description}
                  </CardDescription>
                </div>

               
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

             
                <CardFooter className="flex justify-between items-center px-0 pt-4 border-t border-neutral-800 text-sm">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
