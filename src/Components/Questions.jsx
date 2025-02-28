import React, { useState } from "react";
import Timer from "./Timer";

export default function Questions({
  quiz,
  startedAt,
  answers,
  lockOption,
  showResult,
}) {
  const [currChoice, setCurrChoice] = useState(-1);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white/80 font-light">
          Question {answers.length + 1} / {quiz.length}
        </h2>
        <Timer startedAt={startedAt} />
      </div>
      <div className="mb-4">
        <h3 className="text-white/80 mb-4">{quiz[answers.length].question}</h3>
        <div className="space-y-3">
          {quiz[answers.length].choices.map((choice, i) => (
            <button
              className={`block w-full text-left p-3 border  hover:text-primary hover:border-primary rounded-sm active:bg-black/10 ${
                currChoice === i
                  ? "text-primary border-primary bg-black/5"
                  : "border-white/10 text-white/70"
              } `}
              key={choice}
              onClick={() => setCurrChoice(i)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <p className="text-sm text-white/50">
          * Option cannot be modified once you go to the next question
        </p>
        <button
          className="py-2 px-6 bg-primary text-white/90 rounded-sm"
          onClick={() => {
            if (answers.length === quiz.length - 1) {
              showResult();
            }
            lockOption(currChoice);
            setCurrChoice(-1);
          }}
        >
          {answers.length < quiz.length - 1 ? "Next Question" : "Finish Quiz"}
        </button>
      </div>
    </div>
  );
}
