# MindQuest 🧠

MindQuest is a web-based quiz application that allows users to upload quizzes in a simple text format. Once uploaded, the application parses the file to extract questions, answer choices, and correct answers. It then presents the quiz interactively, showing one question at a time to the user.

This project is ideal for educators, students, or anyone who wants a quick and customizable way to create and take quizzes without manually entering each question into a form. MindQuest focuses on simplicity, speed, and user-friendly interaction, making quiz creation and participation seamless and intuitive.

At the end of the quiz, users receive instant feedback with their total score and a summary of their answers.

## Features ✨

- **Text File Upload** – Easily upload quizzes using a plain `.txt` file with a simple format.
- **Automatic Parsing** – The app automatically reads and processes the uploaded file to generate quiz questions.
- **Interactive Quiz Flow** – Questions are displayed one at a time, keeping users focused and engaged.
- **Real-Time Scoring** – Scores are calculated instantly and shown at the end of the quiz.
- **Answer Review** – Users receive a summary of their answers with correct/incorrect feedback.
- **Responsive Design** – Fully responsive layout ensures a smooth experience across devices.

## Installation  

Follow these steps to set up and run the Project Manager app locally (Make sure you have Node.js and npm installed before running the commands):  

1. **Clone the repository:**  

    ```sh
   git clone https://github.com/Ummamali/mindquest.git
   cd mindquest

3. **Install dependencies:**

      ```sh
    npm install
    
4. **Start the development server:**

     ```sh
     npm run dev


## Technologies Used ⚙️

- **HTML5** – HTML5 is the foundation of the app's structure, providing the semantic layout and supporting multimedia elements. It ensures that the content is accessible and well-organized across all modern browsers.
  
- **CSS3** – CSS3 is used for styling the app, creating a visually appealing design with modern features like flexbox, animations, and responsive layouts. It enhances the user experience by ensuring that the interface is aesthetically pleasing.

- **JavaScript** – JavaScript is the primary programming language driving the functionality of the app, handling user interactions, and managing dynamic content. It powers the quiz logic, including question navigation and score calculation.

- **React** – React is used to build the app’s user interface with reusable components, allowing for a dynamic and responsive experience. Its virtual DOM ensures optimal performance by efficiently updating the UI when the state changes.

- **Vite** – Vite is a next-generation build tool that is used to bundle the app. It provides fast development with features like hot module replacement (HMR), making the development process faster and more efficient.

- **TailwindCSS** – TailwindCSS is a utility-first CSS framework used to create custom, responsive designs quickly. It simplifies the styling process by providing a wide range of pre-built classes that can be combined to create any layout.

- **Node.js** – Node.js allows the backend of the app to handle server-side logic and file parsing. It enables the app to process quiz files, manage requests, and serve dynamic content efficiently.

- **Git** – Git is a version control system that tracks code changes, facilitates collaboration, and ensures that developers can work on different parts of the project without conflicts. It is essential for maintaining a smooth development workflow.

## 📄 Text File Format

The quiz should be uploaded as a plain text file (.txt) with the following format:

- Each question begins with `Q)` followed by the question text.
- The answer choices are listed with a letter (`a)`, `b)`, etc.), with the correct answer marked by an asterisk `*` before the answer text.

### Example:

Q) What is the capital of Japan?

a) Seoul

b) *Tokyo

c) Beijing

d) Bangkok

Ensure that each question is formatted in this manner to ensure proper parsing and functionality in the app.

## License  

This project is licensed under the **MIT License**. For more details, visit [MIT License](https://opensource.org/licenses/MIT).  
