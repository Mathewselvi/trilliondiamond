import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Customization', path: '/customization' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <Diamond className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-primary md:text-white'} transition-colors duration-300 group-hover:scale-110`} />
                        <span className={`font-heading text-2xl font-bold tracking-wider ${scrolled ? 'text-secondary' : 'text-secondary md:text-white'} uppercase`}>
                            Trillion<span className="text-primary">Diamond</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${location.pathname === link.path
                                    ? 'text-primary font-medium'
                                    : scrolled ? 'text-gray-600' : 'text-black md:text-white/90'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/918848201874?text=Hello Trillion Diamond! I would like to request an appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-primary text-white text-sm tracking-widest uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
                        >
                            Book Appt
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-secondary' : 'text-primary'} hover:text-primary transition-colors`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-3 py-4 text-center text-sm tracking-widest uppercase border-b border-gray-50 ${location.pathname === link.path ? 'text-primary font-medium' : 'text-secondary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex justify-center">
                                <a
                                    href="https://wa.me/918848201874?text=Hello Trillion Diamond! I would like to request an appointment."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-primary text-white text-sm tracking-widest uppercase block text-center w-full max-w-xs"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
