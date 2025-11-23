import { motion } from 'framer-motion';

const Schedule = () => {
    return (
        <section id="schedule" className="py-20 px-4 bg-dark-card/30">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Bootcamp <span className="text-neon-green">Schedule</span>
                </motion.h2>

                <div className="space-y-20">
                    {/* Day 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/day-1.png"
                                alt="Day 1 Schedule"
                                className="rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.2)] border border-gray-800 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="text-2xl font-bold text-neon-blue mb-4">Day 01: Foundations</h3>
                            <p className="text-gray-300 mb-4">
                                Kickstart your journey with programming myths, reality checks, and setting up your professional coding environment.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-blue rounded-full" /> Programming Foundations</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-blue rounded-full" /> Environment Setup</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Day 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="flex flex-col md:flex-row-reverse items-center gap-8"
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/day-2.png"
                                alt="Day 2 Schedule"
                                className="rounded-xl shadow-[0_0_20px_rgba(188,19,254,0.2)] border border-gray-800 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-left md:text-right">
                            <h3 className="text-2xl font-bold text-neon-purple mb-4">Day 02: Deep Dive</h3>
                            <p className="text-gray-300 mb-4">
                                Explore Full Stack Development, Data Structures & Algorithms, and Cloud Computing basics.
                            </p>
                            <ul className="space-y-2 text-gray-400 flex flex-col items-start md:items-end">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-purple rounded-full" /> Full Stack Intro</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-purple rounded-full" /> DSA Basics</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-purple rounded-full" /> Cloud Computing</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Day 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/day-3.png"
                                alt="Day 3 Schedule"
                                className="rounded-xl shadow-[0_0_20px_rgba(57,255,20,0.2)] border border-gray-800 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="text-2xl font-bold text-neon-green mb-4">Day 03: Advanced & Expert</h3>
                            <p className="text-gray-300 mb-4">
                                Dive into AI/ML foundations and hear from industry experts.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-green rounded-full" /> AI/ML Foundations</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-neon-green rounded-full" /> Industry Expert Session</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
