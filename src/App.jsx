import { useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Background from "./components/Background";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
    const location = useLocation();

    // Hide navbar ONLY on quiz page
    const hideNavbar = location.pathname === "/quiz";

    return (
        <main className="bg-dark-bg min-h-screen text-white relative">
            <Background />
            <div className="relative z-10">

                {!hideNavbar && <Navbar />}

                <Hero />
                <About />
                <Features />
                <Schedule />
                <Team />
                <Registration />
                <Footer />
            </div>
        </main>
    );
}

export default App;
