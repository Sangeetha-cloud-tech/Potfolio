import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects on time and within scope',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams',
    },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-slate-300 mb-6">
              I'm a motivated B.tech(CSE) graduate (2019) with hands-on experience in Java Full Stack Development. I specialize in building web applications using Spring Boot, MySQL, HTML, CSS, and JavaScript. Currently working as a Freelance Software Developer, developing full stack websites for logistic startups.
            </p>
            <p className="text-slate-300 mb-8">
              Former Retail Associate at Amazon Development Center India (ADCI), I bring strong problem-solving skills and attention to detail from retail operations into software development. I'm passionate about continuous learning, staying updated with the latest technologies, and creating innovative software solutions that transform service performance and user experience.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{highlight.title}</h3>
                    <p className="text-slate-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}