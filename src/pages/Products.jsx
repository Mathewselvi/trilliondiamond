import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import productsData from '../data/products.json';

const categories = ['All', 'Wedding Rings', 'Other Rings', 'Neck Jewellery', 'Bracelets & Hand Jewellery', 'Foot Jewellery', 'Earrings'];

export default function Products() {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (location.state && location.state.openProductId) {
            const product = productsData.find(p => p.id === location.state.openProductId);
            if (product) {
                setSelectedProduct(product);
                setActiveCategory(product.category);
            }
        }
    }, [location.state]);

    const filteredProducts = activeCategory === 'All'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>Our Collections | Trillion Diamond</title>
                <meta name="description" content="Explore our exquisite collection of engagement rings and custom diamond jewellery. Masterfully crafted in gold and platinum." />
            </Helmet>

            {/* Header */}
            <section className="bg-secondary text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/rings/Trillion/Vintage_ring_.JPG')] bg-cover bg-center opacity-50" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading mb-6"
                    >
                        Our Speciality - Wedding Rings
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 font-light text-lg"
                    >
                        We offer 16 iconic wedding ring styles with thousands of variations in each category.
                    </motion.p>
                </div>
            </section>

            {/* Custom Reference Banner */}
            <section className="bg-accent py-12 border-b border-primary/20 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-4">Have a Design in Mind?</h2>
                    <p className="text-gray-600 font-light mb-6">
                        If you have a reference picture or design from anywhere in the world, just show it to us. Our artisans will craft the <strong className="text-secondary font-medium">exact same piece</strong> exclusively for you.
                    </p>
                    <a href="https://wa.me/918848201874?text=Hello Trillion Diamond! I have a reference picture of a jewellery design that I would love to custom make. Can you help me with this?" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-white text-xs tracking-widest uppercase hover:bg-secondary transition-colors duration-300">
                        Share Reference Design
                    </a>
                </div>
            </section>

            {/* Filters & Grid */}
            <section className="py-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat, idx) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-primary hover:text-primary'
                                    } border`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence>
                            {filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onClick={setSelectedProduct}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    )}

                </div>
            </section>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 z-10 text-secondary/60 hover:text-black hover:rotate-90 transition-all duration-500"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" strokeWidth={1.5} />
                            </button>

                            {/* Modal Image */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Modal Details */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center bg-accent">
                                <span className="text-primary text-xs tracking-widest uppercase mb-4 block">
                                    {selectedProduct.category}
                                </span>
                                <h2 className="text-3xl font-heading text-secondary mb-2">
                                    {selectedProduct.name}
                                </h2>
                                <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
                                    {selectedProduct.material}
                                </p>

                                <div className="w-12 h-px bg-primary mb-6" />

                                <p className="text-gray-600 font-light mb-4 leading-relaxed">
                                    {selectedProduct.description}
                                </p>

                                {selectedProduct.meaning && (
                                    <div className="mb-8 pt-6 border-t border-primary/20 space-y-4">
                                        <div className="flex flex-col">
                                            <span className="text-secondary/50 text-xs tracking-[0.2em] uppercase font-semibold mb-1">Signature</span>
                                            <span className="text-secondary font-light text-lg">{selectedProduct.main_feature}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-primary/70 text-xs tracking-[0.2em] uppercase font-semibold mb-1">Meaning</span>
                                            <span className="text-secondary font-heading italic text-xl">"{selectedProduct.meaning}"</span>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto space-y-4">
                                    <p className="text-sm text-gray-500">
                                        Pricing varies based on diamond specifications.
                                    </p>
                                    <a
                                        href={`https://wa.me/918848201874?text=Hello Trillion Diamond! I am very interested in learning more about the ${selectedProduct.name} (${selectedProduct.material}) from your website. Could you please provide more details?`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 tracking-widest uppercase text-xs font-semibold"
                                    >
                                        <MessageCircle className="w-4 h-4" /> Inquire on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
