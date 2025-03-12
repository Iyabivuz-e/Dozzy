// src/pages/About.jsx
import { Link } from 'react-router-dom';
import { Sun, Moon, Brain, RefreshCw, UserCheck, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About SleepSync
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Helping you understand your natural sleep rhythm through machine
          learning.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At SleepSync, we believe that understanding your natural
                chronotype is key to optimizing your daily routine for better
                productivity, health, and overall well-being.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to provide a simple, accurate, and science-based
                tool that helps individuals identify whether they're naturally a
                Morning Lark or a Night Owl, and to offer personalized
                recommendations based on that information.
              </p>
              <p className="text-gray-600">
                We're committed to continuous improvement through user feedback,
                ensuring our machine learning model becomes more accurate over
                time.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="bg-indigo-50 rounded-full p-6 h-48 w-48 flex items-center justify-center">
                <div className="relative">
                  <Sun className="h-12 w-12 text-yellow-500 absolute top-0 right-0" />
                  <Moon className="h-12 w-12 text-indigo-600 absolute bottom-0 left-0" />
                  <div className="h-16 w-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 absolute top-8 left-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          How SleepSync Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <Brain className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Our machine learning model analyzes your responses to determine
              your natural chronotype with high accuracy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <UserCheck className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Feedback</h3>
            <p className="text-gray-600">
              After receiving your results, you can provide feedback on the
              accuracy, which helps improve our predictions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <RefreshCw className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Our model is periodically retrained with new feedback data,
              becoming more accurate over time.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          The Science Behind Chronotypes
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Morning Larks</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-700">
                    Characteristics
                  </span>
                </div>
                <ul className="space-y-2 pl-7 text-gray-700">
                  <li>Naturally wake up early, often before sunrise</li>
                  <li>Feel most alert and productive in the morning</li>
                  <li>Experience a decline in energy in the evening</li>
                  <li>Typically go to bed earlier</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Morning Larks have a circadian rhythm that peaks earlier in the
                day. Studies suggest approximately 40% of the population falls
                into this category.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Night Owls</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Moon className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="font-medium text-indigo-700">
                    Characteristics
                  </span>
                </div>
                <ul className="space-y-2 pl-7 text-gray-700">
                  <li>Naturally stay up late and wake up later</li>
                  <li>Feel most alert and productive in the evening</li>
                  <li>Struggle with early morning wake-ups</li>
                  <li>Have more energy as the day progresses</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Night Owls have a circadian rhythm that shifts later in the day.
                Research indicates about 30% of the population falls into this
                category, with the rest being intermediates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ready to Discover Your Chronotype?
        </h2>
        <p className="text-gray-600 mb-6">
          Take our short assessment and gain insights into your sleep patterns.
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 hover:scale-105"
        >
          Take the Quiz
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default About;
