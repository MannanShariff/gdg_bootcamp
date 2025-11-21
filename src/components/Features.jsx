import { motion } from 'framer-motion';
import { Code2, Rocket, Users, BrainCircuit } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="w-8 h-8 text-neon-blue" />,
        title: "Full Stack Development",
        description: "Master the art of building web applications from front to back using modern technologies."
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
        title: "AI & Machine Learning",
        description: "Get introduced to the fundamentals of AI and how to integrate models into your apps."
    },
    {
        icon: <Rocket className="w-8 h-8 text-neon-green" />,
        title: "Project Building",
        description: "Don't just learn theory. Build real projects that you can add to your portfolio."
    },
    {
        icon: <Users className="w-8 h-8 text-neon-pink" />,
        title: "Networking",
        description: "Connect with like-minded peers and mentors from the tech industry."
    }
];

const Features = () => {
    return (
        <section className="py-20 px-4 bg-dark-card/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    What You Will <span className="text-neon-blue">Learn</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-neon-blue/50 transition-colors duration-300 group hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
                        >
                            <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
