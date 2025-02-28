import React, { useEffect, useState } from "react";
import Boarding from "./Boarding";
import Questions from "./Questions";
import Result from "./Result";

export default function QuizSlides({ quiz }) {
  const [quizStep, setQuizStep] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const [answers, setAnswers] = useState([]);

  function showResult() {
    setQuizStep(2);
  }

  function lockOption(option) {
    setAnswers((prev) => [...prev, option]);
  }

  function startQuiz() {
    setQuizStep(1);
    setStartedAt(Date.now());
  }

  return quizStep === 0 ? (
    <Boarding quiz={quiz} startQuiz={startQuiz} />
  ) : quizStep === 1 ? (
    <Questions
      quiz={quiz}
      startedAt={startedAt}
      answers={answers}
      lockOption={lockOption}
      showResult={showResult}
    />
  ) : (
    <Result quiz={quiz} answers={answers} />
  );
}
