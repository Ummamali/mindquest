import React, { useState } from "react";
import Header from "./Components/Header";
import UploadQuiz from "./Components/UploadQuiz";
import Quiz from "./Components/Quiz";

export default function App() {
  const [quizFile, setQuizFile] = useState(null);

  function changeQuizFile(newFile) {
    setQuizFile(newFile);
  }

  function removeQuizFile() {
    setQuizFile(null);
  }

  return (
    <div>
      <header className="mb-6">
        <Header />
        <UploadQuiz quizFile={quizFile} changeQuizFile={changeQuizFile} />
      </header>
      <Quiz quizFile={quizFile} removeQuizFile={removeQuizFile} />
    </div>
  );
}
