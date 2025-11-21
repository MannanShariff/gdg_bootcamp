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
        navigate("/"); // <-- FIXED
      }, 800);
    } else {
      setMessage("❌ Wrong answer! Try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">

      <img 
        src="/assets/quiz.jpg"
        alt="Quiz"
        className="w-full max-w-lg mb-8"
      />

      <h1 className="text-3xl font-bold mb-6">What does this equal? 👢 + ⛺ = ❓</h1>

      <div className="grid gap-4 w-full max-w-md">
        <button onClick={() => handleClick("bootcamp")} className="bg-gray-700 px-6 py-3 rounded-lg font-bold">BOOTCAMP</button>
        <button onClick={() => handleClick("campboot")} className="bg-gray-700 px-6 py-3 rounded-lg font-bold">CampBoot</button>
        <button onClick={() => handleClick("tentboot")} className="bg-gray-700 px-6 py-3 rounded-lg font-bold">TentBoot</button>
        <button onClick={() => handleClick("adventure")} className="bg-gray-700 px-6 py-3 rounded-lg font-bold">Adventure</button>
      </div>

      {message && <p className="mt-6 text-xl font-semibold text-gray-400">{message}</p>}
    </section>
  );
};

export default Quiz;
