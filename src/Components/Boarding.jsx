import React from "react";

export default function Boarding({ quiz, minutes = 15, startQuiz }) {
  return (
    <div className="fade-in">
      <div className="mb-8 text-center">
        <h1 className=" text-white/80 text-3xl font-light mb-1">Your Quiz</h1>
        <p className="text-sm text-white/70">
          Dive into the quiz your instructor prepared for you!
        </p>
      </div>
      <div className="text-center text-white/70 mb-8 flex items-center justify-center  space-x-10">
        <p>
          Total Questions: <span className="text-primary">{quiz.length}</span>
        </p>
        <p>
          Minutes: <span className="text-primary">{minutes}</span>
        </p>
      </div>

      <div className="text-center">
        <button
          className="inline mx-auto py-2 px-18 rounded-sm bg-primary text-white/90 mb-1 hover:brightness-110"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
        <p className="text-sm text-white/50">
          Quiz cannot be cancelled once started
        </p>
      </div>
    </div>
  );
}
