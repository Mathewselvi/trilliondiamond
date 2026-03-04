import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Diamond, Layers, CheckCircle, Gem, PenTool } from 'lucide-react';

export default function Customization() {
    return (
        <>
            <Helmet>
                <title>How Our Customisation Works | Trillion Diamond</title>
                <meta name="description" content="Design your dream jewelry. Choose between natural or lab-grown diamonds, combined with premium BIS hallmarked gold, platinum or silver." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-secondary text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1599643478514-4a820cbf311e?auto=format&fit=crop&q=80&w=2000"
                        alt="Custom Design Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        Bespoke Service
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-heading mb-6"
                    >
                        How Our Customisation Works
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 font-light text-lg max-w-2xl mx-auto"
                    >
                        We put you in control. From concept to 3D design to final creation, step by step.
                    </motion.p>
                </div>
            </section>

            {/* Step 1 & 2 */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Step 1: Metal */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent p-10 md:p-14 rounded-sm border-t-4 border-primary"
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Step 1</span>
                            <h3 className="text-3xl font-heading text-secondary mb-8">Choose Your Metal</h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-heading text-xl text-secondary mb-3 border-b border-gray-200 pb-2">Gold</h4>
                                    <p className="text-gray-600 mb-2 font-medium">Colors: <span className="font-light">White Gold, Rose Gold, Champagne Gold, Yellow Gold</span></p>
                                    <p className="text-gray-600 mb-2 font-medium">Purity: <span className="font-light">22 Karat, 18 Karat, 14 Karat, 9 Karat</span></p>
                                </div>

                                <div>
                                    <h4 className="font-heading text-xl text-secondary mb-3 border-b border-gray-200 pb-2">Platinum</h4>
                                    <ul className="text-gray-600 font-light list-disc list-inside space-y-1">
                                        <li>Premium layer</li>
                                        <li>Long-lasting</li>
                                        <li>Hypoallergenic</li>
                                        <li>Natural white finish</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-heading text-xl text-secondary mb-3 border-b border-gray-200 pb-2">Silver</h4>
                                    <ul className="text-gray-600 font-light list-disc list-inside space-y-1 flex gap-6">
                                        <li>Elegant</li>
                                        <li>Affordable</li>
                                        <li>Stylish</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2: Diamond */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent p-10 md:p-14 rounded-sm border-t-4 border-primary"
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Step 2</span>
                            <h3 className="text-3xl font-heading text-secondary mb-8">Choose Your Diamond</h3>

                            <div className="space-y-6">
                                <div className="bg-white p-8 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sparkles className="text-primary w-6 h-6" />
                                        <h4 className="font-heading text-2xl text-secondary">Natural Diamonds</h4>
                                    </div>
                                    <ul className="text-gray-600 font-light space-y-2 list-none">
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> Formed naturally over billions of years</li>
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> Higher rarity</li>
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> Traditional luxury</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Gem className="text-primary w-6 h-6" />
                                        <h4 className="font-heading text-2xl text-secondary">Lab-Grown Diamonds</h4>
                                    </div>
                                    <ul className="text-gray-600 font-light space-y-2 list-none">
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> Eco-friendly</li>
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> More budget-friendly</li>
                                        <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1" /> Same brilliance & structure as natural</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Step 3 & 4 */}
            <section className="py-24 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Step 3</span>
                            <h3 className="text-3xl md:text-4xl font-heading text-white mb-8">Select Diamond Quality (4Cs)</h3>

                            <div className="space-y-4 mb-10">
                                <div className="border border-white/20 p-4 bg-white/5 flex gap-4 items-center">
                                    <div className="font-heading text-primary font-bold text-xl w-6">C</div>
                                    <div><strong className="text-white">Cut</strong> – Brilliance</div>
                                </div>
                                <div className="border border-white/20 p-4 bg-white/5 flex gap-4 items-center">
                                    <div className="font-heading text-primary font-bold text-xl w-6">C</div>
                                    <div><strong className="text-white">Color</strong> – From D (colorless) to lower grades</div>
                                </div>
                                <div className="border border-white/20 p-4 bg-white/5 flex gap-4 items-center">
                                    <div className="font-heading text-primary font-bold text-xl w-6">C</div>
                                    <div><strong className="text-white">Clarity</strong> – Flawless to Included</div>
                                </div>
                                <div className="border border-white/20 p-4 bg-white/5 flex gap-4 items-center">
                                    <div className="font-heading text-primary font-bold text-xl w-6">C</div>
                                    <div><strong className="text-white">Carat</strong> – Weight & size</div>
                                </div>
                            </div>

                            <div className="bg-primary/10 p-6 border-l-4 border-primary">
                                <h5 className="font-heading text-xl mb-2 text-primary">Budget Factors</h5>
                                <p className="font-light text-gray-300 text-sm leading-relaxed">
                                    Price changes based on: Diamond type (Natural / Lab-grown), Color, Clarity, Carat weight, and Metal purity. <br className="my-2" />
                                    <strong className="text-white font-medium">We customise according to your budget.</strong>
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 4 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Step 4</span>
                            <h3 className="text-3xl md:text-4xl font-heading text-white mb-8">3D Design & Estimate</h3>

                            <div className="relative border-l-2 border-primary/30 pl-8 space-y-10 py-4 ml-4">
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                                    <h4 className="text-xl font-heading text-white mb-2 flex items-center gap-2"><PenTool className="w-5 h-5 text-primary" /> Share Idea</h4>
                                    <p className="text-gray-400 font-light text-sm">Share your idea or reference images with our artisans.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 border-2 border-primary bg-secondary rounded-full"></div>
                                    <h4 className="text-xl font-heading text-white mb-2 flex items-center gap-2"><Layers className="w-5 h-5 text-primary" /> Digital 3D Design</h4>
                                    <p className="text-gray-400 font-light text-sm">We create a digital 3D jewellery design layout for you.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 border-2 border-primary bg-secondary rounded-full"></div>
                                    <h4 className="text-xl font-heading text-white mb-2">Price Estimation</h4>
                                    <p className="text-gray-400 font-light text-sm">We provide an exact price estimation based on approved elements.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 border-2 border-primary bg-secondary rounded-full"></div>
                                    <h4 className="text-xl font-heading text-white mb-2">Production Begins</h4>
                                    <p className="text-gray-400 font-light text-sm">Once approved, the forging and setting begins.</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-accent text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-heading text-secondary mb-6">Ready to Design Your Forever Ring?</h2>
                    <p className="text-gray-600 font-light text-xl mb-10">
                        Book a consultation today and start creating something timeless.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I would like to start customizing my own unique jewellery piece. How do we begin?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary text-white text-sm tracking-widest uppercase hover:bg-secondary transition-colors duration-300">
                            Start Customisation
                        </a>
                        <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I would like to book an appointment to visit your studio and discuss some designs." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-secondary text-secondary text-sm tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors duration-300">
                            Book Appointment
                        </a>
                        <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I have a few questions about your custom jewellery services." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-secondary text-secondary text-sm tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
