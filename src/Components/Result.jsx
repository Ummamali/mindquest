import React, { useEffect, useState } from "react";

export default function Result({ quiz, answers }) {
  const [score, setScore] = useState(0);

  const percentage = (score / quiz.length) * 100;

  useEffect(() => {
    let newScore = 0;
    quiz.forEach((qusetion, i) => {
      if (qusetion.correctIndex === answers[i]) {
        newScore += 1;
      }
    });

    setScore(newScore);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white/80 font-light">Your Result</h2>
        <h2 className="text-2xl text-primary font-light">
          {score} / {quiz.length} ({percentage.toFixed(1)}%)
        </h2>
      </div>

      <div className="space-y-8 fade-in">
        {quiz.map((question) => (
          <div key={question.question}>
            <h2 className="text-white/90 mb-3">{question.question}</h2>
            <div className="space-y-2">
              {question.choices.map((choice, i) => (
                <div
                  className={`block w-full text-left p-3 border border-white/20 text-white/80 rounded-sm ${
                    question.correctIndex === i
                      ? "!border-green-500 !text-green-400 bg-black/5"
                      : i === answers[i]
                      ? "!border-red-500 !text-red-400"
                      : ""
                  }`}
                  key={choice}
                >
                  {question.correctIndex === i ? (
                    <i className="fa-solid fa-check mr-3"></i>
                  ) : i === answers[i] ? (
                    <i className="fa-solid fa-xmark mr-3"></i>
                  ) : null}
                  {choice}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
