import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800 py-4 px-6 flex justify-between items-center">

      {/* Logo */}
      <h1 
        className="text-white font-bold text-xl cursor-pointer"
        onClick={() => handleScroll("hero")}
      >
        GDG Bootcamp
      </h1>

      {/* Menu */}
      <div className="flex gap-6 text-white">
        <button
          onClick={() => handleScroll("schedule")}
          className={`hover:text-neon-blue transition ${
            active === "schedule" ? "text-neon-blue font-semibold" : ""
          }`}
        >
          Schedule
        </button>

        <button
          onClick={() => handleScroll("team")}
          className={`hover:text-neon-blue transition ${
            active === "team" ? "text-neon-blue font-semibold" : ""
          }`}
        >
          Core Team
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
