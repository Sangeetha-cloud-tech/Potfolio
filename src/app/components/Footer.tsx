import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {currentYear} Sangeetha Murali. Made with</span>
            <Heart size={16} className="text-emerald-400 fill-emerald-400" />
            <span>and React</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Sangeetha-cloud-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sangeetha-murali-203755396/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sangeethamuralisuc@gmail.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}