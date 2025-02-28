import React, { useRef, useState } from "react";

export default function UploadQuiz({ quizFile, changeQuizFile }) {
  const inputElRef = useRef();

  function clickInputEl() {
    inputElRef.current.click();
  }
  return (
    <div className="flex justify-center">
      <input
        type="file"
        ref={inputElRef}
        className="hidden"
        accept=".txt"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            changeQuizFile(e.target.files[0]);
          } else {
            changeQuizFile(null);
          }
        }}
      />
      {quizFile === null ? (
        <button
          className="bg-primary py-2 px-6 rounded-sm text-black/80 hover:brightness-110"
          onClick={clickInputEl}
        >
          Upload Quiz
        </button>
      ) : (
        <button
          className="inline-block border border-black/35 rounded-sm py-2 px-4 text-black/80 hover:bg-black/3"
          onClick={clickInputEl}
        >
          {quizFile.name}
          <i className="fa-solid fa-pen ml-5 text-sm"></i>
        </button>
      )}
    </div>
  );
}
