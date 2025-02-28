import React from "react";

export default function Header() {
  return (
    <div className="text-center px-4 pt-8 mb-2">
      <div className="flex items-center justify-center mb-4">
        <img src="/logo.svg" alt="App Logo" width={40} className="mr-2" />
        <h2 className="font-logo text-2xl text-logo-gray">MindQuest</h2>
      </div>
      <p className="text-sm max-w-lg mx-auto text-black/80">
        Embark on a journey of knowledge and challenge your mind with MindQuest!
        Test your skills across various topics and see how far you can go!
      </p>
    </div>
  );
}
