import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import { motion } from 'framer-motion';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <motion.main
                className="flex-grow w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <Outlet />
            </motion.main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}
