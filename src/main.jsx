import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Quiz from "./components/Quiz.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
