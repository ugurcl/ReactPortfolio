"use client";
import { motion, easeOut } from "framer-motion";


type ExperienceType = {
  company: string;
  role: string;
  duration: string;
  description: string;
  type: string;
};

const workExperience: ExperienceType[] = [
  {
    company: "ExportAlfa",
    role: "Stajyer",
    duration: "2024 - 2025",
    description:
      "ExportAlfa şirketinde staj yaptım. Python ile belirli web kazıma araçları geliştirdim.",
    type: "staj",
  },
  {
    company: "CyberGru",
    role: "Gönüllü",
    duration: "2024 - 2025",
    description: "CyberGru topluluğunda backend alanında gönüllü çalıştım.",
    type: "gönüllü",
  },
  {
    company: "SiberAtay",
    role: "Gönüllü",
    duration: "2021 - 2022",
    description: "SiberAtay topluluğunda backend alanında gönüllü çalıştım.",
    type: "gönüllü",
  },
];


const getBadgeStyle = (type: string): string => {
  switch (type.toLowerCase()) {
    case "gönüllü":
      return "bg-green-500/10 text-green-300 border-green-400/30";
    case "staj":
      return "bg-blue-500/10 text-blue-300 border-blue-400/30";
    case "freelance":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-400/30";
    default:
      return "bg-gray-500/10 text-gray-300 border-gray-400/30";
  }
};


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const WorkExperience = () => {
  return (
    <motion.section
      id="work-experience"
      className="w-11/12 md:w-1/2 mx-auto md:px-6 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Çalışma Geçmişi
      </motion.h2>

      <motion.div className="space-y-8" variants={containerVariants}>
        {workExperience.map(({ company, role, duration, description, type }, idx) => (
          <motion.div
            key={idx}
            className="bg-background p-6 rounded-lg shadow-md border border-border"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold text-white">{company}</h3>
              <span
                className={`inline-block px-3 py-1 rounded border text-sm font-medium ${getBadgeStyle(type)}`}
              >
                {type.toUpperCase()}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              {role} | {duration}
            </p>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WorkExperience;
