import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function ProductCard({ product, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group cursor-pointer"
            onClick={() => onClick(product)}
        >
            <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-sm bg-gray-50">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-500 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-5 h-5 text-secondary" />
                    </div>
                </div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
            </div>
            <div className="text-center">
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">{product.category}</p>
                <h3 className="text-xl font-heading text-secondary mb-1">{product.name}</h3>
                <p className="text-primary text-sm tracking-wider">{product.price}</p>
            </div>
        </motion.div>
    );
}
