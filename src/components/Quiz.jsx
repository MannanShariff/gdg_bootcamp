import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const correctAnswer = "bootcamp";

  const handleClick = (answer) => {
    if (answer === correctAnswer) {
      setMessage("Correct! Redirecting...");
      setTimeout(() => {
        navigate("/website"); 
      }, 800);
    } else {
      setMessage("❌ Wrong answer! Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10 flex justify-center items-center">

      {/* Container: side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl w-full">

        {/* Left: Image */}
        <img 
          src="/assets/quiz.jpg"
          alt="Quiz"
          className="w-full max-w-md rounded-lg shadow-lg"
        />

        {/* Right: Quiz Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-md">

          <h1 className="text-3xl font-bold mb-6">
            What does this equal? 👢 + ⛺ = ❓
          </h1>

          <div className="grid gap-4 w-full">
            <button 
              onClick={() => handleClick("bootcamp")} 
              className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition w-full"
            >
              BOOTCAMP
            </button>

            <button 
              onClick={() => handleClick("campboot")} 
              className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition w-full"
            >
              CampBoot
            </button>

            <button 
              onClick={() => handleClick("tentboot")} 
              className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition w-full"
            >
              TentBoot
            </button>

            <button 
              onClick={() => handleClick("adventure")} 
              className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition w-full"
            >
              Adventure
            </button>
          </div>

          {message && (
            <p className="mt-6 text-xl font-semibold text-gray-400">
              {message}
            </p>
          )}

        </div>

      </div>
    </section>
  );
};

export default Quiz;
