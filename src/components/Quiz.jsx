import { useState } from "react";

const Quiz = () => {
  const [message, setMessage] = useState("");

  const correctAnswer = "bootcamp";

  const handleClick = (answer) => {
    if (answer === correctAnswer) {
      setMessage("Correct! Redirecting...");
      setTimeout(() => {
        window.location.href = "/home"; // redirect to actual app
      }, 1200);
    } else {
      setMessage("❌ Wrong answer! Try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">

      {/* Your uploaded image */}
      <img 
        src="/quiz.png"
        alt="Quiz"
        className="w-full max-w-lg mb-8"
      />

      <h1 className="text-3xl font-bold mb-6">What does this equal? 👢 + ⛺ = ❓</h1>

      <div className="grid gap-4 w-full max-w-md">
        <button 
          onClick={() => handleClick("bootcamp")}
          className="bg-neon-blue px-6 py-3 rounded-lg font-bold hover:bg-neon-purple transition"
        >
          BOOTCAMP
        </button>

        <button 
          onClick={() => handleClick("campboot")}
          className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition"
        >
          CampBoot
        </button>

        <button 
          onClick={() => handleClick("tentboot")}
          className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition"
        >
          TentBoot
        </button>

        <button 
          onClick={() => handleClick("adventure")}
          className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition"
        >
          Adventure
        </button>
      </div>

      {message && <p className="mt-6 text-xl font-semibold text-neon-green">{message}</p>}
    </section>
  );
};

export default Quiz;
