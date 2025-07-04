import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted py-10 px-6 mt-24 text-center flex flex-col items-center gap-6">
      <div className="flex gap-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/ugurcl"
                target="_blank"
                rel="noreferrer"
                className="group bg-muted/30 p-3 rounded-full hover:bg-secondary hover:text-white transition duration-300"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/u%C4%9Furcal%C4%B1%C5%9Fkan/"
                target="_blank"
                rel="noreferrer"
                className="group bg-muted/30 p-3 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

     
      <p className="text-sm text-muted-foreground tracking-wide">
        © 2025 <span className="font-semibold text-white">Uğur Çalışkan</span>. All rights reserved.
      </p>

    
      <a href="#hero">
        <Button
          variant="ghost"
          className="text-primary hover:text-white hover:bg-primary/80 transition duration-300 inline-flex items-center gap-2"
        >
          <ArrowUp size={18} />
          Back to top
        </Button>
      </a>
    </footer>
  );
};
