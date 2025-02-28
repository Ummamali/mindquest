function fileToString(fileObject) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const fileContent = event.target.result;
      setTimeout(() => {
        resolve(fileContent); // File content as a string, Its the return
      }, 3000);
    };

    reader.readAsText(fileObject);
  });
}

export default async function parseQuiz(fileObject) {
  const quizString = await fileToString(fileObject);

  const lines = quizString.split("\n");
  const questions = [];
  let currentQuestion = null;

  lines.forEach((line) => {
    line = line.trim();

    if (line.startsWith("Q)")) {
      // Start a new question
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = {
        question: line.substring(2).trim(),
        choices: [],
        correctIndex: null,
      };
    } else if (line.match(/^[a-z]\)/)) {
      // Check if the option is correct
      let isCorrect = line.includes("*");
      let choiceText = line.replace("*", "").substring(2).trim();

      if (currentQuestion) {
        currentQuestion.choices.push(choiceText);
        if (isCorrect)
          currentQuestion.correctIndex = currentQuestion.choices.length - 1;
      }
    }
  });

  // Push the last question if any
  if (currentQuestion) questions.push(currentQuestion);

  return questions;
}
