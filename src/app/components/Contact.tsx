import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sangeethamuralisuc@gmail.com',
      link: 'mailto:sangeethamuralisuc@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9952733632',
      link: 'tel:+919952733632',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-white hover:text-emerald-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <p className="text-slate-300 mb-4">
                I'm currently available for freelance work and full-time opportunities. Let's create something amazing together!
              </p>
              <p className="text-slate-400">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}