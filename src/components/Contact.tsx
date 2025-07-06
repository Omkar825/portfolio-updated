import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_uc8gl6t',
        'template_qd71d9a',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Omkara Anjaneya Kumar',
        },
        'TTomNxvLFY70KjjjM'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8328669439",
      href: "tel:+918328669439"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "omkarratnala2565@gmail.com",
      href: "mailto:omkarratnala2565@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Palakollu, Andhra Pradesh",
      href: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-royal-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8" />
          <p className="text-xl text-royal-200 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect and create something amazing together.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gold-400">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-royal-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-royal-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-royal-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-royal-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-royal-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-royal-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:from-gold-600 hover:to-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-royal-900 transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
                  >
                    <CheckCircle size={20} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                  >
                    <AlertCircle size={20} />
                    Failed to send message. Please try again or contact directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-gold-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-royal-200">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-gold-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-gold-400">Let's Collaborate</h3>
              <p className="text-royal-200 leading-relaxed mb-4">
                I'm always interested in discussing new opportunities, innovative projects, and potential collaborations in the fields of AI, robotics, and software development.
              </p>
              <p className="text-royal-200 leading-relaxed">
                Whether you have a project in mind, want to explore partnership opportunities, or simply want to connect, I'd love to hear from you!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;