// src/pages/Results.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sun,
  Moon,
  ThumbsUp,
  ThumbsDown,
  Share2,
  ArrowRight,
} from "lucide-react";

const Results = ({ results }) => {
  const [feedback, setFeedback] = useState(null);
  const [showShareMessage, setShowShareMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!results) {
      navigate("/quiz");
    }
  }, [results, navigate]);

  if (!results) return null;

  const { chronotype, confidence } = results;
  const isLark = chronotype === "Morning Lark";

  const handleFeedback = (isPositive) => {
    setFeedback(isPositive);
    // In a real app, this would send data to your backend
    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  };

  

  const handleShare = () => {
    // In a real app, this would open a share dialog
    setShowShareMessage(true);
    setTimeout(() => {
      setShowShareMessage(false);
    }, 3000);
  };

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          className={`py-12 px-6 md:px-12 text-center ${
            isLark
              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
              : "bg-gradient-to-r from-indigo-600 to-purple-700"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm p-4 rounded-full">
            {isLark ? (
              <Sun className="h-12 w-12 text-white" />
            ) : (
              <Moon className="h-12 w-12 text-white" />
            )}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            You're a {chronotype}!
          </h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            Our AI model is {confidence}% confident in this prediction based on
            your responses.
          </p>
        </div>
        <div className="p-6 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              What does this mean?
            </h2>
            {isLark ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  As a{" "}
                  <span className="font-semibold text-yellow-600">
                    Morning Lark
                  </span>
                  , you naturally tend to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start bg-yellow-50 p-4 rounded-xl">
                    <div className="bg-yellow-100 p-1 rounded mr-3 mt-0.5">
                      <Sun className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">
                      Feel most alert and productive in the morning hours
                    </span>
                  </li>
                  <li className="flex items-start bg-yellow-50 p-4 rounded-xl">
                    <div className="bg-yellow-100 p-1 rounded mr-3 mt-0.5">
                      <Sun className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">
                      Wake up naturally early, often without an alarm
                    </span>
                  </li>
                  <li className="flex items-start bg-yellow-50 p-4 rounded-xl">
                    <div className="bg-yellow-100 p-1 rounded mr-3 mt-0.5">
                      <Sun className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">
                      Have your peak energy levels during the first half of the
                      day
                    </span>
                  </li>
                  <li className="flex items-start bg-yellow-50 p-4 rounded-xl">
                    <div className="bg-yellow-100 p-1 rounded mr-3 mt-0.5">
                      <Sun className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">
                      Experience a decline in energy and alertness in the
                      evening
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">
                  As a{" "}
                  <span className="font-semibold text-indigo-600">
                    Night Owl
                  </span>
                  , you naturally tend to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start bg-indigo-50 p-4 rounded-xl">
                    <div className="bg-indigo-100 p-1 rounded mr-3 mt-0.5">
                      <Moon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">
                      Feel most alert and productive in the evening hours
                    </span>
                  </li>
                  <li className="flex items-start bg-indigo-50 p-4 rounded-xl">
                    <div className="bg-indigo-100 p-1 rounded mr-3 mt-0.5">
                      <Moon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">
                      Stay awake late into the night, often needing a later
                      bedtime
                    </span>
                  </li>
                  <li className="flex items-start bg-indigo-50 p-4 rounded-xl">
                    <div className="bg-indigo-100 p-1 rounded mr-3 mt-0.5">
                      <Moon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">
                      Have your peak energy levels during the second half of the
                      day
                    </span>
                  </li>
                  <li className="flex items-start bg-indigo-50 p-4 rounded-xl">
                    <div className="bg-indigo-100 p-1 rounded mr-3 mt-0.5">
                      <Moon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">
                      Experience a decline in energy and alertness in the
                      morning
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mb-10 max-sm:flex-col max-sm:gap-3">
            <button
              onClick={() => handleFeedback(true)}
              className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              <ThumbsUp className="h-6 w-6" />
              <span>Like</span>
            </button>
            <button
              onClick={() => handleFeedback(false)}
              className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              <ThumbsDown className="h-6 w-6" />
              <span>Dislike</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              <Share2 className="h-6 w-6" />
              <span>Share</span>
            </button>
          </div>
          {feedback !== null && (
            <div
              className={`p-4 rounded-lg ${
                feedback
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {feedback
                ? "Thank you for your positive feedback!"
                : "We appreciate your feedback."}
            </div>
          )}
          {showShareMessage && (
            <div className="p-4 rounded-lg bg-blue-100 text-blue-800">
              Your result has been shared successfully!
            </div>
          )}
          <Link
            to="/quiz"
            className="flex items-center space-x-2 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
          >
            <ArrowRight className="h-6 w-6" />
            <span>Take Another Quiz</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
