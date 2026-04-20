import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Engineering (CSE)',
      institution: 'Christ College Of Engineering and Technology (CCET)',
      location: 'Pondicherry, India',
      year: 'May 2019',
      description: 'CGPA: 7.6/10',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="text-emerald-500" size={24} />
                        <h3 className="text-white">{edu.degree}</h3>
                      </div>
                      <p className="text-emerald-400 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-slate-400 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      <p className="text-slate-300">{edu.description}</p>
                    </div>
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