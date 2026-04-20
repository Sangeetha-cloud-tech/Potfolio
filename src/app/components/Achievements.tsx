import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Target, ExternalLink } from 'lucide-react';

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Guvi Code Kata',
      description: 'Solved coding problems to develop programming skills (Guvi platform codekata)',
      link: 'https://drive.google.com/file/d/13C8-WZ6AHMj2kI4JPSCB4LcJvKDZxrdN/view?usp=sharing',
      linkText: 'View Solved Programs',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-400 mb-4">
                      {achievement.description}
                    </p>
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                    >
                      <span>{achievement.linkText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}