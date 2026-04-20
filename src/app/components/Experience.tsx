import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Retail Associate',
      company: 'Amazon Development Center India (ADCI)',
      period: 'Jan 2020 - June 2025',
      description: 'Domain: Retail Business',
      achievements: [
        'Expertised in sales & payment, inventory management and problem solving',
      ],
    },
    {
      title: 'Software Developer - Freelancing Projects',
      company: 'Freelance',
      period: 'June 2025 - Present',
      description: 'Developed full stack websites for logistic startups.',
      achievements: [
        'Expertised in web development, databases and basic front end architecture',
        'Design, implement, test, deploy and maintain innovative software solutions to transform service performance, durability, cost, and security',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}