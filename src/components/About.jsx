import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 px-4 bg-dark-bg relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-8"
                >
                    About the <span className="text-neon-green">Bootcamp</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-lg leading-relaxed"
                >
                    Join us for an immersive 3-day journey into the world of technology.
                    Whether you're a complete beginner or looking to sharpen your skills,
                    this bootcamp is designed to give you hands-on experience with the latest tools and frameworks.
                    Learn from industry experts and senior developers, build real-world projects, and grow your network.
                </motion.p>
            </div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] -z-0" />
        </section>
    );
};

export default About;
