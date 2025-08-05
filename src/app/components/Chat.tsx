"use client";

import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userAskedQuestion: message }),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
