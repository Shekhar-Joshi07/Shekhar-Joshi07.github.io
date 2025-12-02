import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motionDurations, motionEasing } from '../../theme/tokens';

const channels = [
  {
    label: 'Email',
    value: 'shekharjoshi@zohomail.in',
    href: 'mailto:shekharjoshi@zohomail.in',
    icon: Mail,
    meta: 'Preferred for detailed briefs',
  },
  {
    label: 'Phone',
    value: '+91 83682 97680',
    href: 'tel:+918368297680',
    icon: Phone,
    meta: 'IST · 10am — 7pm',
  },
  {
    label: 'Location',
    value: 'Dehradun, Uttarakhand',
    href: 'https://maps.app.goo.gl/1GUmB8mAo6Jsteos7',
    icon: MapPin,
    meta: 'Remote-friendly across timezones',
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Shekhar-Joshi07', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ShekharJoshi07', icon: Linkedin },
];

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID
    const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !adminTemplateId || !userTemplateId || !publicKey) {
      console.error('EmailJS environment variables are missing');
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send to Admin
      await emailjs.send(serviceId, adminTemplateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      // Send to User
      await emailjs.send(serviceId, userTemplateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-midnight to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-15" />
      <motion.div
        className="absolute left-6 top-24 h-72 w-72 rounded-full bg-cobalt/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.08, 0.98], x: [0, 14, -6] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-moss/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.25, 0.5, 0.25], scale: [1, 0.9, 1.05], y: [0, -12, 8] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1] mx-auto max-w-5xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-fog/70">
            <Sparkles className="h-4 w-4 text-moss" />
            Contact
          </span>
          <h2 className="font-serif text-4xl text-foam md:text-5xl">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-fog/80">
            I'm always open to discussing new opportunities, whether it's a full-time role or a collaborative project.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
            viewport={{ once: true, amount: 0.4 }}
            className="card-surface space-y-6 rounded-[36px] p-6 shadow-aurora"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foam">Get in touch</h3>
              <p className="text-sm text-fog/80">
                Feel free to reach out if you have any questions or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex items-start gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-foam">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-fog/60">{channel.label}</p>
                      <p className="text-lg font-semibold text-foam">{channel.value}</p>
                      <p className="text-sm text-fog/70">{channel.meta}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foam transition hover:border-white/40"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="card-surface space-y-4 rounded-[36px] p-6 shadow-aurora"
          >
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.4em] text-fog/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foam placeholder:text-fog/50 focus:border-white/40 focus:outline-none"
                // placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.4em] text-fog/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foam placeholder:text-fog/50 focus:border-white/40 focus:outline-none"
                // placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.4em] text-fog/60">
                Project notes
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foam placeholder:text-fog/50 focus:border-white/40 focus:outline-none"
                // placeholder="What are you building? Include timelines, problem statements, or links."
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={prefersReducedMotion || isSubmitting ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion || isSubmitting ? undefined : { scale: 0.98 }}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/15 px-4 py-3 text-sm font-semibold text-foam transition hover:border-white/40 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send className="h-4 w-4" />
              {status === 'sent' 
                ? 'Message queued — thank you!' 
                : status === 'error' 
                  ? 'Failed to send. Please try again.' 
                  : isSubmitting 
                    ? 'Sending...' 
                    : 'Send message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
