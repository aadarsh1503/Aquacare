import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaPen, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

// A reusable, futuristic input component
const InputGroup = ({ icon, type = "text", name, placeholder, value, onChange, required = false }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-gray-500/10 text-gray-800 placeholder:text-gray-500 rounded-lg py-3 pl-12 pr-4 border border-transparent 
                 focus:bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
    />
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', privacyAgreement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (status.message) setStatus({ type: '', message: '' }); // Clear status on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyAgreement) {
      setStatus({ type: 'error', message: 'Please agree to the privacy policy to continue.' });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const formattedMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      const response = await fetch('https://aquacare.me/send_to_a_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, email: formData.email, phone: formData.phone, message: formattedMessage,
          to: 'info@aquacare.me', subject: `New Contact from ${formData.name} (${formData.email})`
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', privacyAgreement: false });
      } else {
        throw new Error('Server responded with an error.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative  overflow-hidden mt-[200px]">
      {/* Aurora Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-cyan-200/40 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-200/40 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let's Start a Conversation</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 lg:pt-8">
            {[
              { icon: <FaMapMarkerAlt />, title: "Our Location", lines: ["P.O Box: 54121, Manama", "Kingdom of Bahrain"] },
              { icon: <FaPhoneAlt />, title: "Call Us", lines: ["+973 39390050"] },
              { icon: <FaEnvelope />, title: "Email Us", lines: ["info@aquacare.me"] }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/30">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <div className="mt-1 text-gray-600">
                    {item.lines.map(line => <p key={line}>{line}</p>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup icon={<FaUser />} name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <InputGroup icon={<FaEnvelope />} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup icon={<FaPhoneAlt />} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <InputGroup icon={<FaPen />} name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="How can we help? Feel free to get in touch!"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-500/10 text-gray-800 placeholder:text-gray-500 rounded-lg p-4 border border-transparent 
                             focus:bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacyAgreement"
                  checked={formData.privacyAgreement}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                />
                <label htmlFor="privacy" className="ml-3 block text-sm text-gray-600">
                  I agree to the <a href="/privacy-policy" className="font-medium text-cyan-600 hover:text-cyan-500 underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
                      status.type === 'success' ? 'bg-green-100/70 text-green-800' : 'bg-red-100/70 text-red-800'
                    }`}
                  >
                    {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.privacyAgreement}
                  className="w-full flex items-center justify-center gap-3 text-white px-8 py-3 rounded-lg font-semibold
                             bg-gradient-to-r from-cyan-500 to-blue-600 
                             hover:from-cyan-600 hover:to-blue-700
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Map Section */}
      <div className="w-full h-96 mt-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale(0.8) contrast(1.2) opacity-80"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;