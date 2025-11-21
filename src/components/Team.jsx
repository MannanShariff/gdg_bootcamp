import { motion } from 'framer-motion';

// Using placeholders initially, will replace with uploaded images if I can determine which is which.
// Based on file names, I don't have explicit "team member" images, but the user said "Section to add 3 photos (I will upload them)".
// I see 4 uploaded images: schedule_day3, schedule_day1, schedule_day2, coming_soon.
// Wait, the user said "Meet the Team / Organizers - Section to add 3 photos (I will upload them)".
// Maybe they haven't uploaded the team photos yet? Or maybe I should use placeholders for now.
// I'll use generic placeholders or the same images if needed, but better to use placeholders.

const teamMembers = [
    {
        id: 1,
        name: "Rahul O P",
        role: "GDG Lead",
        photo: "/team/rahul.jpg"
    },
    {
        id: 2,
        name: "Sharashchandra V P",
        role: "Cloud Facilitator",
        photo: "/team/sharashchandra.jpg"
    },
    {
        id: 3,
        name: "S N Swathi",
        role: "Cloud Lead",
        photo: "/team/swathi.jpg"
    },
    {
        id: 4,
        name: "Rida Fatima",
        role: "Design Lead",
        photo: "/team/rida.jpg"
    },
    {
        id: 5,
        name: "Karthik Adiga",
        role: "Full Stack Lead",
        photo: "/team/karthik.jpg"
    },
    {
        id: 6,
        name: "Mannan Shariff",
        role: "Full Stack Co-Lead",
        photo: "/team/mannan.jpg"
    },
    {
        id: 7,
        name: "Amshu",
        role: "AIML Lead",
        photo: "/team/amshu.jpg"
    },
    {
        id: 8,
        name: "Sumit Kumar",
        role: "AIML Co-Lead",
        photo: "/team/sumit.jpg"
    },
    {
        id: 9,
        name: "Rakesh",
        role: "DSA Lead",
        photo: "/team/rakesh.jpg"
    },
    {
        id: 10,
        name: "Mahesh R M",
        role: "DSA Co-Lead",
        photo: "/team/mahesh.jpg"
    },
    {
        id: 11,
        name: "Ullas Rao Pawar",
        role: "Events Lead",
        photo: "/team/ullas.jpg"
    },
    {
        id: 12,
        name: "Adithya S",
        role: "Events Co-Lead",
        photo: "/team/adithya.jpg"
    },
    {
        id: 13,
        name: "Manjushree V N",
        role: "Digital Marketing Lead",
        photo: "/team/manjushree.jpg"
    },
    {
        id: 14,
        name: "Pavan V Vanjre",
        role: "Digital Marketing Co-Lead",
        photo: "/team/pavan.jpg"
    }
];


const Team = () => {
    return (
        <section id="team" className="py-20 px-4 bg-dark-bg">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Meet the <span className="text-neon-pink">Organizers</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />

                            <div className="relative bg-dark-card rounded-xl overflow-hidden border border-gray-800 aspect-square">

                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-neon-blue text-sm">{member.role}</p>
                                </div>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
