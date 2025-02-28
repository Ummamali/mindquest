import React, { useEffect } from "react";
import useAsyncStatus from "../hooks/useAsyncStatus";
import parseQuiz from "../Funcs/parseQuiz";
import QuizSlides from "./QuizSlides";

export default function Quiz({ quizFile }) {
  const [quiz, runParse, resetQuiz] = useAsyncStatus(parseQuiz);

  useEffect(() => {
    if (quizFile !== null) {
      console.info("Running parse...");
      runParse(quizFile);
    } else {
      resetQuiz();
    }
  }, [quizFile, runParse, resetQuiz]);
  return (
    <div className="max-w-4xl bg-dark mx-auto rounded-sm px-10 py-10 shadow mb-6">
      {quizFile === null && (
        <p className="text-center text-sm max-w-lg mx-auto text-white/70">
          No quiz file has been uploaded. Please select a valid file to proceed.
        </p>
      )}
      {quiz.loadStatus === 1 && (
        <p className="text-center text-white/80">
          <i className="fa-solid fa-spinner animate-spin mr-4 text-primary"></i>{" "}
          Hang on! Preparing your next challenge...
        </p>
      )}
      {quiz.loadStatus === 2 && <QuizSlides quiz={quiz.result} />}
    </div>
  );
}
