// src/components/sections/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Build Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-cyan flex items-center justify-center flex-shrink-0">
                      <Mail className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-400">kuberaminfotech@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-electric flex items-center justify-center flex-shrink-0">
                      <Phone className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-400">+91 92747 74155</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-cyan flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-400">32, Upvan Society Rd, Idar, Gujarat 383430</p>
                    </div>
                  </div> */}
                  {/* Map */}
                  {/* <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-8">
                    <iframe
                      title="Kuberam Infotech Location"
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.888219053345!2d73.0025926!3d23.8268112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395da304a730654d%3A0x915035f005007dc!2sKUBERAM%20INFOTECH!5e0!3m2!1sen!2sin!4v1703928000000!5m2!1sen!2sin"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div> */}


                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-400 mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-500">Available Now</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                      placeholder="Your Company (Optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={20} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;