import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello Trillion Diamond!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        window.open(`https://wa.me/918848201874?text=${text}`, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Trillion Diamond</title>
                <meta name="description" content="Get in touch with Trillion Diamond for custom bespoke jewelry inquiries, appointments, and showroom visits in Vaduthala, Ernakulam." />
            </Helmet>

            {/* Header */}
            <section className="bg-accent pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading text-secondary mb-6"
                    >
                        Connect With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl mx-auto"
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
                                            <a href="tel:+918848201874" className="text-gray-500 font-light hover:text-primary transition-colors">
                                                +91 8848201874
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-secondary mb-1">Email Us</h4>
                                            <a href="mailto:mathewselvi29@gmail.com" className="text-gray-500 font-light hover:text-primary transition-colors">
                                                mathewselvi29@gmail.com
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.733519803153!2d76.26252996977539!3d10.043003200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5e7514af7b%3A0xc665b16955d8f28c!2sVaduthala%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709440623696!5m2!1sen!2sin"
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
                                    className="w-full flex justify-center items-center gap-2 bg-primary text-white py-4 text-sm tracking-widest uppercase hover:bg-secondary transition-colors duration-300"
                                >
                                    <MessageSquare className="w-5 h-5" /> Send via WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
