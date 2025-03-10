// src/pages/Quiz.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "What time do you naturally wake up on weekends (without an alarm)?",
    options: [
      { id: "a", text: "Before 6:00 AM", value: 5 },
      { id: "b", text: "6:00 AM - 8:00 AM", value: 4 },
      { id: "c", text: "8:00 AM - 10:00 AM", value: 3 },
      { id: "d", text: "10:00 AM - 12:00 PM", value: 1 },
      { id: "e", text: "After 12:00 PM", value: 0 },
    ]
  },
  {
    id: 2,
    text: "When do you feel most energized during the day?",
    options: [
      { id: "a", text: "Early morning (5:00 AM - 8:00 AM)", value: 5 },
      { id: "b", text: "Mid-morning (8:00 AM - 11:00 AM)", value: 4 },
      { id: "c", text: "Afternoon (11:00 AM - 4:00 PM)", value: 3 },
      { id: "d", text: "Evening (4:00 PM - 8:00 PM)", value: 1 },
      { id: "e", text: "Night (8:00 PM - 12:00 AM)", value: 0 },
    ]
  },
  {
    id: 3,
    text: "How easy is it for you to wake up before 7:00 AM?",
    options: [
      { id: "a", text: "Very easy - I often wake up before my alarm", value: 5 },
      { id: "b", text: "Somewhat easy - I can do it without much trouble", value: 4 },
      { id: "c", text: "Neutral - It depends on the day", value: 3 },
      { id: "d", text: "Somewhat difficult - I need multiple alarms", value: 1 },
      { id: "e", text: "Very difficult - It's a real struggle", value: 0 },
    ]
  },
  {
    id: 4,
    text: "When would you prefer to exercise for maximum energy and performance?",
    options: [
      { id: "a", text: "Early morning (5:00 AM - 8:00 AM)", value: 5 },
      { id: "b", text: "Mid-morning (8:00 AM - 11:00 AM)", value: 4 },
      { id: "c", text: "Afternoon (11:00 AM - 4:00 PM)", value: 3 },
      { id: "d", text: "Evening (4:00 PM - 8:00 PM)", value: 1 },
      { id: "e", text: "Night (8:00 PM - 12:00 AM)", value: 0 },
    ]
  },
  {
    id: 5,
    text: "When do you feel most creative and productive?",
    options: [
      { id: "a", text: "Early morning", value: 5 },
      { id: "b", text: "Late morning", value: 4 },
      { id: "c", text: "Early afternoon", value: 3 },
      { id: "d", text: "Late afternoon/early evening", value: 1 },
      { id: "e", text: "Late night", value: 0 },
    ]
  },
  {
    id: 6,
    text: "How do you feel about staying up past midnight?",
    options: [
      { id: "a", text: "I avoid it - I'm too tired and want to sleep", value: 5 },
      { id: "b", text: "I can do it occasionally but prefer not to", value: 4 },
      { id: "c", text: "It doesn't affect me much either way", value: 3 },
      { id: "d", text: "I often stay up late without issues", value: 1 },
      { id: "e", text: "I'm most alert and productive late at night", value: 0 },
    ]
  },
  {
    id: 7,
    text: "If you could choose your ideal work hours, what would they be?",
    options: [
      { id: "a", text: "Very early (5:00 AM - 1:00 PM)", value: 5 },
      { id: "b", text: "Early (7:00 AM - 3:00 PM)", value: 4 },
      { id: "c", text: "Standard (9:00 AM - 5:00 PM)", value: 3 },
      { id: "d", text: "Late (11:00 AM - 7:00 PM)", value: 1 },
      { id: "e", text: "Very late (2:00 PM - 10:00 PM or later)", value: 0 },
    ]
  }
];

const Quiz = ({ setQuizResults }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId, optionValue) => {
    setAnswers({ ...answers, [questionId]: optionValue });
  };

  const isCurrentQuestionAnswered = () => {
    return answers[questions[currentQuestion].id] !== undefined;
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    
    // Calculate the score
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const maxPossibleScore = questions.length * 5; // Assuming 5 is max value per question
    const percentageScore = (totalScore / maxPossibleScore) * 100;
    
    // Determine if Morning Lark or Night Owl
    // Higher scores indicate Morning Lark tendencies
    const chronotype = percentageScore > 50 ? "Morning Lark" : "Night Owl";
    const confidence = Math.abs(percentageScore - 50) * 2; // 0-100 confidence scale
    
    setTimeout(() => {
      setQuizResults({
        chronotype,
        confidence: confidence.toFixed(1),
        score: totalScore,
        maxScore: maxPossibleScore,
      });
      setLoading(false);
      navigate('/results');
    }, 1500);
  };

  const progress = ((Object.keys(answers).length) / questions.length) * 100;

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Sleep Pattern Quiz</h1>
          <p className="text-gray-600">Answer these 7 questions to discover your chronotype</p>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  answers[questions[currentQuestion].id] === option.value
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30'
                }`}
                onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                    answers[questions[currentQuestion].id] === option.value
                      ? 'border-indigo-500 bg-indigo-500 text-white'
                      : 'border-gray-300'
                  }`}>
                    {answers[questions[currentQuestion].id] === option.value && (
                      <Check className="w-3 h-3" />
                    )}
                  </div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>
          
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={goToNextQuestion}
              disabled={!isCurrentQuestionAnswered()}
              className={`flex items-center px-6 py-2 rounded-lg font-medium ${
                isCurrentQuestionAnswered()
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentQuestionAnswered() || loading}
              className={`flex items-center px-6 py-2 rounded-lg font-medium ${
                isCurrentQuestionAnswered() && !loading
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  Get Results
                  <ChevronRight className="w-5 h-5 ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;