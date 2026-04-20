import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Core Java', level: 90 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Data Structures & Algorithms', level: 90 },
      ],
    },
    {
      title: 'Frameworks & Database',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'Postman', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'JUnit & Mockito', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50"
            >
              <h3 className="text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}