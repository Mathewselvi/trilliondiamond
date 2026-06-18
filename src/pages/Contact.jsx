import { useState } from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Send email via Vercel serverless function
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            if (!response.ok) {
                throw new Error("Failed to send email notification");
            }

            // Format WhatsApp text
            const text = `Hello Trillion Diamond!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
            
            // Open WhatsApp in new tab
            window.open(`https://wa.me/918848201874?text=${encodeURIComponent(text)}`, '_blank');
            
            // Clear the form
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("There was an error sending your message. Please try again or contact us directly via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEO 
                title="Contact Us | Trillion Diamond"
                description="Get in touch with Trillion Diamond for custom bespoke jewelry inquiries, appointments, and showroom visits in Vaduthala, Ernakulam."
                url="/contact"
            />

            {/* Header */}
            <section className="bg-secondary text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="/images/rings/Trillion/Minimalist_Ring.PNG"
                        alt="Contact Us Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading text-white mb-6"
                    >
                        Connect With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-200 font-light text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Schedule a viewing, book a design consultation, or inquire about our exquisite collections.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Details & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-3xl font-heading text-secondary mb-6">Our Sanctuary</h2>
                                <div className="w-16 h-1 bg-primary mb-8" />

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-secondary mb-1">Visit Us</h4>
                                            <p className="text-gray-500 font-light">
                                                Trillion Diamond Showroom<br />
                                                Vaduthala, Ernakulam<br />
                                                Kerala, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-secondary mb-1">Call Us</h4>
                                            <div className="flex flex-col">
                                                <a href="tel:+918848201874" className="text-gray-500 font-light hover:text-primary transition-colors">
                                                    +91 8848201874
                                                </a>
                                                <a href="tel:+918921643216" className="text-gray-500 font-light hover:text-primary transition-colors">
                                                    +91 8921643216
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-secondary mb-1">Email Us</h4>
                                            <a href="mailto:trilliondiamondkochi@gmail.com" className="text-gray-500 font-light hover:text-primary transition-colors break-all">
                                                trilliondiamondkochi@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-secondary mb-1">Hours</h4>
                                            <p className="text-gray-500 font-light">
                                                Mon-Sat: 10:00 AM - 7:00 PM<br />
                                                Sun: By Appointment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="w-full h-64 bg-gray-100 mt-10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4870.292393498274!2d76.27241307590165!3d10.018890490087536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d00131a346b%3A0xc6773201a553657f!2sTRILLION%20DIAMOND!5e1!3m2!1sen!2sin!4v1781333890697!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Trillion Diamond Location"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent p-8 md:p-12 shadow-sm"
                        >
                            <h2 className="text-2xl font-heading text-secondary mb-8">Send an Inquiry</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white border-b border-gray-300 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white border-b border-gray-300 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white border-b border-gray-300 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" disabled>Select Inquiry Type</option>
                                        <option value="Custom Jewelry Design">Custom Jewelry Design</option>
                                        <option value="Engagement Ring Appointment">Engagement Ring Appointment</option>
                                        <option value="Pricing & Collection Info">Pricing & Collection Info</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white border-b border-gray-300 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center gap-2 bg-primary text-white py-4 text-sm tracking-widest uppercase transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'}`}
                                >
                                    <MessageSquare className="w-5 h-5" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
