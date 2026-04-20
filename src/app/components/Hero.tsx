import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400">Java Full Stack Developer</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white mb-4"
        >
          Hi, I'm <span className="text-emerald-400">Sangeetha Murali</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          B.tech(CSE) graduate with hands-on training in Java Full Stack Development. Specializing in Spring Boot, MySQL, HTML, CSS, and JavaScript to build real-world software projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/Sangeetha-cloud-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sangeetha-murali-203755396/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sangeethamuralisuc@gmail.com"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}