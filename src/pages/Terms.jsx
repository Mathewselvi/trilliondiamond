import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Terms() {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Trillion Diamond</title>
                <meta name="description" content="Terms and conditions, buyback policy, and exchange policy for Trillion Diamond." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-secondary text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <img
                        src="/images/rings/Trillion/Half_eternity_ring.WEBP"
                        alt="Terms and Conditions Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight"
                    >
                        Terms & <span className="text-primary">Conditions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-200 font-light text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Our commitment to transparency, quality, and your satisfaction.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-heading text-secondary border-b border-primary/20 pb-4">
                                1. Buyback & Exchange Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                At Trillion Diamond, we understand that preferences may change or you may wish to upgrade your jewelry over time. We offer industry-leading policies to ensure the enduring value of your purchase.
                            </p>
                            <div className="bg-accent p-8 rounded-sm mt-6 border-l-4 border-primary">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                            <span className="text-primary font-bold text-xl">80%</span>
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="font-bold text-secondary text-xl">Lifetime Buyback</h3>
                                            <p className="text-gray-600 font-light mt-2 leading-relaxed">We offer an 80% buyback value on the prevailing market price of the materials (gold/diamonds) for all Trillion Diamond jewelry, subject to quality checks and original certification.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                            <span className="text-primary font-bold text-xl">90%</span>
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="font-bold text-secondary text-xl">Lifetime Exchange</h3>
                                            <p className="text-gray-600 font-light mt-2 leading-relaxed">If you wish to exchange your existing Trillion Diamond jewelry for a new piece, we provide a 90% exchange value based on the prevailing market rates.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-heading text-secondary border-b border-primary/20 pb-4">
                                2. Product Information & Pricing
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light text-lg space-y-3">
                                <li>All prices are subject to change based on fluctuating market rates for gold, diamonds, and other precious materials.</li>
                                <li>As each piece is meticulously handcrafted, slight variations in total weight and dimensions may occur compared to digital renders or standard models.</li>
                                <li>Diamond grading (Color, Clarity, Cut, Carat) is certified by independent, recognized laboratories (e.g., IGI) where applicable.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-heading text-secondary border-b border-primary/20 pb-4">
                                3. Custom Orders & Bespoke Design
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light text-lg space-y-3">
                                <li>Custom jewelry designs require a non-refundable advance payment before production commences.</li>
                                <li>Once a 3D digital design is approved by the client, any subsequent structural changes may incur additional charges.</li>
                                <li>Custom and engraved pieces are strictly non-returnable unless there is a verifiable manufacturing defect.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-heading text-secondary border-b border-primary/20 pb-4">
                                4. Care & Maintenance
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light text-lg space-y-3">
                                <li>We offer complimentary routine cleaning and inspection for all Trillion Diamond jewelry at our studio.</li>
                                <li>Damage resulting from improper care, accidental damage, exposure to harsh chemicals, or alterations made by third-party jewelers will void any warranty and may affect buyback/exchange values.</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}
