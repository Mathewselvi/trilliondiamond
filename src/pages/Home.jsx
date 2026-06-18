import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Diamond, Gem } from 'lucide-react';
import products from '../data/products.json';

const heroImages = products.map(p => p.image).filter(Boolean);

const featuredProducts = [
    {
        id: 1,
        productId: 1,
        name: "Solitaire Collection",
        category: "Wedding Rings",
        image: "/images/rings/Trillion/Solitaire_ring_.WEBP",
    },
    {
        id: 2,
        productId: 5,
        name: "Vintage Craftsmanship",
        category: "Wedding Rings",
        image: "/images/rings/Trillion/Vintage_ring_.JPG",
    },
    {
        id: 3,
        productId: 13,
        name: "Eternity Bands",
        category: "Wedding Rings",
        image: "/images/rings/Trillion/Eternity_ring_.WEBP",
    }
];

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Trillion Diamond | Custom Luxury Jewellery in Ernakulam</title>
                <meta name="description" content="Discover premium custom diamond jewellery and engagement rings at Trillion Diamond. BIS Gold & IGI Certified Natural and Lab-Grown diamonds." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    {heroImages.map((img, index) => (
                        <motion.div
                            key={img}
                            initial={false}
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 1.15,
                                zIndex: index === currentImageIndex ? 10 : 0,
                                display: Math.abs(index - currentImageIndex) <= 1 || index === 0 || index === heroImages.length - 1 ? 'block' : 'none'
                            }}
                            transition={{
                                opacity: { duration: 0 },
                                scale: index === currentImageIndex ? { duration: 6, ease: "linear" } : { duration: 0 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={img}
                                alt={`Luxury Custom Jewellery ${index + 1}`}
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                <div className="relative z-20 text-center px-4 mt-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="block text-primary text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        Trillion Diamond
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight"
                    >
                        Crafting Rings That <br /> Last a Lifetime
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-white/90 font-light mb-10 max-w-2xl mx-auto"
                    >
                        Design your engagement or wedding ring your way — choose your metal, your diamond, your budget. From concept to 3D design to final creation, we craft jewellery as unique as your love.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
                    >
                        <Link to="/customization" className="px-8 py-3 bg-primary text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                            Start Customising
                        </Link>
                        <Link to="/products" className="px-8 py-3 border border-white bg-black/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                            Explore Wedding Rings
                        </Link>
                        <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I would like to book a consultation to discuss a custom jewellery design." target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                            Book Consultation
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-4">Curated Masterpieces</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {featuredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                onClick={() => navigate('/products', { state: { openProductId: product.productId } })}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-sm">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 w-full text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="inline-block px-6 py-2 bg-white text-secondary text-xs tracking-widest uppercase">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">{product.category}</p>
                                    <h3 className="text-xl font-heading text-secondary">{product.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/products" className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase hover:text-black transition-colors border-b border-primary pb-1">
                            View All Collections <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-accent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-primary text-sm tracking-[0.2em] uppercase mb-2 block">Our Promise</span>
                                <h2 className="text-3xl md:text-5xl font-heading text-secondary mb-6 line-clamp-2 leading-tight">
                                    Our Promise
                                </h2>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    Every Trillion Diamond piece is meticulously crafted in our Vaduthala studio. We blend traditional artistry with modern precision to deliver exceptional fine jewellery.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "1 Lakh+ Ring Models",
                                    "Fully Customisable",
                                    "3D Design Preview",
                                    "Budget-Friendly Options",
                                    "Natural & Lab Diamonds",
                                    "Certified Quality",
                                    "Lifetime Symbol Jewellery"
                                ].map((promise, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <ShieldCheck className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-sm font-medium text-secondary">{promise}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/images/rings/Trillion/Pave_ring_.WEBP"
                                alt="Jewellery Craftsmanship"
                                className="w-full h-auto rounded-sm shadow-2xl"
                            />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-4 shadow-xl hidden md:block">
                                <div className="border border-primary/20 w-full h-full flex flex-col items-center justify-center p-4 text-center">
                                    <Diamond className="text-primary w-8 h-8 mb-2" />
                                    <span className="font-heading text-2xl text-secondary block">15+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Years of Trust</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Custom Reference Banner */}
            <section className="py-24 relative overflow-hidden bg-white text-center border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                        Got a Reference?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading text-secondary mb-6">Found a design you love?</h2>
                    <p className="text-gray-600 font-light text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        If you have a design in mind or a reference picture from anywhere, just show it to us. We will craft the <strong className="text-secondary font-medium">exact same piece</strong> exclusively for you.
                    </p>
                    <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I have a reference picture of a jewellery design that I would love to recreate. Can we discuss the possibilities?" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-secondary text-secondary text-sm tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors duration-300">
                        Share Reference Picture
                    </a>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="/images/rings/Trillion/Cathedral_Ring.WEBP"
                        alt="Jewellery Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                        Custom Jewellery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Not just wedding rings.</h2>
                    <p className="text-gray-300 font-light text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        You can customise: <span className="text-white font-medium">Engagement Rings, Couple Bands, Pendants, Earrings, Bracelets, Anniversary Rings.</span>
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-primary/80 mb-10 font-medium">
                        <span>Send Your Design</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>Get 3D Preview</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>Approve</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>We Create</span>
                    </div>
                    <Link to="/customization" className="inline-block px-10 py-4 bg-primary text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                        Start Customisation
                    </Link>
                </div>
            </section>
        </>
    );
}
