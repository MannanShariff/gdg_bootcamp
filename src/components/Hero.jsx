import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Updated Subheading */}
                    <h2 className="text-neon-blue font-medium tracking-widest mb-4 uppercase text-sm md:text-base">
                        Welcome Juniors to the World of Tech 2.0
                    </h2>

                    {/* Updated Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        BOOT CAMP 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                            &nbsp;2025
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Google Developers Group • On Campus • Dr AIT
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href="https://forms.gle/19wjrmogakbnY8Ap7" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-full hover:bg-neon-green hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
                    >
                        Register Now
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
