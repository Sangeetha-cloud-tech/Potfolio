import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Expense Tracker Application',
      description: 'CRUD operations for expense management with category-wise expense tracking. Users can add, edit, delete, and view expenses organized by categories.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM0MTg5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/Sangeetha-cloud-tech/Expensetrackingproject/tree/main',
      demo: 'https://smartexpenseproject-2.onrender.com/public/welcomepage',
    },
    {
      title: 'Movie Ticket Booking Project',
      description: 'Online movie ticket booking system allowing users to book tickets for available movies. Includes an admin panel to manage movies and bookings.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/Sangeetha-cloud-tech/Moviebooking-project/tree/main',
      demo: 'https://ticketbooking-final.onrender.com/public/register',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden hover:border-emerald-500/50 transition-all group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}