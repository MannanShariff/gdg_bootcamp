import { motion } from 'framer-motion';

const Registration = () => {
    return (
        <section className="py-20 px-4 bg-dark-bg relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-12 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.1)]"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your <span className="text-neon-blue">Journey?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Limited seats available. Register now to secure your spot in the Bootcamp 2025.
                    </p>

                    <a
                        href="https://forms.gle/19wjrmogakbnY8Ap7" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-neon-blue text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300"
                    >
                        Click Here to Register
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
