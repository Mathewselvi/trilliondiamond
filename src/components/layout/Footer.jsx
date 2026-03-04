import { Link } from 'react-router-dom';
import { Diamond, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/20 pb-12">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <Diamond className="w-8 h-8 text-primary" />
                            <span className="font-heading text-2xl font-bold tracking-wider uppercase text-white">
                                Trillion<span className="text-primary">Diamond</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting timeless diamond elegance with exceptional purity and masterful artistry. Find your perfect sparkle.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-heading text-lg mb-6 text-white uppercase tracking-widest">Discover</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Collections</Link></li>
                            <li><Link to="/customization" className="hover:text-primary transition-colors">Bespoke Design</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="md:col-span-1">
                        <h4 className="font-heading text-lg mb-6 text-white uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Vaduthala, Ernakulam<br />Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+918848201874" className="hover:text-primary transition-colors">+91 8848201874</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:mathewselvi29@gmail.com" className="hover:text-primary transition-colors">mathewselvi29@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications & Trust */}
                    <div className="md:col-span-1">
                        <h4 className="font-heading text-lg mb-6 text-white uppercase tracking-widest">Assurance</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded">
                                <span className="font-bold text-primary">IGI</span>
                                <span className="text-sm text-gray-300">Certified Diamonds</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded">
                                <span className="font-bold text-primary">BIS</span>
                                <span className="text-sm text-gray-300">Hallmarked 9K-22K Gold</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded">
                                <span className="font-bold text-primary">CVD</span>
                                <span className="text-sm text-gray-300">Lab & Natural Options</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Trillion Diamond. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
