import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Our Studio | Trillion Diamond</title>
                <meta name="description" content="Welcome to your personal ring studio. We are a custom wedding & engagement ring studio in Ernakulam." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-secondary text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="/images/rings/Trillion/Half_eternity_ring.WEBP"
                        alt="About Us Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight"
                    >
                        Welcome to Your <br /> Personal Ring Studio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-200 font-light text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        We are not a tray-based jewellery store. We are a custom wedding & engagement ring studio.
                    </motion.p>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative h-96 md:h-[600px]"
                        >
                            <img
                                src="/images/rings/Trillion/Solitaire_ring_.WEBP"
                                alt="Custom Wedding Ring Studio"
                                className="w-full h-full object-cover rounded-sm shadow-xl"
                            />
                            <div className="absolute top-10 -right-10 w-2/3 h-2/3 border border-primary/30 -z-10 hidden lg:block" />
                        </motion.div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-2 block">Our Ethos</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-secondary mb-6 leading-tight">
                                Your wedding ring is not for one day. <br />
                                <span className="text-primary">It is for a lifetime.</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                Instead of choosing from 25 ready-made designs, we help you create something truly yours.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    "Select your preferred metal",
                                    "Choose diamond type & quality",
                                    "Set your budget",
                                    "Customise every detail",
                                    "See a 3D digital design before production"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-gray-100 mt-8">
                                <p className="text-2xl font-heading text-secondary mb-2">
                                    We have 1,00,000+ ring models and unlimited custom possibilities.
                                </p>
                                <p className="text-gray-500 italic">
                                    "If you can imagine it — we can create it."
                                </p>
                            </div>

                            <div className="pt-6">
                                <Link to="/customization" className="inline-block px-10 py-4 bg-primary text-white text-sm tracking-widest uppercase hover:bg-black transition-colors duration-300">
                                    Start Customising
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
