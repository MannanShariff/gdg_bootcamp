import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Bootcamp 2025</h3>
                    <p className="text-gray-500">Google Developers Group • On Campus • Dr AIT</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://www.instagram.com/gdg_drait?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-gray-400 hover:text-neon-pink transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/groups/8102828" className="text-gray-400 hover:text-neon-blue transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:gdgoncampus.drait@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>

                <div className="text-gray-600 text-sm">
                    © 2025 GDG On Campus Dr AIT. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
