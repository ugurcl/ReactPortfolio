import { motion } from "framer-motion";
import { Github, Linkedin, Mail, DownloadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "../animations/BlurText";

const socialLinks = [
  {
    icon: <Github size={24} />,
    url: "https://github.com/ugurcl",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={24} />,
    url: "https://www.linkedin.com/in/u%C4%9Furcal%C4%B1%C5%9Fkan/",
    label: "LinkedIn",
  },
  { icon: <Mail size={24} />, url: "mailto:infougurcalskan@gmail.com", label: "Email" },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-zinc-950/10 h-screen flex flex-col pt-48 items-center text-center px-2 lg:px-6"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7 }}
        className="text-white text-6xl md:text-8xl font-extrabold drop-shadow-lg"
      >
        <BlurText
          text="Uğur Çalışkan"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="mt-4 max-w-xl text-gray-300 text-lg md:text-xl leading-relaxed"
      >
        Yazılım dünyasında <span className="text-primary font-semibold">full stack geliştirici</span> olarak,  
        <br />
        kullanıcı odaklı, performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="mt-4 max-w-xl text-gray-400 text-md md:text-lg italic"
      >
        “Kod yazmak benim için sadece iş değil; <br />  
        bir problem çözme, yaratma ve öğrenme yolculuğu.”
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex gap-6 mt-8"
      >
        {socialLinks.map(({ icon, url, label }, i) => (
          <a
            key={i}
            href={url}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-primary transition transform hover:scale-110"
          >
            {icon}
          </a>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          asChild
          className="bg-primary px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition flex items-center gap-2"
        >
          <a href="" download>
            <DownloadCloud size={20} /> CV’mi İndir
          </a>
        </Button>

        <Button variant="outline" asChild className="px-6 py-3 rounded-lg">
          <a href="#projects">Projelerime Göz At</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
