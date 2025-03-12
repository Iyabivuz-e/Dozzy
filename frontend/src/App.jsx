// src/App.jsx
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
// import Statistics from "./pages/Statistics";
// import About from "./pages/About";

function App() {
  const [quizResults, setQuizResults] = useState(null);

  return (
        <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <h1>Hellow wordl</h1>
      <Navbar />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quiz"
              element={<Quiz setQuizResults={setQuizResults} />}
            />
            <Route
              path="/results"
              element={<Results results={quizResults} />}
            />
            {/* <Route path="/statistics" element={<Statistics />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
      </main>
      <Footer />
    </div>
        </BrowserRouter>
  );
}

export default App;
