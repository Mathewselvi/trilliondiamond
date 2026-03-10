import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export default function Loader() {
    const text = "TRILLION DIAMOND";

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 } }}
        >
            <div className="overflow-hidden flex flex-col items-center">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="mb-8"
                >
                    <Gem className="w-12 h-12 text-primary" strokeWidth={1} />
                </motion.div>

                <div className="flex items-center overflow-hidden">
                    <motion.div
                        className="font-heading text-xl md:text-3xl lg:text-4xl tracking-[0.3em] font-light text-white flex items-center justify-center whitespace-nowrap"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } }
                        }}
                    >
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { y: 100 },
                                    visible: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden"
            >
                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-primary/60 text-xs tracking-widest uppercase"
                >
                    Premium Custom Studio
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
