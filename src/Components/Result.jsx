import React, { useEffect, useState } from "react";

export default function Result({ quiz, answers, removeQuizFile }) {
  const [score, setScore] = useState(0);

  const percentage = (score / quiz.length) * 100;

  console.log(answers);

  useEffect(() => {
    let newScore = 0;
    quiz.forEach((qusetion, i) => {
      if (qusetion.correctIndex === answers[i]) {
        newScore += 1;
      }
    });

    setScore(newScore);
  }, [quiz, answers]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white/80 font-light">Your Result</h2>
        <h2 className="text-2xl text-primary font-light">
          {score} / {quiz.length} ({percentage.toFixed(1)}%)
        </h2>
      </div>

      <div className="space-y-8 fade-in">
        {quiz.map((question, qIdx) => (
          <div key={question.question}>
            <h2 className="text-white/90 mb-3">{question.question}</h2>
            <div className="space-y-2">
              {question.choices.map((choice, i) => (
                <div
                  className={`block w-full text-left p-3 border border-white/20 text-white/80 rounded-sm ${
                    question.correctIndex === i
                      ? "!border-green-500 !text-green-400 bg-black/5"
                      : answers[qIdx] === i
                      ? "!border-red-500 !text-red-400"
                      : ""
                  }`}
                  key={choice}
                >
                  {question.correctIndex === i ? (
                    <i className="fa-solid fa-check mr-3"></i>
                  ) : answers[qIdx] === i ? (
                    <i className="fa-solid fa-xmark mr-3"></i>
                  ) : null}
                  {choice}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="px-8 py-2 bg-primary block ml-auto mt-4 rounded-sm text-black/80"
        onClick={removeQuizFile}
      >
        Reset Quiz
      </button>
    </div>
  );
}
