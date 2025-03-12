// src/pages/Statistics.jsx
import { useState, useEffect } from "react";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [activeTab, setActiveTab] = useState("distribution");
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app this would come from your backend
  const chronotypeData = [
    { name: "Morning Lark", users: 1453, percentage: 58 },
    { name: "Night Owl", users: 1052, percentage: 42 },
  ];

  const accuracyData = [
    { month: "Jan", accuracy: 78 },
    { month: "Feb", accuracy: 82 },
    { month: "Mar", accuracy: 85 },
    { month: "Apr", accuracy: 87 },
    { month: "May", accuracy: 91 },
    { month: "Jun", accuracy: 89 },
    { month: "Jul", accuracy: 93 },
  ];

  const feedbackData = [
    { month: "Jan", positive: 86, negative: 14 },
    { month: "Feb", positive: 88, negative: 12 },
    { month: "Mar", positive: 91, negative: 9 },
    { month: "Apr", positive: 89, negative: 11 },
    { month: "May", positive: 93, negative: 7 },
    { month: "Jun", positive: 92, negative: 8 },
    { month: "Jul", positive: 95, negative: 5 },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const totalUsers = chronotypeData.reduce((sum, item) => sum + item.users, 0);

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          SleepSync Statistics
        </h1>
        <p className="text-gray-600 mb-8">
          Discover insights about chronotype distribution and model performance
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTab("distribution")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "distribution"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Chronotype Distribution
              </button>
              <button
                onClick={() => setActiveTab("accuracy")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "accuracy"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Model Accuracy
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "feedback"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                User Feedback
              </button>
            </div>

            {activeTab === "distribution" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                      Total Users
                    </h3>
                    <p className="text-4xl font-bold text-indigo-700">
                      {totalUsers.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">
                      Most Common Type
                    </h3>
                    <p className="text-4xl font-bold text-purple-700">
                      Morning Lark
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Chronotype Distribution
                  </h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chronotypeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis
                          yAxisId="left"
                          orientation="left"
                          stroke="#8884d8"
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          stroke="#82ca9d"
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                          yAxisId="left"
                          dataKey="users"
                          name="Number of Users"
                          fill="#8884d8"
                        />
                        <Bar
                          yAxisId="right"
                          dataKey="percentage"
                          name="Percentage (%)"
                          fill="#82ca9d"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "accuracy" && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Model Accuracy Over Time
                </h3>
                <p className="text-gray-600 mb-4">
                  As our model receives more feedback, its accuracy improves
                  over time.
                </p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={accuracyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="accuracy"
                        name="Accuracy (%)"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Accuracy is calculated by comparing prediction to
                  user-reported accuracy feedback
                </p>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  User Feedback Distribution
                </h3>
                <p className="text-gray-600 mb-4">
                  Percentage of users who agreed with their chronotype
                  prediction.
                </p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={feedbackData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="positive"
                        name="Positive Feedback (%)"
                        fill="#4ade80"
                      />
                      <Bar
                        dataKey="negative"
                        name="Negative Feedback (%)"
                        fill="#f87171"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Based on user feedback after receiving their chronotype
                  prediction
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="bg-indigo-50 rounded-2xl shadow-md p-6 mt-6">
        <h2 className="text-lg font-semibold text-indigo-800 mb-2">
          About the Data
        </h2>
        <p className="text-gray-700">
          This data represents anonymized user responses and feedback from the
          SleepSync quiz. Our machine learning model continuously improves as
          more users provide feedback on their results. All data is collected
          with user consent and stored securely.
        </p>
      </div>
    </div>
  );
};

export default Statistics;
