import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";


export default function About() {
  return (
    <section id="about" className="py-32 px-2 md:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-16 items-center justify-center"
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="group relative rounded-full bg-gradient-to-tr from-primary via-secondary to-muted p-[4px] shadow-xl hover:rotate-1 transition-transform duration-700"
        >
          <div className="bg-background rounded-full p-1">
            <Avatar className="w-48 h-48 md:w-60 md:h-60 shadow-md transition-all duration-500 group-hover:scale-105">
              <AvatarImage
                src="https://media.licdn.com/dms/image/v2/D4D03AQGvd2GQRTfucA/profile-displayphoto-shrink_400_400/B4DZdvXaKqH4Ao-/0/1749920097522?e=1756944000&v=beta&t=NFoIN1xxttaWUTIm0BajJ2SZ4cSGTZbW6rdKfVoOh7Y"
                alt="Uğur"
              />
              <AvatarFallback>UG</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Hakk<span className="">ımda</span>
          </h2>

          <p className="text">
            Merhaba! Ben <span className="text-white font-semibold">Uğur Çalışkan</span>. Yazılım yolculuğuma birkaç yıl önce Python ile başladım. Temel programlama ve algoritmaları öğrendikten sonra, mobil uygulama geliştirmeye yöneldim ve bir süre Flutter ile projeler yaptım.
          </p>

          <p className="text">
            Ardından web geliştirme alanına geçiş yaparak backend tarafında Node.js, Express ve Django gibi teknolojilerle sağlam API’ler oluşturdum. Backend tecrübem arttıkça frontend dünyasını keşfetmeye başladım.
          </p>

          <p className="text">
            Günümüzde TailwindCSS, SASS, React ve TypeScript kullanarak hem performanslı hem de kullanıcı odaklı arayüzler geliştiriyorum. Veritabanı yönetimi konusunda PostgreSQL, MongoDB, SQL Server ve MySQL gibi farklı sistemlerle deneyim kazandım.
          </p>

          <p className="text">
            Full stack geliştirme sürecinde, hem sağlam altyapı kurmaya hem de estetik ve işlevsel kullanıcı deneyimleri yaratmaya odaklanıyorum. Her yeni projede öğrenmeye ve kendimi geliştirmeye devam ederek, ortaya özgün ve kaliteli işler çıkarmaya çalışıyorum.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiReact className="text-sky-400" /> React
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiTypescript className="text-blue-500" /> TypeScript
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiNodedotjs className="text-green-600" /> Node.js
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiMongodb className="text-green-500" /> MongoDB
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiTailwindcss className="text-cyan-400" /> TailwindCSS
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <SiGit className="text-orange-500" /> Git
            </Badge>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
