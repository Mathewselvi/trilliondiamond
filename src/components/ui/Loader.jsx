import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader() {
    const text = "TRILLION DIAMOND";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } }}
        >
            <div className="flex items-center">
                <motion.div
                    className="relative font-heading text-xl md:text-3xl lg:text-5xl tracking-[0.2em] font-light text-primary flex items-center justify-center whitespace-nowrap"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split('').map((char, index) => (
                        <motion.span key={index} variants={childVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    );
}
