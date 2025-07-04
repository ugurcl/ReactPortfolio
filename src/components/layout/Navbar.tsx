import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaTools, FaProjectDiagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Hakkımda", href: "#about", icon: <FaUser /> },
    { label: "Yeteneklerim", href: "#skills", icon: <FaTools /> },
    { label: "Projelerim", href: "#projects", icon: <FaProjectDiagram /> },
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <header className="w-10/12 z-20 bg-background shadow-lg border-[1px] border-zinc-900 mx-auto mt-7 rounded-2xl md:w-3/4 lg:w-2/3">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <a href="" className="flex items-center">
            <span className="text-primary font-extrabold text-[20px]">
              {"</>"}
            </span>
          </a>
        </div>
        <div className="hidden md:flex gap-10 font-semibold text-muted-foreground">
          {links.map(({ label, href, icon }, index) => (
            <motion.a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="relative group cursor-pointer flex items-center gap-2 hover:text-primary transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              {label}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-primary transition-[width] duration-300"></span>
            </motion.a>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary transition-transform hover:scale-110"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full max-w-xs w-full bg-background/95 backdrop-blur-md shadow-lg z-50 flex flex-col px-6 py-10"
                ref={menuRef}
              >
                <nav className="flex flex-col gap-8 mt-8 font-semibold text-lg text-muted-foreground">
                  <button
                    className="absolute top-10 right-10 mb-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                  </button>
                  {links.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-primary transition flex items-center gap-2"
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
