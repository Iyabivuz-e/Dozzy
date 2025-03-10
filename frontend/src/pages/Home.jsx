// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-20 px-6">
      <section className="max-w-6xl mx-auto mt-16 md:mt-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Sun className="h-16 w-16 text-yellow-500 animate-pulse" />
            <Moon
              className="h-16 w-16 text-indigo-700 absolute -bottom-2 -right-2 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-purple-500 to-indigo-700 bg-clip-text text-transparent">
          Discover Your Natural Sleep Rhythm
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Are you a Morning Lark or a Night Owl? Take our machine
          learning-powered quiz to find out your natural chronotype and optimize
          your daily routine.
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 hover:scale-105"
        >
          Take the Quiz
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <section className="max-w-6xl mx-auto mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <Sun className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            AI-Powered Analysis
          </h3>
          <p className="text-gray-600">
            Our machine learning model analyzes your habits to determine if
            you're naturally more productive in the morning or evening.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
              <path d="M8 14h0"></path>
              <path d="M16 14h0"></path>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Self-Improving System
          </h3>
          <p className="text-gray-600">
            Your feedback helps our model get smarter over time, creating a more
            accurate assessment for everyone.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <Moon className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Personalized Insights
          </h3>
          <p className="text-gray-600">
            Get tailored recommendations to optimize your schedule based on your
            natural energy patterns throughout the day.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-24 md:mt-32 px-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:p-12 md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Thousands of Others
              </h2>
              <p className="text-indigo-100 mb-8">
                Discover how understanding your natural sleep rhythm can
                transform your productivity and well-being.
              </p>
              <Link
                to="/quiz"
                className="inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block md:w-1/2 bg-indigo-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <Sun className="absolute h-20 w-20 text-yellow-400 animate-pulse" />
                  <Moon
                    className="absolute h-20 w-20 text-indigo-300 animate-pulse"
                    style={{ animationDelay: "1.2s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
