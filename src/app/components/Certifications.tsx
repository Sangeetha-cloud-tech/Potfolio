import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Java Full Stack Developer',
      issuer: 'GUVI (IIT Madras Incubated)',
      date: '2025',
      skills: ['Java', 'Spring Boot', 'Full Stack Development', 'MySQL'],
      credentialUrl: 'https://drive.google.com/file/d/1DjT54yGwxAmPJ7fImypu9WTlVzk0HFWj/view?usp=sharing',
    },
    {
      title: 'Complete Java Certification Course',
      issuer: 'Udemy',
      date: '2021',
      skills: ['Core Java', 'Java 8+', 'OOP', 'Programming'],
      credentialUrl: 'https://drive.google.com/file/d/1QfLRLp0H2QfGTaqlER7E2GtNZc8r5tdI/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Award className="text-emerald-500" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-1">{cert.title}</h3>
                      <p className="text-emerald-400">{cert.issuer}</p>
                      <p className="text-slate-400 mt-1">{cert.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 flex-1">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700/50 text-slate-300 border-slate-600/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}